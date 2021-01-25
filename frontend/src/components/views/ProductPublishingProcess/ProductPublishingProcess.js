import React, {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import './Steps/StepOne.scss'
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";


const ProductPublishingProcess = () => {

    const [step, setStep] = useState(2)

    const formik = useFormik({
        initialValues: {
            productName: '',
            shortDescription: '',
            category: '',
            longDescription: '',
            address: '',
            postalNumber: '',
            region: '',
            city: '',
            exactLocation: '',
            price: '',
            priceType: ''
        },
        validationSchema: Yup.object({
            productName: Yup.string()
                .max(20, 'Naslov ne smije biti duži od 20 karaktera')
                .required('Unesite naslov artikla'),
            shortDescription: Yup.string()
                .max(30, 'Podnaslov ne smije biti duži od 30 karaktera'),
            longDescription: Yup.string()
                .min(40, 'Detaljan opis mora biti duži od 40 karaktera')
                .required('Svaki artikal mora imati detaljan opis'),
            category: Yup.string()
                .required('Označite kategoriju u kojoj vaš artikal pripada')
        }),
        onSubmit: values => {
            if (step < 5 && step >= 0) {
                setStep(step + 1)
                console.log(step)
            }

            if (step === 5) {
                console.log(JSON.stringify(values, null, 2))
            }
        }
    })


    return (
        <>
            {step === 0 ? <StepOne formik={formik}/> : null}
            {step === 1 ? <StepTwo formik={formik} step={step} setStep={setStep}/> : null}
            {step === 2 ? <StepThree formik={formik} step={step} setStep={setStep}/> : null}
            {step === 3 ? <StepFour formik={formik} step={step} setStep={setStep}/> : null}
            {step === 4 ? <h1>Step five</h1> : null}
        </>
    );
};

export default ProductPublishingProcess;
