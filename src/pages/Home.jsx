import LetterBoard from '../components/LetterBoard'
import { Logo } from '../components/Logo';


function Home() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center h-28'>
          <Logo/>
        </div>
        <LetterBoard/>
      </div>
      
    </>
  );
}

export default Home
