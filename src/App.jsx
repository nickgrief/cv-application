import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';
import Header from './components/Header';

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
