import React, {useEffect, useState} from 'react';
import './StepOne.scss'
import './StepThree.scss'
import styled from 'styled-components'

const CustomButton = styled.button`
        padding: 1.5rem 3rem;
        margin: 0 2px;

        background-color: ${props => props.active ? '#FA6980' : '#FFFFFF'};
        color: ${props => props.active ? '#FFFFFF' : '#A6ADB4'};
        border: none;
        border-radius: 6px;
        outline: none;
        font-size: 18px;
`


const StepThree = ({setStep, step, formik}) => {

    const [pricingType, setPricingType] = useState('KM / Sat')
    const [activeBtn, setActiveBtn] = useState(1)


    return (
        <>
            <h2 style={{margin: '1rem 0 2rem 1rem', color: '#202124'}}>Odredite cijenu
                najma</h2>
            <div className="step-one">
                <div className="left-side">
                    <div className="pricing-buttons">
                        <CustomButton active={activeBtn === 1} onClick={() => {
                            setPricingType('KM / Sat')
                            setActiveBtn(1)
                            formik.setFieldValue('priceType', 'KM / Sat')
                        }}>NAJAM PO SATU
                        </CustomButton>
                        <CustomButton active={activeBtn === 2} onClick={() => {
                            setPricingType('KM / Dan')
                            setActiveBtn(2)
                            formik.setFieldValue('priceType', 'KM / Dan')
                        }}>DNEVNI NAJAM
                        </CustomButton>
                        <CustomButton active={activeBtn === 3} onClick={() => {
                            setPricingType('KM / Mjesec')
                            setActiveBtn(3)
                            formik.setFieldValue('priceType', 'KM / Mjesec')
                        }}>MJESEČNI NAJAM
                        </CustomButton>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <input id="price"
                               name="price"
                               type="number"
                               onChange={formik.handleChange}
                               value={formik.values.productName}
                               onBlur={formik.handleBlur}/>
                        <p style={{color: '#A6ADB4', fontSize: '1.5rem'}}>{pricingType}</p>
                    </div>

                    <div className="button">
                        <button type="" className="btn-back" onClick={() => {
                            setStep(1)
                        }}>NAZAD
                        </button>

                        <button type="submit" className="btn-next" onClick={() => {
                            setStep(3)
                        }}>DALJE
                        </button>
                    </div>
                </div>

                <div className="guide-section">
                    <p style={{textAlign: 'center', marginBottom: '1rem'}}>PREPORUKE ZA ODREĐIVANJE
                        CIJENE</p>
                    <p>PERIOD NAJMA</p>
                    <ul>
                        <li>Prvi korak je odabir vremenskog perioda
                            najma. Odaberite jednu od tri opcije:
                            najam po satu, dnevni najam ili mjesečni
                            najam.
                        </li>
                    </ul>
                    <p>CIJENA</p>
                    <ul>
                        <li>Ukoliko vaš najam zahtijeva dodatna
                            održavanja poput čišćenja ili servisiranja
                            imajte to u vidu prilikom određivanja cijene.
                        </li>
                        <li>Cijena mora biti izražena u cijelom broju
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StepThree;
