import styled from 'styled-components'

const HeroSearchContainer = styled.div`
    background-color: #FFFFFF;
    max-height: 65vh;
    min-height: 100%;

    h2{
        margin: 60px 0;
        text-align: center;
    }
`
const SearchForm = styled.form`
    width: 80%;
    margin:0 auto;
    
    @media only screen and (max-width: 600px) {
    form {
        width: 90%;
        margin: 0 auto;
        text-align: center;
      }
    }
    `

const FormInput = styled.div`
    margin: 0px auto;

    input {
        width: 100%;
        height: 40px;
        border-radius: 6px;
        border: solid #EBEDED;
        margin: 10px 0;
    }

    label {
        font-weight: bold;
        margin: 10px auto;
        text-align: left;
    }

    .error {
        font-weight: 500;
        font-size: 12px;
        color: red;
    }

    .error:hover {
        user-select: none;
    }
    `

export {
    HeroSearchContainer,
    SearchForm,
    FormInput
}