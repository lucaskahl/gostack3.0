import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johen@example.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Du',
      email: 'joheny@example.com',
    });

    expect(updatedUser.name).toBe('John Du');
    expect(updatedUser.email).toBe('joheny@example.com');
  });

  it('should not be able to update user email if email already exists', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johen@example.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Teste Nony',
      email: 'teste@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Du',
        email: 'johen@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johen@example.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Du',
      email: 'joheny@example.com',
      password: '123123',
      old_password: '123456',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update the password without old_password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johen@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Du',
        email: 'joheny@example.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johen@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Du',
        email: 'joheny@example.com',
        old_password: 'wrong-old-pass',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the profile fon a non-existent user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existent-user',
        name: 'John Du',
        email: 'joheny@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
