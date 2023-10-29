"use client"
import React from 'react'

export const DropDown = (props) => {
    const {lbl,name,options,val,fnChange,errorMsg,isRequired}=props;
  return (
    <div className='row mt-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}{isRequired && <span className="text-danger">*</span>}:</b>
        </div>
        <div className='col-sm-3'>
            <select value={val} className='form-control' name={name} onChange={fnChange}>
               <option hidden>---Please Select---</option>
               {
                options.map((opt,ind)=>
                {
                    return <option value={opt} key={"opt_"+ind}>{opt}</option>
                })
               }
            </select>
        </div>
        <div className='col-sm-4'>
            <b className='text-danger'>{errorMsg}</b>
        </div>
    </div>
  )
}
