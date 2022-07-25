import InputField from './InputField';

export default function Inputs({ inputs = [] }) {
  let inputFields = inputs.map((input) => {
    return (
      <InputField label={`Your ${input.id}:`} type={input.type} id={input.id} />
    );
  });
  return (
    <div className='flex flex-wrap justify-center align-middle'>
      {inputFields}
    </div>
  );
}
