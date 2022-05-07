import { useState,useEffect } from 'react'

import "./style.css"


function App() {
  // https://sujeitoprogramador.com/rn-api/?api=posts

  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi(){
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setNutri(data)                                                              
      })
    }
    loadApi()
  }, [])

  return (
    <div className="container">
      <header>
      <h1>Dicas de Nutrição</h1>
      </header>

      {
        nutri.map((item,index) => (
          <article key={index} className="post">
            <strong className='titulo'>{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='butao'> Acessar</a>
          </article>
        ))
      }
    </div>
  );
}

export default App
