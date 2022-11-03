import styled from "styled-components";

export const Styles = styled.div`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
div {
    align-items:center;
    //justify-content:center; 
    display:flex;
    flex-direction: column;
}

.body{
    position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
    background-color: #F0F8FF;
}

h1{
    text-align: center;
    color: black;
    font-size: 2.5rem;
    padding: 2rem;
}

h4{
    font-weight: normal;
}

input{
    display: flex;
    background: white;
    outline: none;
    width: 17rem;
    border: none;
    padding: 1rem 0rem;
    border-radius: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    box-shadow: 19px 22px 15px -3px rgb(0 0 0 / 10%);
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

button{
    font-size: 1.5vw;
    cursor: pointer;
    background-color: rgb(232, 185, 74);
    margin-bottom: 1rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    border-radius: 8px;
    padding: 1rem 2rem;
}
`;