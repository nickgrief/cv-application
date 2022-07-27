import InputList from './components/InputList';
import Section from './components/Section';
import Header from './Header';

export default function App() {
  return (
    <form className='flex flex-col m-4 text-center'>
      <Header />
      <Section
        name={'General'}
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
      <Section
        name={'Education'}
        inputs={[
          {
            type: 'text',
            id: 'school',
          },
          {
            type: 'text',
            id: 'study title',
          },
          {
            type: 'date',
            id: 'date of study',
          },
        ]}
      />
      <Section
        name={'Experience'}
        inputs={[
          {
            type: 'text',
            id: 'company name',
          },
          {
            type: 'text',
            id: 'position title',
          },
          {
            type: 'text',
            id: 'tasks you did',
          },
          {
            type: 'date',
            id: 'date of starting at that job',
          },
          {
            type: 'date',
            id: 'date of finishing at that job',
          },
        ]}
      />
      <button className='bg-red-300 rounded-xl p-2' type='submit'>
        Submit
      </button>
    </form>
  );
}
