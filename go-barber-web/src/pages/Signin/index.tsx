import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="GoBarber Logo" />
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" type="email" />
          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="conta">
          <FiLogIn size={16} />
          Criar conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
