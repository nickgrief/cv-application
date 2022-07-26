import { useState } from 'react';
import InputField from './InputField';

export default function InputList() {
  const [listItems, setListItems] = useState([]);

  return (
    <div>
      <div className='flex justify-center'>
        <InputField label={'Input list:'} type={'text'} id={'input-list'} />
        <button className='text-red-600 bg-red-100 w-fit h-fit my-auto p-1 rounded-xl'>
          Enter
        </button>
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
