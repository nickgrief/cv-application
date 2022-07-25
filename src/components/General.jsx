import InputField from './InputField';

export default function General() {
  return (
    <div className='flex flex-wrap justify-center align-middle'>
      <InputField label={'Your name:'} type={'text'} id={'name'} />
      <InputField label={'Your email:'} type={'email'} id={'email'} />
      <InputField label={'Your phone:'} type={'tel'} id={'phone'} />
    </div>
  );
}
