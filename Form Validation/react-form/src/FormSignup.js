import React from 'react'
import useForm from './userForm'
import validate from './FormValidate'

const FormSignup = ({submitForm}) => {
   
    const {values,handleChange,handleSubmit,errors} = useForm(submitForm,validate);
    return (
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>
                        Get started with us today! Create your account by filling out the information below
                    </h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" value={values.username} onChange={handleChange} id="username" name="username" className="form-input" placeholder="Enter your username" />
                        {errors.username && <p>{errors.username}</p> }
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={values.email} onChange={handleChange} id="email" name="email" className="form-input" placeholder="Enter your email" />
                        {errors.email && <p>{errors.email}</p> }
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={values.password} onChange={handleChange} id="password" name="password" className="form-input" placeholder="Enter your password" />
                        {errors.password && <p>{errors.password}</p> }
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input type="password" value={values.password2} onChange={handleChange} id="password2" name="password2" className="form-input" placeholder="Re-enter your password" />
                        {errors.password2 && <p>{errors.password2}</p> }
                    </div>
                    <button className="form-input-btn" type="submit">
                    Sign up
                    </button>
                    <span>Already have an account? Login<a href="#">here</a>
                    </span>
                </form>
            </div>
        
    )
}
export default FormSignup
