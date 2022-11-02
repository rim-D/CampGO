import Lottie from 'react-lottie-player'
import animationJson from '../../public/animation.json'

export default function Animation() {
  return (
    <>
      <Lottie
        loop
        animationData={animationJson}
        play
      />
    </>
  )
}