import styled from "styled-components";

export const Styles = styled.div`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
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
	width:100%;
	height:100%;
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