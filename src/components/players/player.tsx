import Players from './player.png'
import { useAppSelector } from '../../store/hooks'
export default function Player() {

  const positions = useAppSelector((state) => state.players)

  return (
    <img 
      src={Players} 
      alt="" 
      className={`w-6 md:w-14 absolute transition ease-in-out bottom-1 -left-[60px] z-10`}
      style={
        {
          transform: `translate(${positions.x * 73}px, -${positions.y * 70}px)`
        }
      }
      
    />
  )
}