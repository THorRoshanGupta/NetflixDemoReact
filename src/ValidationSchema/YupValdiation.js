import React from 'react'
import * as Yup from 'yup'

export const yupValidation=Yup.object().shape
({
    email:Yup.string().required('email/phone').
            test('invlaid email/phone number',(value)=>{
                return checkEmail(value)|| checkPhone(value);

            }),
    password:Yup.string()
})

const checkEmail=(x)=>{
    return Yup.string().email().isValidSync(x);
}
const checkPhone=(x)=>{
    return Yup.number().positive().max(10).min(10).isValidSync(x);
}
