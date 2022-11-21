// import React, {useEffect, useState} from 'react';
// import cl from './style.module.css'
// import {useFormik} from "formik";
//
// const initialValues = {
//     name : "black",
//     email : "bizmegrou2017@gmail.com",
//     chanel : "1 + 1"
// }
//
// const onSubmit =  values => {
//     console.log('this is values SUBmit', values)
// }
//
// const validete =  values => {
//     let errors = {}
//
//     if(!values.name){
//         errors.name = "This is must have"
//     }
//
//     if(!values.email){
//         errors.email = "This is must have"
//     }else if( (/\S+@\S+\.\S+/).test(values.email))
//         errors.email = "Email is not required"
//
//     if(!values.chanel){
//         errors.chanel = "This is must have"
//     }
//     return errors
// }
//
//
// const Testregisrer = () => {
//
//     const formic = useFormik({
//         initialValues,
//         onSubmit,
//         validate,
//     })
//     console.log('this is form values ', formic.values)
//
//     return (
//      <div>
//          <form action="" onSubmit={formic.handleSubmit}>
//              <label htmlFor="name" className={cl.forms_letters}>Name</label>
//              <input type="text" id='name' name='name' onChange={formic.handleChange} value={formic.values.name}/>
//              <br/>
//
//              <label htmlFor="email" className={cl.forms_letters}>Email</label>
//              <input type="text" id='email' name='email' onChange={formic.handleChange} value={formic.values.email}/>
//              <br/>
//
//              <label htmlFor="chanel" className={cl.forms_letters}>Channel</label>
//              <input type="text" id='chanel' name='chanel' onChange={formic.handleChange} value={formic.values.chanel}/>
//              <br/>
//
//              <button type='submit'>Submit</button>
//          </form>
//      </div>
//     );
// };
//
//
// export default Testregisrer;