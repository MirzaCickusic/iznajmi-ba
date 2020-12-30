import React, {useState} from 'react';
import {Button} from "../../../sharedComponents/Button/Button";
import {HeroSearchContainer, FormInput, SearchForm} from "./HeroSearchFormStyles";

const HeroSearchForm = () => {

    const [item, setItem] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')

    const [errorItem, setErrorItem] = useState('')
    const [errorCity, setErrorCity] = useState('')
    const [errorPrice, setErrorPrice] = useState('')

    const [formValid, setFormValid] = useState(false)

    const handleSubmit = (e) => {
        //TODO Potreban dupli enter/button klik da bi submito formu poslije errora
        e.preventDefault()
        setFormValid(true)

        if (item.length < 4 || item.length > 40) {
            setErrorItem("Molimo vas da ispravite vaš unos")
            setFormValid(false)
        } else setErrorItem("")

        if (city.length < 4) {
            setErrorCity("Molimo vas da ispravite vaš unos")
            setFormValid(false)
        } else setErrorCity("")

        if (price <= 0 || price > 10000) {
            setErrorPrice("Molimo vas da ispravite vaš unos")
            setFormValid(false)
        } else setErrorPrice("")

        if (formValid) {
            //TODO Zašto je prvi render true, a treba da je false
            const formDetails = {
                'Item Searched': item,
                'In city': city,
                'I': price
            };

            setItem('')
            setCity('')
            setPrice('')

            console.log(formDetails);
        }
    }

    return (
        <HeroSearchContainer className="hero-view-search">

            <h2>Unajmi što god ti padne na um:</h2>

            <SearchForm onSubmit={handleSubmit}>
                <FormInput className="form-field">
                    <label>ŠTA TRAŽITE?</label>
                    <div className={formValid ? '' : 'error'}>{errorItem}</div>
                    <input type="text" placeholder="Na primjer: Dron" value={item}
                           onChange={e => setItem(e.target.value)}/>
                </FormInput>
                <FormInput className="form-field">
                    <label>GRAD</label>
                    <div className={formValid ? '' : 'error'}>{errorCity}</div>
                    <input type="text" placeholder="Odaberi..." value={city}
                           onChange={e => setCity(e.target.value)}/>
                </FormInput>
                <FormInput className="form-field">
                    <label>CIJENA</label>
                    <div className={formValid ? '' : 'error'}>{errorPrice}</div>
                    <input type="number" placeholder="Odaberi..." value={price}
                           onChange={e => setPrice(e.target.value)}/>
                </FormInput>

                <Button onClick={handleSubmit}>PRETRAŽI</Button>

            </SearchForm>
        </HeroSearchContainer>
    );
};

export default HeroSearchForm;
