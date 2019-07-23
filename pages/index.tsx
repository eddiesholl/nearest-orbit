import { Visualiser } from '../components/Visualiser'
import { Timer } from '../components/Timer'

export const Home = () => (
  <Timer>
    {(frames) => <Visualiser frames={frames} />}
  </Timer>
  
)

export default Home
