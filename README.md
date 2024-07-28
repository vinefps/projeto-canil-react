# Projeto UPX

Este é um projeto focado em um site informativo sobre o abandono de cachorros. Além de fornecer informações, o objetivo é facilitar o processo de adoção de um cachorro através da página.

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Se você ainda não tem o Node.js instalado, você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.
Link para download: https://nodejs.org/en

Verificando a Instalação do Node.js

Para verificar se o Node.js está instalado corretamente e para verificar a versão atual, abra o terminal e execute os seguintes comandos:
node --version


Este projeto utiliza várias ferramentas e bibliotecas para desenvolvimento e execução. Abaixo estão as principais ferramentas e como você pode instalá-las usando o npm no terminal do VSCode.

# Ferramentas e Bibliotecas Utilizadas Dependências de Produção:

Dependências de Produção:</br>

-Next.js: Framework React para renderização no lado do servidor e do cliente. Versão: 13.4.2. </br></br>
-React e React-DOM: Bibliotecas para construir interfaces de usuário com React. Versão: 18.2.0.</br></br>
-TailwindCSS: Framework utilitário de CSS de primeira classe para construir designs personalizados rapidamente. Versão: 3.3.2.</br></br>
-TypeScript: Superset do JavaScript que adiciona tipagem estática. Versão: 5.0.4.</br></br>
-Eslint e eslint-config-next: Ferramentas de linting para manter a consistência do código. Versões: 8.40.0 e 13.4.2, respectivamente.</br></br>


Dependências de Desenvolvimento:

-@types/node, @types/react, @types/react-dom: Tipos TypeScript para Node.js e React. Versões: 20.1.4, 18.2.6 e 18.2.4, respectivamente.</br></br>
-@types/react-modal: Tipos TypeScript para a biblioteca react-modal. Versão: 3.16.0.


# Como Instalar as Ferramentas
Para instalar todas as ferramentas e bibliotecas necessárias, siga os passos abaixo:

Abra o terminal do VSCode.
Navegue até o diretório raiz do projeto (upx).
Instalar Dependências de Produção:
Execute o seguinte comando no terminal:

npm install


Este comando instalará todas as dependências listadas no arquivo package.json.

Instalar Dependências de Desenvolvimento:
Se você também deseja instalar as dependências de desenvolvimento (listadas em devDependencies), execute:

npm install --save-dev
