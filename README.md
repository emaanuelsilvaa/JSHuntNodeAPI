# JSHuntNodeAPI
API desenvolvida em nodeJS durante o curso starter da rocketseat.


## Recursos utilizados
* NodeJS
* MongoDB Atlas


## Executando o projeto

Com o nodeJS instalado na maquina, basta baixar o projeto, entrar na pasta do projeto com o comando `cd JSHuntNodeAPI`, instalar as dependências necessárias com o comando `npm install`, e executar o projeto: `npm run dev`. 




### EndPoints
* GET http://localhost:3001/api/products - Lista todos os itens cadastrados.
* GET http://localhost:3001/api/products/{id} - Retorna um item conforme o id passado no cabeçalho.
* POST http://localhost:3001/api/products - Cadastra/Isere um item, passando as informações de cadastro pelo body no seguinte formato JSON:
`{
	"title": "ReactJs",
	"description": "Biblioteca para criar aplicações interativas com javaScript",
	"url": "http://github.com/facebook/react"
}`
* PUT http://localhost:3001/api/products/{id} - Atualiza um item de acordo com o id passado no cabeçalho, passando as novas informações no seguinte formato JSON:
`{
	"title": "React"
}`
* DELETE http://localhost:3001/api/products/{id} - Deleta um item de acordo com o id passado no cabeçalho.

---

## Meta
Emanuel Silva – emanuelborgesdasilva@gmail.com

Distribuído sob MIT License. Veja [LICENSE.md](LICENSE) para mais informações.


