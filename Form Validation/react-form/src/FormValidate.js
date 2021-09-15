const validateInfo = (values)=>{
    let errors={}
if(values.username.trim()===''){
    errors.username = "Username required"
}
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(values.email===''){
    errors.email = "Email required"
}
else if(!re.test(values.email)){
    errors.email = "Invalid email address"
}
if(values.password.length<5)
{
    errors.password="Minimum 5 letters required"
}
if(values.password==='')
{
    errors.password="Password required"
}
if(values.password2==='')
{
    errors.password2="Password required"
}
if(values.password !== values.password2)
{
    errors.password2 = "Passwords do not match"
}
return errors
}
export default validateInfo