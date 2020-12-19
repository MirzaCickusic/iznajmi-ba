import styled from "styled-components";

const HeroView = styled.div`
    max-height: 65vh;
    min-height: 65vh;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
`

const HeroView2 = styled.div`
    max-width: 100vw;
    position: relative;
    margin: 32px 0;


    /*ZA GRADIENT: https://larsenwork.com/easing-gradients/*/
    background: linear-gradient(to bottom,
    hsla(200.09, 100%, 45.1%, 0.78) 0%,
    hsla(203.05, 80.03%, 50.38%, 0.777) 15.3%,
    hsla(206.97, 77.4%, 54.97%, 0.768) 28.4%,
    hsla(212.44, 74.02%, 59.25%, 0.754) 39.6%,
    hsla(220.14, 69.78%, 63.22%, 0.737) 49.1%,
    hsla(231.2, 64.55%, 66.9%, 0.716) 57%,
    hsla(246.76, 61.08%, 68.07%, 0.694) 63.7%,
    hsla(261.38, 61.42%, 65.86%, 0.67) 69.3%,
    hsla(273.56, 61.9%, 63.44%, 0.646) 74%,
    hsla(283.45, 62.51%, 60.81%, 0.622) 78%,
    hsla(291.22, 63.27%, 58.02%, 0.599) 81.6%,
    hsla(297.1, 64.19%, 55.07%, 0.578) 85%,
    hsla(301.28, 67.65%, 52.67%, 0.56) 88.3%,
    hsla(303.79, 74.33%, 51.08%, 0.545) 91.7%,
    hsla(305.04, 82.81%, 48.85%, 0.535) 95.6%,
    hsla(305.22, 100%, 45.1%, 0.53) 100%);
`

const ProductListingContainer = styled.div`
    margin: 0 4%;
`

export  {
    HeroView,
    HeroView2,
    ProductListingContainer
}