import React ,{Fragment }from 'react'

export const Input = (props) => {
    const {lbl,type,name,options,values,val,fnChange,errorMsg,isRequired}=props;
    const fnPrepareInputControl=()=>{
    switch(type)
    {
        case "text":
        case "password":
        case "number":
        case "email":
        case "date":
            return <input value={val} onChange={fnChange} type={type} className='form-control' name={name}/>
        case "radio":
            return <>
            {
            options.map((opt,ind)=>
            {
                const _val=values[ind];
                return <Fragment key={"opt"+ind}><input checked={_val===val} value={_val} type={type} onChange={fnChange} name={name}/><span className="ms-2 me-2">{opt}</span></Fragment>
            })
        }
            </>
    }
}
      return (
    <div className='row mt-3'>
        <div className='col-sm-5 text-end pt-1'>
            <b>{lbl}{isRequired && <span className="text-danger">*</span>}:</b>
        </div>
        <div className='col-sm-3'>
            {fnPrepareInputControl()}
        </div>
        <div className='col-sm-4'>
        <b className='text-danger'>{errorMsg}</b>
        </div> 
    </div>
  )
}
