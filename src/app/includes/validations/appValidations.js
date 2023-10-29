 const EmailFormat=(val)=>
{
    const regExp=/^[a-zA-Z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!regExp.test(val))
    {
        return "Not a valid email";
    }

} 
 const DigitsOnly=(val)=>
{
    const regExp=/^[0-9]+$/;
    if(!regExp.test(val))
    {
        return "Enter Digits Only";
    }

}
 const NoSpace=(val)=>
{
    const regExp=/\s/
    if(regExp.test(val))
    {
        return "Should not contain any space"
    }
}

 const Exactly10Digits=(val)=>
{
    const regExp=/^[0-9]{10}$/;
    if(!regExp.test(val))
    {
        return "Enter 10 digits only";
    }
}
const MinFiveMaxTenChars=(val)=>
{
    if(val.length<5 || val.length>10)
    {
        return "Should be minimum 5 charaters and maximum 10 characters"
    }
}
 const SpecialCharsNotAllowed=(val)=>
{
    const regExp=/^[a-zA-Z0-9\s]+$/;
    if(!regExp.test(val))
    {
        return "Should not allows special chararcters";
    }
}
const validationObj={
    EmailFormat,
 Exactly10Digits,
 DigitsOnly,
    SpecialCharsNotAllowed,
    NoSpace,
    MinFiveMaxTenChars
}

export const fnValidate=(inputControlObj)=>
{
    const {criteria,val}=inputControlObj;
    inputControlObj.errorMsg="";
    if(!val)
    {
        inputControlObj.errorMsg="Please enter input value";
        return;
    }
    for (let i=0;i<criteria.length;i++)
    {
        const errorMsg=validationObj[criteria[i]](val)
        if(errorMsg)
        {
            inputControlObj.errorMsg=errorMsg;
            break;
        }
    }
}
