import Home from './Home'
import { FooterLogin } from './FooterLogin'
import './FormLogin.css'
import './Fonts.css'
import {  useLocation, useNavigate } from 'react-router-dom'
import { yupValidation } from '../ValidationSchema/YupValdiation'
import { useFormik } from 'formik'
import './Buttons.css'
import { useState } from 'react'



export default function FormLogin() {
  const [passwordError,setPasswordError]=useState(false)
  const [credentialError,setCredentialError]=useState(false)
  const nav=useNavigate('')
  const loc=useLocation('')
  const initialValues1={
    email:'',
    password:''

  }
  //  const passwordError=false

  const {handleBlur,handleChange,handleSubmit,errors,values,touched}=useFormik({
    initialValues:initialValues1,
    validationSchema:yupValidation,
    onSubmit:(val)=>{
      console.log(val)
      if(val.email==="r@gmail.com" ){
        if(val.password==='netflix'){
          
          nav("/netflix")
        }
        else{
          console.log('incorrect')
         setPasswordError(true);

        }
        
      }
      else{
        setCredentialError(true);

      }
      



    },
    validateOnChange:true
  })

  

  

  return (
    <div>
        <Home  ></Home>
        <div className='login-page'>
          <div className='form-component'>
            
        <form onSubmit={handleSubmit} className='form-internal'>
           <h6 className='medium-font sigin'> Sign in</h6>

           
           <div className='component'>
           
              <input className='email' id="email" name="email" type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              />
              <label  for="email">Email or phone number</label>
              {(errors.email && touched.email) ? <p className='error'>please enter valid email/number</p>:null}
           </div>

            <div className='component'>
              <input className='password' id="password" type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}/>
              <label  for="password">Password</label>
            {passwordError && <p className='error'> password does not match</p>}
            {credentialError && <p className='error'> email with password does not exist</p>}
           
          </div>
           <button disabled={()=>errors ? true:false} style={{background:"red"}} className="large-button smaller-font" type='submit'> Sign in </button>

            
            
        </form>
        </div>
        </div>
        
        
        <FooterLogin/>
    </div>
  )
}
