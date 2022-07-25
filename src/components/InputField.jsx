export default function InputField({ label, type, id }) {
  return (
    <div className='m-2'>
      <label htmlFor={id} className='m-2'>
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={id}
        className='border-2 border-red-300 rounded-md p-1'
      />
    </div>
  );
}
