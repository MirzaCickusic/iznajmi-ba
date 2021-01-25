import React from 'react';
import Select from "react-select";
import './StepOne.scss'

const regionOptions = [
    {value: 'tuzlanski kanton', label: 'Tuzlanski kanton'}
]

const cityOptions = [
    {value: 'tuzla', label: 'Tuzla'}
]

const StepTwo = ({formik, setStep, step}) => {
    return (
        <>
            <h2 style={{marginLeft: '1rem', color: '#202124', marginTop: '1rem'}}>Unesite tačnu
                lokaciju oglasa</h2>
            <div className="step-one">
                <div className="input-fields">
                    <form>
                        <input
                            id="address"
                            name="address"
                            type="address"
                            placeholder="ULICA I BROJ"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            onBlur={formik.handleBlur}
                        />
                        {/*{formik.touched.productName && formik.errors.productName ? (*/}
                        {/*    <div className="input-error">{formik.errors.productName}</div>*/}
                        {/*) : null}*/}
                        <input
                            id="postalNumber"
                            name="postalNumber"
                            type="postalNumber"
                            placeholder="POŠTANSKI BROJ"
                            onChange={formik.handleChange}
                            value={formik.values.postalNumber}
                            onBlur={formik.handleBlur}
                        />
                        <div style={{marginBottom: '1rem'}}>
                            <Select
                                options={regionOptions}
                                onChange={value => formik.setFieldValue('region', value.value)}
                                placeholder="REGIJA / KANTON"
                            />
                            {/*{formik.touched.category && formik.errors.category ? (*/}
                            {/*    <div className="input-error">{formik.errors.category}</div>*/}
                            {/*) : null}*/}
                        </div>
                        <div>
                            <Select
                                options={cityOptions}
                                onChange={value => formik.setFieldValue('city', value.value)}
                                placeholder="GRAD"
                            />
                            {/*{formik.touched.category && formik.errors.category ? (*/}
                            {/*    <div className="input-error">{formik.errors.category}</div>*/}
                            {/*) : null}*/}
                        </div>

                        <div className="buttons">
                            <button type="" className="btn-back" onClick={() => {
                                setStep(0)
                            }}>NAZAD
                            </button>

                            <button type="submit" className="btn-next" onClick={() => {
                                setStep(2)
                            }}>DALJE
                            </button>
                        </div>
                    </form>
                </div>

                <div className="guide-section">
                    <p style={{textAlign: 'center', marginBottom: '1rem'}}>PREPORUKE ZA UNOS
                        LOKACIJE</p>
                    <p>ADRESA</p>
                    <ul>
                        <li>Unesite Vašu punu adresu. Ovo je jako bitno
                            zbog relevantnog prikazivanja oglasa.
                            (Vaša adresa neće biti javno vidljiva).
                        </li>
                    </ul>
                    <p>SIGURNOST</p>
                    <ul>
                        <li>Bez brige. Vašu tačnu lokaciju nećemo
                            prikazati javno. Klikom na "UČITAJ TAČNU
                            LOKACIJU" mi ćemo nasumično staviti pin
                            na našu mapu u radijusu od 2 kilometra u
                            odnosu na Vašu lokaciju.
                        </li>
                        <li>Kada odobrite najam moći ćete odabrati
                            adresu na kojoj ćete izvršiti primopredaju.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StepTwo;
