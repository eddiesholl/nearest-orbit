import { Visualiser } from '../components/Visualiser'
import { Timer } from '../components/Timer'

export const Home = () => (
  <Timer>
    {(frame) => <Visualiser frame={frame} />}
  </Timer>
  
)

export default Home
