import Education from './Education';
import Experience from './Experience';
import General from './General';
import Header from './Header';

export default function App() {
  return (
    <div className='flex flex-col m-4 text-center'>
      <Header />
      <General />
      <Education />
      <Experience />
    </div>
  );
}
