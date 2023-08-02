import styled from "styled-components";

export const Styles = styled.div`

    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #F0F8FF;
    }
    .title {
        align-items:center;
        display:flex;
    /*     flex-direction: column; */
    }
    .icon-cart{
        height: 50px;
        width: 50px;
        margin-left: -20px;
    }
    input{
        outline: none;
        border: none;
        text-align: center;
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
    }
    input:focus{
        box-shadow: rgba(255, 122, 136, 0.4) 3px 5px 28px -3px;
    }

    input:focus::-webkit-input-placeholder {
    color: transparent;
    }
    input:focus:-moz-placeholder { /* Firefox 18- */
    color: transparent;  
    }
    input:focus::-moz-placeholder {  /* Firefox 19+ */
    color: transparent;  
    }
    input:focus:-ms-input-placeholder {  
    color: transparent;  
    }

    .body{
        align-items:center;
        display:flex;
        flex-direction: column;
        position:absolute;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        background-color: #F0F8FF;
    }

    h1{
        display: flex;
        text-align: center;
        color: black;
        font-size: 2.5rem;
        padding: 2rem;
        font-family: 'Karla', sans-serif;
    }

    .List{
        position: relative;
        display: flex;
        text-align: center;
        color: black;
        /* font-size: 2.5rem;*/
        padding: 2rem;
        font-family: 'Karla', sans-serif;

        @media (max-width: 768px){
            flex-direction: column;
            -webkit-box-align: center;
            align-items: center;
            text-align: center;
            gap: 1rem;
            -webkit-box-pack: center;
            justify-content: center;
        }
    }

    h2 {
        padding: 1rem;
    }

    .button {
        border: none;
        outline: none;
        font-weight: 600;
        color: white;
        cursor: pointer;
        background-color: rgb(255, 122, 136);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding: 0.6rem 1.2rem;
        border-radius: 0.5rem;
    }

    .products {
        padding-top: 0.5rem;
        font-size:1rem;
        font-weight: 100;
    }

    .types-food{
        display: flex;
        flex-flow: row wrap;
        row-gap: 1rem;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
`;

export const ListButton = styled.button`

    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    background-color: ${({color}) => color};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;

    :hover{
        transform: scale(1.2);
    }
 `;