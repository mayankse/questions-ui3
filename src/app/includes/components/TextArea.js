"use client"
import React from 'react'

export const TextArea = (props) => {
    const {lbl,name,val,fnChange,errorMsg,isRequired}=props
  return (
    <div className='row'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}{isRequired && <span className="text-danger">*</span>}:</b>
        </div>
        <div className='col-sm-3'>
            <textarea  onChange={fnChange} name={name} className='form-control'></textarea>
        </div>
        <div className='col-sm-4'>
        <b className='text-danger'>{errorMsg}</b>
        </div>

    </div>
  )
}
