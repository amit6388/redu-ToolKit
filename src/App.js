import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlice';
import { login, logout } from './redux/slices/authSice';
// npm install @reduxjs/toolkit react-redux redux-persist

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <h1>Redux Toolkit with Persist Example</h1>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <h2>User Authentication</h2>
        {isAuthenticated ? (
          <div>
            <p>User is logged in...</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <button onClick={() => dispatch(login({ name: 'John Doe' }))}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
