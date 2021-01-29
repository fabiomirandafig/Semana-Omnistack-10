//App é uma função que retorna um conteúdo html
//tudo que esta dentro de return é exibido na tela do browser.
//Três conceitos principais do react: 
//Componente: Função que retorna algum conteúdo HTML, CSS ou Javascript pra questão de interface. A função App é um componente. Primeira letra maiuscula mostra que a função é um componente. Pode ser utilizado igual utiliza uma tag de HTML. Um componente por arquivo. Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//Propriedade: Chamado de "atributos" no HTML. Exemplo: um título. A partir do momento que está sendo passando um atributo para um componente no React, ocorre a "propriedade". É replicável. Informações que um componente PAI(App) passa para o componente filho(Header).
//Estado: Informação que um componente vai manipular. Informações mantidas pelo componente (Lembrar do conceito de imutabilidade)
//Toda função própria de um componente é implementada dentro desse componente.Ex: function incrementCounter.
//React aposta no conceito de imutabilidade, que se refere à nunca alterar um dado, sempre criar um novo dado apartir do seu valor anterior. Não pode alterar o valor de um estado de forma direta.

import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return(
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
