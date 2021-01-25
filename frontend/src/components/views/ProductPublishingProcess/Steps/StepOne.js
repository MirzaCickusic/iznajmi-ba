import React from 'react';
import Select from "react-select";
import './StepOne.scss'

const categoryOptions = [
    {value: 'auta', label: 'Automobili'},
    {value: 'kombi', label: 'Kombiji'},
    {value: 'stan', label: 'Stanovi'},
    {value: 'masine i alati', label: 'Mašine i Alati'},
    {value: 'konzole', label: 'Konzole'},
    {value: 'garaze', label: 'Garaže'},
    {value: 'rekreativna vozila', label: 'Rekreativna Vozila'},
    {value: 'svadbeni saloni', label: 'Svadbeni Saloni'},
    {value: 'poslovni prostori', label: 'Poslovni Prostori'},
    {value: 'elektronika', label: 'Elektronika'},
    {value: 'kamperi', label: 'Kamperi'},
    {value: 'vjencanice', label: 'Vjenačnice'},
    {value: 'sportska oprema', label: 'Sportska Oprema'},
    {value: 'nautika', label: 'Nautika'},
]

const StepOne = ({formik}) => {
    return (
        <>
            <h2 style={{marginLeft: '1rem', color: '#202124', marginTop: '1rem'}}>Opišite
                Vaš
                oglas</h2>
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
                        {formik.touched.productName && formik.errors.productName ? (
                            <div className="input-error">{formik.errors.productName}</div>
                        ) : null}
                        <input
                            id="shortDescription"
                            name="shortDescription"
                            type="shortDescription"
                            placeholder="PODNASLOV"
                            onChange={formik.handleChange}
                            value={formik.values.shortDescription}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.shortDescription && formik.errors.shortDescription ? (
                            <div
                                className="input-error">{formik.errors.shortDescription}</div>
                        ) : null}
                        <div>
                            <Select
                                options={categoryOptions}
                                onChange={value => formik.setFieldValue('category', value.value)}
                                placeholder="IZABERI KATEROGIJU"
                            />
                            {formik.touched.category && formik.errors.category ? (
                                <div className="input-error">{formik.errors.category}</div>
                            ) : null}
                        </div>
                        <textarea
                            className="detail-description"
                            id="longDescription"
                            name="longDescription"
                            type="longDescription"
                            placeholder="DETALJAN OPIS"
                            onChange={formik.handleChange}
                            value={formik.values.longDescription}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.longDescription && formik.errors.longDescription ? (
                            <div
                                className="input-error">{formik.errors.longDescription}</div>
                        ) : null}

                        <button type="submit" className="btn-next">DALJE</button>

                    </form>
                </div>
                <div className="guide-section">
                    <p style={{textAlign: 'center', marginBottom: '1rem'}}>PREPORUKE ZA
                        KREIRANJE
                        OGLASA</p>
                    <p>NASLOV</p>
                    <ul>
                        <li>Kratak i jasan opis oglasa</li>
                    </ul>
                    <p>PODNASLOV</p>
                    <ul>
                        <li>Detalj koji je posebno bitan za Vaš oglas</li>
                    </ul>
                    <p>IZABERI KATEGORIJU</p>
                    <ul>
                        <li>Pravilan odabir kategorije olakšava pretragu
                            oglasa
                        </li>
                    </ul>
                    <p>DETALJAN OPIS</p>
                    <ul>
                        <li>Detaljan opis treba sadržavati sve informacije
                            koje bi mogle zanimati osobu koja pregleda
                            oglas.
                            Ovaj dio bi trebao obavezno uključiti način
                            preuzimanja određenog artikla, te vaše
                            uslove i pravila korištenja istog
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StepOne;
