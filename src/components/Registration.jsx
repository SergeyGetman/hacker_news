import React from 'react';
import {Formik} from "formik";
import * as yup from 'yup'

const Registration = () => {
    return (
        <div>
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
                onSubmit={(values) => {console.log(values)}}
            >
                {({values, errors, touched,
                      handleChange, handleBlur, isValid,
                  handleSubmit, dirty}) => (
                      <div>
                          <p>
                              <label htmlFor="name">Name</label><br/>
                              <input
                                  type='text'
                                  name='name'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                              />
                          </p>
                          {touched.name && errors.name && <p>{errors.name}</p> }
                          <button
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