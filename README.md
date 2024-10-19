Contatos
JSON para Criar um Contato (POST /contacts)

Para criar um novo contato, envie os seguintes dados no corpo da requisição:

json
Copiar código
{
  "name": "Lucas Silva",
  "email": "lucas.silva@example.com",
  "phone": "123456789"
}
Requisição para Listar Todos os Contatos (GET /contacts)

Esse endpoint não requer um corpo no JSON. Faça uma requisição GET para a URL:

URL: http://localhost:3001/contacts
Método: GET
Requisição para Obter um Contato Específico (GET /contacts/{id})

Para obter um contato específico, substitua {id} pelo ID do contato desejado. Não é necessário um corpo no JSON.

URL: http://localhost:3001/contacts/{id} (substitua {id} pelo ID real do contato)
Método: GET
JSON para Atualizar um Contato (PUT /contacts/{id})

Para atualizar um contato existente, envie os dados atualizados no corpo da requisição:

json
Copiar código
{
  "name": "Lucas Silva Atualizado",
  "email": "lucas.silva.atualizado@example.com",
  "phone": "987654321"
}
Requisição para Deletar um Contato (DELETE /contacts/{id})

Para deletar um contato específico, forneça o ID do contato. Este endpoint não requer um corpo no JSON.

URL: http://localhost:3001/contacts/{id} (substitua {id} pelo ID real do contato)
Método: DELETE
Respostas Esperadas para Contatos
Criar um Contato:
Se a criação for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Contato criado com sucesso."
}
Listar Todos os Contatos:
A resposta incluirá uma lista de contatos:

json
Copiar código
[
  {
    "id": 1,
    "name": "Lucas Silva",
    "email": "lucas.silva@example.com",
    "phone": "123456789",
    "createdAt": "2024-10-18T12:00:00.000Z",
    "updatedAt": "2024-10-18T12:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Ana Paula",
    "email": "ana.paula@example.com",
    "phone": "987654321",
    "createdAt": "2024-10-18T12:00:00.000Z",
    "updatedAt": "2024-10-18T12:00:00.000Z"
  }
]
Obter um Contato Específico:
A resposta incluirá os detalhes do contato solicitado:

json
Copiar código
{
  "id": 1,
  "name": "Lucas Silva",
  "email": "lucas.silva@example.com",
  "phone": "123456789",
  "createdAt": "2024-10-18T12:00:00.000Z",
  "updatedAt": "2024-10-18T12:00:00.000Z"
}
Atualizar um Contato:
Se a atualização for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Contato atualizado com sucesso."
}
Deletar um Contato:
Se a exclusão for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Contato deletado com sucesso."
}
Agendamentos
JSON para Criar um Agendamento (POST /schedules)

Para criar um novo agendamento, envie os seguintes dados no corpo da requisição:

json
Copiar código
{
  "userId": 1,
  "date": "2024-10-20T14:00:00Z"
}
Requisição para Listar Todos os Agendamentos (GET /schedules)

Faça uma requisição GET para a URL:

URL: http://localhost:3001/schedules
Método: GET
Requisição para Obter um Agendamento Específico (GET /schedules/{id})

Para obter um agendamento específico, substitua {id} pelo ID do agendamento desejado. Não é necessário um corpo no JSON.

URL: http://localhost:3001/schedules/{id} (substitua {id} pelo ID real do agendamento)
Método: GET
JSON para Atualizar um Agendamento (PUT /schedules/{id})

Para atualizar um agendamento existente, envie os dados atualizados no corpo da requisição:

json
Copiar código
{
  "userId": 1,
  "date": "2024-10-21T16:00:00Z"
}
Requisição para Deletar um Agendamento (DELETE /schedules/{id})

Para deletar um agendamento específico, forneça o ID do agendamento. Este endpoint não requer um corpo no JSON.

URL: http://localhost:3001/schedules/{id} (substitua {id} pelo ID real do agendamento)
Método: DELETE
Respostas Esperadas para Agendamentos
Criar um Agendamento:
Se a criação for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Agendamento criado com sucesso."
}
Listar Todos os Agendamentos:
A resposta incluirá uma lista de agendamentos:

json
Copiar código
[
  {
    "id": 1,
    "userId": 1,
    "date": "2024-10-20T14:00:00Z",
    "createdAt": "2024-10-18T12:00:00.000Z",
    "updatedAt": "2024-10-18T12:00:00.000Z"
  },
  {
    "id": 2,
    "userId": 2,
    "date": "2024-10-21T16:00:00Z",
    "createdAt": "2024-10-18T12:00:00.000Z",
    "updatedAt": "2024-10-18T12:00:00.000Z"
  }
]
Obter um Agendamento Específico:
A resposta incluirá os detalhes do agendamento solicitado:

json
Copiar código
{
  "id": 1,
  "userId": 1,
  "date": "2024-10-20T14:00:00Z",
  "createdAt": "2024-10-18T12:00:00.000Z",
  "updatedAt": "2024-10-18T12:00:00.000Z"
}
Atualizar um Agendamento:
Se a atualização for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Agendamento atualizado com sucesso."
}
Deletar um Agendamento:
Se a exclusão for bem-sucedida, a resposta será:

json
Copiar código
{
  "message": "Agendamento deletado com sucesso."
}
Esses exemplos devem ajudar a testar suas rotas de contatos e agendamentos! Se precisar de mais alguma coisa, é só avisar.
