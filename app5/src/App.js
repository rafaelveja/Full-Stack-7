import logo from './logo.svg';
import './App.css';

import { lazy, Suspense } from 'react';
 
// import Texto from './Texto';
// import Link from './Link';

const Texto = lazy ( () => import('./Texto'));
const Link = lazy ( () => import('./Link'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Suspense fallback={ <p>Aguarde... carregando!!!</p>}>
          <Texto />
        </Suspense>

        <Suspense fallback={ <p>Aguarde... carregando!!!</p>}>
          <Link />
        </Suspense>

      </header>
    </div>
  );
}

export default App;
