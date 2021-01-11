import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import Select from "react-select";
import './StepOne.scss'

const categoryOptions = [
    {value: 'auta', label: 'Automobili'},
    {value: 'kombi', label: 'Kombiji'},
    {value: 'stan', label: 'Stanovi'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
    {value: 'auta', label: 'Automobili'},
]

const StepOne = () => {

    const formik = useFormik({
        initialValues: {
            productName: '',
            shortDescription: '',
            category: '',
            longDescription: ''
        },
        validationSchema: Yup.object({
            productName: Yup.string()
                .max(20, 'Ne smije biti duži od 20 karaktera')
                .required('Obavezno'),
            shortDescription: Yup.string()
                .max(30, 'Ne smije biti duži od 30 karaktera'),
            longDescription: Yup.string()
                .min(40, 'Detaljan opis mora biti duži od 40 karaktera')
                .required('Obavezno'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <h2 style={{marginLeft: '1rem'}}>Opišite Vaš oglas</h2>
            <div className="step-one">
                <div className="input-fields">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            id="productName"
                            name="productName"
                            type="productName"
                            placeholder="NASLOV"
                            onChange={formik.handleChange}
                            value={formik.values.productName}
                            onBlur={formik.handleBlur}
                        />
                        {/*{formik.touched.productName && formik.errors.productName ? (*/}
                        {/*    <div>{formik.errors.productName}</div>*/}
                        {/*) : null}*/}
                        <input
                            id="shortDescription"
                            name="shortDescription"
                            type="shortDescription"
                            placeholder="PODNASLOV"
                            onChange={formik.handleChange}
                            value={formik.values.shortDescription}
                            onBlur={formik.handleBlur}
                        />
                        {/*{formik.touched.shortDescription && formik.errors.shortDescription ? (*/}
                        {/*    <div>{formik.errors.shortDescription}</div>*/}
                        {/*) : null}*/}
                        <div>
                            <Select
                                options={categoryOptions}
                                onChange={value => formik.setFieldValue('category', value.value)}
                                placeholder="IZABERI KATEROGIJU"
                            />
                        </div>
                        <input
                            id="longDescription"
                            name="longDescription"
                            type="longDescription"
                            placeholder="DETALJAN OPIS"
                            onChange={formik.handleChange}
                            value={formik.values.longDescription}
                            onBlur={formik.handleBlur}
                        />
                        {/*{formik.touched.longDescription && formik.errors.longDescription ? (*/}
                        {/*    <div>{formik.errors.longDescription}</div>*/}
                        {/*) : null}*/}

                        <button type="submit">DALJE</button>

                    </form>
                </div>
                <div className="guide-section">

                </div>
            </div>
        </>
    );
};

export default StepOne;
