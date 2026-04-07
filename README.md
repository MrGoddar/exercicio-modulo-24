Este repositório contém os exercícios de automação de teste de API do Módulo 24 da EBAC. O foco do projeto é a validação dos serviços de Clientes (Customers) e Pedidos (Orders) da plataforma EBAC Store utilizando arquitetura REST.

🚀 Tecnologias Utilizadas
Node.js (Ambiente de execução)

PactumJS (Framework de teste de API)

Mocha (Test Runner)

Faker (Geração de dados aleatórios - opcional)

🛠️ Estrutura do Projeto
test/: Contém os arquivos de especificação de teste (.spec.js).

config.js: Centralização da URL_BASE para facilitar a manutenção entre ambientes.

⚙️ Como Executar o Projeto
Clone o repositório:

Bash
git clone https://github.com/MrGoddar/exercicio-modulo-24.git
Instale as dependências:

Bash
npm install
Execute os testes:

Bash
npx mocha test/*.spec.js
