import Home from './Home'
import { FooterLogin } from './FooterLogin'
import './FormLogin.css'
import './Fonts.css'
import { Form } from 'react-router-dom'
import { yupValidation } from '../ValidationSchema/YupValdiation'
import { useFormik } from 'formik'


export default function FormLogin() {
  const initialValues1={
    email:'',
    password:''

  }
  console.log(yupValidation)
  const {handleBlur,handleChange,handleSubmit,errors,values,touched}=useFormik({
    initialValues:initialValues1,
    validationSchema:yupValidation,
    onSubmit:()=>{

    },
    validateOnChange:true
  })

  const submitHandler=()=>{

  }
  

  

  return (
    <div>
        <Home  ></Home>
        <div className='login-page'>
          <div className='form-component'>
            
        <form onSubmit={submitHandler} className='form-internal'>
           <h6 className='medium-font sigin'> Signin</h6>

           <label className="email" for="email">Email</label>
           <div className='component'>
           <input className='password' id="email" name="email" type='text'
           onChange={handleChange}
           onBlur={handleBlur}
           
           
          
           />
           {(errors.email && touched.email) ? "please enter valid email/number":"email/number"}
           
           </div>
           <div className='component'>
           <input className='password' id="password" type='text'
           onChange={handleChange}
           onBlur={handleBlur}
          
           />
           
          </div>
           <button className="Button" type='submit'> submit </button>

            
            
        </form>
        </div>
        </div>
        
        
        <FooterLogin/>
    </div>
  )
}
