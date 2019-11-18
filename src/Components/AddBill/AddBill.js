import React, { useContext, useState } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const AddBill = () => {

  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');

  const { updateBills } = useContext(BillContext);

  const billObjectValid = () => {
    // newBillCost is truthy and is a number
    const costValid = newBillCost && Number.parseFloat(newBillCost);

    // newBillTitle is truthy and not only whitespace characters
    const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ');
    return titleValid && costValid;
  };
  const clearForm = () => {
    setNewBillCost('');
    setNewBillTitle('');
  };

  return (
    <div className='add-bill-container'>
      <input className='add-bill-form-control form-control'
        placeholder='Enter bill title'
        type='text'
        value={newBillTitle}
        onChange={(e) => setNewBillTitle(e.target.value)}></input>
      <input className='add-bill-form-control form-control'
        placeholder='Enter bill monthly cost'
        type='number'
        value={newBillCost}
        onChange={(e) => setNewBillCost(e.target.value)}></input>
      <button className='add-bill-form-control btn btn-primary'
        onClick={() => {
          if(billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true
            });
            clearForm();
          }
        }}>Add Bill</button>
    </div>
  );
};

export default AddBill;