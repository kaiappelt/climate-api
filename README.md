# climate-api

### Back-end da plataforma Climate, construído em NodeJS, TypeScript, PostgreSQL.

### Plataforma responsável por sugerir ao usuário atividades a serem realizadas, de acordo com o clima da região que o mesmo cadastrou.

### Instruções de execução:

-   Após baixar o projeto, criar um arquivo .env na raíz e preencher conforme o .env.example;

-   Será necessário prencher somente a variável DB_URL com um endereço url de conexão de base de dados PostgreSQL;

-   Caso desejar executar com o modo padrão de credenciais de base de dados, seguir o padrão do ORM utilizado no projeto: https://typeorm.io/#/ e comentar o objeto ` extra: { ssl: { rejectUnauthorized: false, }, },` no arquivo ormconfig.js localizado na raíz do projeto;

-   Instalar os pacotes com `yarn`;

-   Executar as migrations, se necessário, com `yarn typeorm migration:run`;

-   EXecutar o projeto com `yarn dev`;
