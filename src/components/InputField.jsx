import { useState } from 'react';

export default function InputField({ label, type, id }) {
  const [showField, setShowField] = useState(false);
  const [value, setValue] = useState('');

  function handleClick(e) {
    e.preventDefault();
    setShowField(!showField);
  }

  function handleInput(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  let fieldInput = (
    <div>
      <input
        type={type}
        name={label}
        id={id}
        onInput={handleInput}
        value={value}
        className='border-2 border-red-300 rounded-md p-1 w-64 mx-2'
      />
      <button onClick={handleClick} className='bg-red-300 p-1 rounded-md'>
        Done
      </button>
    </div>
  );

  let fieldValue = (
    <div className='flex items-center gap-1'>
      <label className='border-2 p-1 rounded-md border-red-300'>{value}</label>
      <button onClick={handleClick} className='bg-red-300 p-1 rounded-md'>
        Edit
      </button>
    </div>
  );

  return (
    <div className='m-2 flex'>
      <label htmlFor={id} className='m-2'>
        {label}
      </label>
      {showField ? fieldInput : fieldValue}
    </div>
  );
}
