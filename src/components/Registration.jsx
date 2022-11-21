import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import * as yup from 'yup'
import cl from './style.module.css'
import Button from "./Button";
import ShowModal from "./ShowModal";


const Registration = () => {
    const [showModal, setShowModal] = useState(false)
    const [state, setState] = useState(true)
    if (!!showModal){
        return <ShowModal/>
    }
    if(!state){
        return <Button />
    }


    const validetionShema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Введите ваше имя '),
        secondName: yup.string().typeError('Должно быть строкой').required('Введие фамилию '),
        password: yup.string().typeError('Должно быть строкой').required('Введие пароль '),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Введите пароль '),
        email: yup.string().email('Введите верный эмейл').required('Введите эмейл '),
        confirmEmail: yup.string().oneOf([yup.ref('email')],'Эмейлы не совпадают').required('Введите эмейл '),
    })

    return (
        <div className={cl.formik_validation}>
            <Formik
                initialValues={{
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: ''
            }}
                validateOnblur
                onSubmit={(values, {resetForm}) => {
                return console.log(values), resetForm(), setState(!state), setShowModal(!showModal) }}
                validationSchema={validetionShema}
            >

                {({values, errors, touched,
                      handleChange, handleBlur, isValid,
                  handleSubmit, dirty}) => (
                      <div>
                          <div className={cl.close_modal}
                               onClick={() => setState(!state)}> X</div>
                          <p>
                              <label htmlFor="name" className={cl.label_form}> name</label>
                              <input
                                  type='text'
                                  name='name'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                              />
                          </p>
                          {touched.name && errors.name && <p style={{color : 'red'}}>{errors.name}</p>}
                          <p>
                              <label htmlFor="secondName" className={cl.label_form}>surname</label><br/>
                              <input
                                  type='text'
                                  name='secondName'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.secondName}
                              />
                          </p>
                          {touched.secondName && errors.secondName && <p style={{color : 'red'}}>{errors.secondName}</p>}
                          <p>
                              <label htmlFor="password" className={cl.label_form}>password</label><br/>
                              <input
                                  type='password'
                                  name='password'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                              />
                          </p>
                          {touched.password && errors.password && <p style={{color : 'red'}}>{errors.password}</p>}
                          <p>
                              <label htmlFor="confirmPassword" className={cl.label_form_long}>confirm password</label><br/>
                              <input
                                  type='password'
                                  name='confirmPassword'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.confirmPassword}
                              />
                          </p>
                          {touched.confirmPassword && errors.confirmPassword && <p className={cl.label_form_errors}>{errors.confirmPassword}</p>}
                          <p>
                              <label htmlFor="email" className={cl.label_form}>email</label><br/>
                              <input
                                  type='email'
                                  name='email'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                              />
                          </p>
                          {touched.email && errors.email && <p style={{color : 'red'}}>{errors.email}</p>}
                          <p>
                              <label htmlFor="confirmEmail" className={cl.label_form_long}>confirm email</label><br/>
                              <input
                                  type='email'
                                  name='confirmEmail'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.confirmEmail}
                              />
                          </p>
                          {touched.confirmEmail && errors.confirmEmail && <p style={{color : 'red'}}>{errors.confirmEmail}</p>}
                          <button className={cl.formik_button}
                              disabled={!isValid && !dirty}
                              onClick={handleSubmit}
                              type='submit'
                          >
                              SEND
                          </button>
                      </div>
                )}
            </Formik>
        </div>
    );
};

export default Registration;