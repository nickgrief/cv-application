import { useState } from 'react';
import InputField from './InputField';

export default function InputList() {
  const [listItems, setListItems] = useState([]);

  return (
    <div>
      <div className='flex justify-center'>
        <InputField label={'Input list:'} type={'text'} id={'input-list'} />
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
