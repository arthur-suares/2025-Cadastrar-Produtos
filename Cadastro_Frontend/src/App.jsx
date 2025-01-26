import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CadastroPage from "./Pages/Cadastro/index"
import ListagemPage from './Pages/LitagemPage';


function App() {
  useEffect(() => {
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CadastroPage />} />
          <Route path='/listarProdutos' element={<ListagemPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
