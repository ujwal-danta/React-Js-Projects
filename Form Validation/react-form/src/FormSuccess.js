import React from 'react'

const FormSuccess = () => {
    console.log("Form success called");
    return (
       <div className="form-content-right">
           <div className="form-success">
               We have received your request !
           </div>
           <img src="img/img-3.svg" alt="success" className="form-img-2"/>
       </div>
    )
}

export default FormSuccess
