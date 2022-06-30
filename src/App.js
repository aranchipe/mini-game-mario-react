import { useState } from 'react';
import './App.css';
import marioImg from './assets/mario.gif'
import pipe from './assets/pipe.png'
import gameover from './assets/gameover.png'
import nuvens from './assets/nuvens.png'

function App() {
  const [jump, setJump] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  document.addEventListener('keydown', pular)
  const tubo = document.querySelector('.pipe')
  const mario = document.querySelector('.mario')
  const nuvens2 = document.querySelector('.nuvens')

  function pular() {
    setJump(true)
    setTimeout(() => {
      setJump(false)
    }, 800)
  }

  const verificacao = setInterval(() => {
    const tuboPosition = tubo.offsetLeft
    console.log(tuboPosition)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if (tuboPosition <= 140 && marioPosition < 80 && tuboPosition > 0) {
      tubo.style.animation = 'none'
      tubo.style.left = `${tuboPosition}px`
      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`
      mario.src = gameover
      nuvens2.style.display = 'none'
      setPerdeu(true)
      clearInterval(verificacao)
    }
  }, 10)

  return (
    <div className="App">
      <div onClick={pular} className='game-board'>
        <div className='div-perdeu'>
          {perdeu && <h1 className='perdeu'>Você Perdeu</h1>}
          {perdeu && <button onClick={() => window.location.reload()} >Recomeçar</button>}
        </div>
        <div className='nuvens'>
          <img src={nuvens} alt='nuvens' className='nuvens1' />
          <img src={nuvens} alt='nuvens' className='nuvens2' />
          <img src={nuvens} alt='nuvens' className='nuvens3' />
        </div>
        <img className={jump ? 'mario jump' : 'mario'} src={marioImg} alt='mario' />
        <img className='pipe' src={pipe} alt='pipe' />
      </div>
    </div>
  );
}

export default App;
