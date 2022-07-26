import Inputs from './Inputs';
import SectionHeader from './SectionHeader';

export default function Section({ name, inputs }) {
  return (
    <div className='bg-red-100 border-red-200 border-2 rounded-md my-2'>
      <SectionHeader name={name} />
      <Inputs inputs={inputs} />
    </div>
  );
}
