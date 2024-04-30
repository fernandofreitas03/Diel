# Documentação do Projeto E-Scheduler

# Estrutura de Diretórios e Arquivos

O projeto E-Scheduler é uma aplicação de calendário interativo desenvolvida com React, utilizando a biblioteca FullCalendar para renderização dos eventos. A seguir, apresentamos a estrutura de diretórios e arquivos chave do projeto, acompanhados de uma breve descrição de sua finalidade e conteúdo.

# Raiz do Projeto

`package.json:` Arquivo de configuração do Node.js, definindo nome, versão, dependências, scripts e configurações de lint para o projeto.

# Pasta calendario

### Pasta public

`index.html:` Arquivo HTML principal que serve como ponto de entrada para a aplicação web. Define a estrutura básica da página e o ponto de montagem do React (div#root).

# Pasta src

### Arquivos Principais

`App.js:` Componente React principal que encapsula o componente do calendário.

`index.js:` Ponto de entrada do React, responsável por renderizar o aplicativo no DOM.

# Pasta components

`Calendario.jsx:` Componente React que implementa o calendário utilizando FullCalendar. Inclui manipulação de eventos e formulário para adicionar novos eventos ao calendário.

`index.css:` Arquivo CSS global, incluindo estilos específicos para popovers e outros elementos de interface.

`calendario.css:` Arquivo CSS dedicado ao estilo e layout do componente Calendário, incluindo responsividade e customização de elementos do 
FullCalendar.

# Estrutura e Funcionalidade

O projeto utiliza React para construir uma interface de usuário dinâmica e interativa. A aplicação principal (App.js) integra o componente Calendario, que por sua vez utiliza a biblioteca FullCalendar para renderizar um calendário interativo.

O arquivo index.html na pasta public define a estrutura básica da página, incluindo o elemento div#root onde o React irá montar o componente principal da aplicação.

O componente Calendario (Calendario.jsx) é onde a lógica principal da aplicação reside. Este componente faz uso de diversos plugins do FullCalendar para fornecer funcionalidades como visualização mensal, semanal e diária, além de permitir a interação do usuário com o calendário (por exemplo, adição de eventos).

Os estilos específicos do calendário e dos componentes de interface do usuário estão definidos em index.css e calendario.css. Estes arquivos CSS são responsáveis por ajustar o layout e a aparência dos elementos do calendário e dos formulários de interação, garantindo uma experiência de usuário coesa e visualmente agradável.

# Conclusão

A estrutura de diretórios e arquivos do Projeto E-Scheduler é projetada para organizar de forma clara e eficiente os recursos e a lógica da aplicação. A separação em componentes, juntamente com uma gestão cuidadosa das dependências e estilos, facilita a manutenção e a expansão futuras do projeto.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
