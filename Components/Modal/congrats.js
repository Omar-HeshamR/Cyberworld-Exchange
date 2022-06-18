import { ClientError } from '@sanity/client'
import { Fireworks } from 'fireworks-js/dist/react'

export const App = () => {
  const options = {
    speed: 4,
    particles: 500,
    opacity: 39,
    acceleration: 1,
    explosion: 2,
    delay: { min: 3, max: 30 },
    
  }

  const style = {
    top: 200,
    left: 80,
    width: '70%',
    height: '60%',
    position: 'fixed',
    background: '#0a0b0d'
  }

  return <Fireworks options={options} style={style} />
}

