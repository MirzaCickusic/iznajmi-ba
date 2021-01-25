import React from 'react';

const StepFour = ({formik, setStep, step}) => {
    return (
        <>
            <h2 style={{margin: '1rem 0 2rem 1rem', color: '#202124'}}>Dodajte slike Vašem
                oglasu</h2>
            <div className="step-one">
                <div className="left-side">

                    <input id="price"
                           name="price"
                           type="file"
                           onChange={formik.handleChange}
                           value={formik.values.productName}
                           onBlur={formik.handleBlur}/>
                    <div className="button">
                        <button type="" className="btn-back" onClick={() => {
                            setStep(2)
                        }}>NAZAD
                        </button>

                        <button type="submit" className="btn-next" onClick={() => {
                            setStep(4)
                        }}>DALJE
                        </button>
                    </div>
                </div>

                <div className="guide-section">
                    <p style={{textAlign: 'center', marginBottom: '1rem'}}>PREPORUKE ZA DODAVANJE
                        SLIKA</p>
                    <p>FOTOGRAFISANJE</p>
                    <ul>
                        <li>Postavljajte samo originalne fotografije.</li>
                        <li>Najmanje 3 slike iz različitih uglova pomoći
                            će vam da lakše iznajmite artikal.
                        </li>
                        <li>Pripazite da fotografije budu osvijetljene</li>
                        <li>Pobrinite se da što više stane u kadar</li>
                    </ul>
                    <p>COVER</p>
                    <ul>
                        <li>Odaberite jednu sliku koja će biti vaš cover.
                            Ova slika će se pojavljivati na pretragama i
                            biće prva stvar koju ljudi vide.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StepFour;
