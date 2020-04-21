import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import ApppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider: string;
}

class CreateAppointmentService {
  public async execute({ provider, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(ApppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment date already owned');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
