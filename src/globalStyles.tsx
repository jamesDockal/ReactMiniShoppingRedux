import { createGlobalStyle } from 'styled-components'
import bg from './public/bg.svg'

// console.log(backgroundImage)

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
    }
    body{
        display: flex;
        justify-content: center;

        background-color: #333;
        height: 100vh;
        background-image: url(${bg});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
`
export default GlobalStyles