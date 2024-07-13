# PT-BR

### INFORMAÇÕES

- O aplicativo está executando com "docker compose-up --build" / "docker compose-up";
- O host está em "http://localhost:3000/";
- O código e os comentários presentes nesse foram feitos "in english";
- Apesar do banco de dados ser local (json), ainda é feito requisições para obter as informações,
usando as próprias queries do graphQL, para fins didáticos. Portanto, só há o método get criado;
- Caso seja necessário popular o banco de dados, há um script em ./src/db/add_to_db.js que adiciona
as sugestões de pesquisa, uma por linha, através de um arquivo add_me.txt, no mesmo diretório;
- Há um diagrama de blocos da aplicação na pasta diagram;
- Front em React/tailwind CSS, servidor em Node.js, back em JavaScript;
- Sugestões de pesquisa em inglês, estão nichadas na área de TI.

### COMENTÁRIOS

- Devido a problemas de tempo, o front-end só teve o necessário para os requisitos, então seria uma boa
oportunidade de melhorar a estética da tela de pesquisa em momentos futuros, seja adicionando uma imagem
com uma logo ou coisa do tipo, uma tela básica com uma descrição breve do conteúdo, uma modificação na
barra de rolagem (não tem nativamente no tailwind, apenas com lib open source, então teria que analisar
fatores de compatibilidade, etc);
- O tailwind foi utilizado em oposição ao CSS puro devido ao maior entendimento da linguagem;
- Como comentado nas informações, o banco de dados usado foi local, também pelo problema de tempo, já que
edições locais facilitam na hora de debugar a aplicação. Então, efetuar essa migração para um banco
open source, como também implementar os métodos de POST, UPDATE, DELETE no servidor para permitir mais
dinamicidade à aplicação, ajudaria bastante no aprendizado;
- Como a pesquisa usou um método simples de busca (matching de prefixo), abre brecha para criar um modelo
de coleta de dados com ML retornando conteúdos que estão mais em alta (mais cliques) que dão matching com
a string que o usuário está digitando;
- Refletindo a ideia anterior, estaticamente é possível fazer uma boa resposta com um array de sufixos e
uma estrutura de consulta mínima... criar esse modelo dinamicamente com boa responsividade parece um bom
desafio;
- GraphQL e React de primeira viagem, então fica uma brecha de como deixaria um código mais limpo em termos
de hooks e requests de servidor, além de entender melhor o funcionamento dos servidores, APIs e da linguagem.


