# Redux Saga Live Code

Passos:

No onClick do botão **carregar todos** dentro de componente *<TodoList>*
é disparado a *ActionCreator requestTodoList()* com type **'REQUEST_TODO_LIST'**,
isso é capturando no root do *<saga.js>* com function *takeLatest('REQUEST_TODO_LIST', getTodoList())
onde é chamado como callback a function getTodoList(), nesta é chamado a apiGet() e
no caso de sucesso, é invocado o method put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });
assim informado o reducer sobre o sucesso e atualizando os dados comforme o type da action.


```javascript
function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield [
    // takeEvery('REQUEST_TODO_LIST', getTodoList),
    takeLatest('REQUEST_TODO_LIST', getTodoList),
  ];
}
```

A palavra-chave yield é usada para pausar e resumir uma generator function (function* or generator function legada).

A palavra-chave yield pausa a execução de uma generator function
e o valor da expressão em frente a palavra-chave yield é retornado para a chamada do generator.
Ele pode ser considerado uma versão da palavra-chave return para o generator.
