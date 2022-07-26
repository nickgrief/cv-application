import InputList from './components/InputList';
import Section from './components/Section';
import Header from './Header';

export default function App() {
  return (
    <div className='flex flex-col m-4 text-center'>
      <Header />
      <InputList />
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
          // TODO: List of tasks
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
    </div>
  );
}
