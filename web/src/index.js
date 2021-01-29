//Importa o "react" em todo arquivo javascript que for utilizar html dentro dele - tags de html na função abaixo
//JSX = Javascript + XML(sintaxe do HTML). União do javascript com o HTML.
//ReactDom dá a habilidade do react se comunicar com a árvore de elementos da aplicação com html

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));

