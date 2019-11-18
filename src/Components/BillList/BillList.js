import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillList = () => {

  const { bills, editBill, setEditModeEnabled } = useContext(BillContext);

  return (
    <div className='bill-list-container'>
      <h6 className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</h6>
      {
        bills.map((bill, index) => {
          return(
            <div key={index} className='bill-list-row'>
              <input type='checkbox'
                className='form-check-input'
                checked={bill.enabled}
                onChange={() => editBill({
                  title: bill.title,
                  monthlyCost: bill.monthlyCost,
                  enabled: !bill.enabled
                })}>
              </input>
              <div className='bill-list-row-content'>
                {bill.title} - ${bill.monthlyCost}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default BillList;