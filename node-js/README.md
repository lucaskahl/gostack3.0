# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em prod;
- O envio de e-mails deve acontecer em segundo plano;

**RN**

- O link enviado por email para resetar, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail em uso;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias disponíveis de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis de um dia especifico de um prestador;
- O usuári odeve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1hr;
- Os agendamentos devem estar disponíveis entre 8h ás 18h;
- O usuário não pode agendar em um horário já agendado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar em um horário consigo mesmo;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos em um dia específico;
- O prestador deve receber uma notificação semrpe que houver um agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.IO;

**RN**

- As notificações devem ter um status de lida ou não lida para que o prestador possa controlar;
