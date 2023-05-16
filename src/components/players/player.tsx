import Players from '../../assets/Bishop Black.svg'
import { useAppSelector } from '../../store/hooks'
export default function Player() {

  const positions = useAppSelector((state) => state.players)

  return (
    <img 
      src={Players} 
      alt="" 
      className={`w-14 absolute transition ease-in-out -left-[60px] z-10`}
      style={
        {
          transform: `translate(${positions.x * 76}px, -${positions.y * 73}px)`
        }
      }
    />
  )
}