"use client"
import React,{useState, useEffect,useContext, Fragment} from 'react'
import {inputControls} from "./configurations"
import { TextArea } from '../includes/components/TextArea'
import {Input} from '../includes/components/Input'
import { DropDown } from '../includes/components/DropDown'
import { Button } from 'reactstrap'
import { fnValidate } from '../includes/validations/appValidations'
import { appCtx } from '../includes/context/appContext'
import {ServerCall} from '../includes/ajax/ServerCall'
import {toast} from 'react-toastify'

export const Question = () => {
  const [inputArr,setInputArr]=useState(inputControls)
  const ctxData=useContext(appCtx)
  const fnReset=()=>
  {
    window.location.reload();
  }
  const fnChange=(eve)=>
  {
    const {name,value}=eve.target
    const _inputArr=JSON.parse(JSON.stringify(inputArr));
    const inputControlObj=_inputArr.find((obj)=>obj.name==name);
    inputControlObj.val=value;
    if(inputControlObj.isRequired)
    {
      fnValidate(inputControlObj)
    }
    setInputArr(_inputArr);
    //inputControlObj.errMsg="Enter name";
    //console.log(name,value,inputControlObj,_inputArr,inputArr);
    //console.log(name,inputControlObj.val,inputControlObj,_inputArr,inputArr);
    //console.log(inputControlObj);
    //console.log(_inputArr);
    //console.log(inputArr); 
    /*This all concept we have studied here is not virtual DOM 
    rather it is actual JSON Object behaviour */
  }
  const prepareTemplate = (obj) => {
    switch (obj.tag) {
      case "textarea":
        return <TextArea {...obj} fnChange={fnChange} />;
      case "input":
        return <Input {...obj} fnChange={fnChange} />;
      case "select":
        return <DropDown {...obj} fnChange={fnChange} />;
    }
  }
  useEffect(()=>
  {
    const _inputArr=JSON.parse(JSON.stringify(inputArr));
    const inputControlObj=_inputArr.find((obj)=>obj.name=='type');
    inputControlObj.val='S';
    setInputArr(_inputArr);
  },[])
  const fnSumbit=()=>
  {
    const dataObj={};
    const _inputArr=JSON.parse(JSON.stringify(inputArr));
    _inputArr.forEach((obj) => {
      dataObj[obj.name]=obj.val;
      if(obj.isRequired)
      {
        fnValidate(obj);
      } 
      })
      const isInvalid=_inputArr.some((obj)=>obj.errorMsg);
      if (isInvalid)
      {
        setInputArr(_inputArr);
        return;
      }
    ctxData.dispatch({type:'LOADER',payload:true})
    ServerCall.fnSendPostReq("https://questions-server1.vercel.app/que/save-que",{data:dataObj})
    .then((res)=>
    {
      ctxData.dispatch({type:'LOADER',payload:false});
      const {acknowledged,insertedId}=res.data;
      if (acknowledged && insertedId)
      {
        _inputArr.forEach((obj) => {
          //console.log(obj.name)
          obj.val="";
          })
        setInputArr(_inputArr);
        toast.success("Successfully Saved....",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }
      else{
        toast.error("Not Saved....Try Again",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }

      //console.log("success",res);
      
    })
    .catch((res)=>
    {
      //console.log("failure",res);
      ctxData.dispatch({type:'LOADER',payload:false}); 
      toast.success("Something went wrong",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
    //alert("Sending request to the server")
    //console.log(dataObj);
    //setTimeout(()=>
    //{
    //  ctxData.dispatch({type:'LOADER',payload:false}); 
    //},5000)
  }
  return (
    <div className="container-fluid mt-3">
      {
        inputArr.map((obj,ind)=>
        {
         return <Fragment key={"que"+ind}> {prepareTemplate(obj)}</Fragment>
        })
      }
      <div className='row mt-3'>
      <div className='offset-sm-5 col-sm-7'>
      <Button  color="primary" onClick={fnSumbit}>
        Submit
      </Button> &nbsp;&nbsp;
      <Button color="primary" onClick={fnReset}>Reset</Button>
      </div>
      </div>
      
    </div>
  )
}
