import Inputs from './components/Inputs';
import SectionHeader from './components/SectionHeader';

export default function General() {
  return (
    <div className='bg-red-100 border-red-200 border-2 rounded-md my-2'>
      <SectionHeader name={'General information:'} />
      <Inputs
        inputs={[
          {
            type: 'text',
            id: 'name',
          },
          {
            type: 'email',
            id: 'email',
          },
          {
            type: 'tel',
            id: 'phone',
          },
        ]}
      />
    </div>
  );
}
