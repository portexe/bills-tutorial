import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const EditBills = () => {

  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);

  return (
    <div className='edit-bill-container'>
      <h6 className='edit-mode-done-btn' onClick={() => setEditModeEnabled(false)}>
        Done
      </h6>
      {
        bills.map((bill, billIndex) => {
          return(
            <div key={billIndex} className='edit-bill-row'>
              <div className='edit-bill-row-content'>
                <div className='edit-bill-title'>{bill.title}</div>
                <input className='edit-bill-cost-input'
                  type='number'
                  value={bill.monthlyCost}
                  onChange={(e) => editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value
                  })}></input>
                  <h6 onClick={() => deleteBill(bill)} className='delete-button'>DELETE</h6>
              </div>
              <hr></hr>
            </div>
          );
        })
      }
    </div>
  );
};

export default EditBills;