import React, { useReducer } from 'react';
import './App.css';

//lo pone en una const para evitar problemas de typeos de strings
const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

//LA FUNCION REDUCER recibe 2 parametros el primero es el state y
//el segundo es el action que es lo que le pasamos por parametro en el dispatch
function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  //el useReducer devuelve 2 cosas el estado y una funcion para modificarlo
  //tiene 2 argumentos, primera una funcion en la que estan los actions y el segundo argumento el estado inicial
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //en estas 2 funciones llamamos al dispatch y le pasamos un type en el action para saber que hacer
  const increment = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
