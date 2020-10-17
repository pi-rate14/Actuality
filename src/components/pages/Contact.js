import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    section: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'your name'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'your mail'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'your phone number'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'your message'}
        ]
    ]
}




class Contact extends Component{

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.section.map((section, sectionIndex) => {
                                return(
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field,i) => {
                                            return <Field 
                                                        {...field} 
                                                        key = {i} 
                                                        value = {this.props.values[field.name]}
                                                        name = {field.name}
                                                        onChange = {this.props.handleChange}
                                                        onBlur = {this.props.handleBlur}
                                                        touched = {(this.props.touched[field.name])}
                                                        errors = {this.props.errors[field.name]}
                                                    />
                                        }
                                        )}
                                    </div>     
                                )
                            }
                            )}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                            className="btn btn-primary btn-xl text-uppercase"  
                            type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}


export default withFormik({
    mapPropsToValues: () =>({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'we need a longer name dawg').required('You must give us your name'),
        email: Yup.string().email('You need to give us a valid email'). required('Email is required'),
        phone: Yup.string().min(10, 'Please provide 10 digit phone').max(15,'too long').required('we need a phone number'),
        message: Yup.string().min(500,'we need more info').required('message is required')
    }),

    handleSubmit: (values, {setSubmitting}) => {
        alert("form Submitted", JSON.stringify(values));
    }
})(Contact);