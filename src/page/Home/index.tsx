import { useState } from "react";
import { ListButton, Styles } from "./styles";
import { GiShoppingCart } from "react-icons/gi"

interface food {
    fruit:string,
    vegetable: string,
    meat: string,
    hygiene: string,
    sweets: string,
    other: string
}

export const Home = () => {

    const foods = [
        "Fruta",
        "Verdura",
        "Carne",
        "Higiene",
        "Guloseimas",
        "Outro"
    ]

    const [backgroundButton, setBackgroundButton] = useState("white")
    const [clickColor, setClickColor] = useState(false)

    const hanClickColorButton = () => {
        setClickColor(!clickColor)
        if(clickColor == true){
        setBackgroundButton("rgb(255, 122, 136)");
        }
        else{
            setBackgroundButton("white");
        }
    }

    return (
        <Styles>
            <div className="body">
                    <div className="title">
                        <h1>Lista de Compras</h1> 
                        <GiShoppingCart className="icon-cart"></GiShoppingCart>
                    </div>
                    <h3>O que deseja adicionar na sua lista?</h3>
                    <input className="name_item"
                        placeholder="Nome do item"
                    >
                    </input>
                    <div> 
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Fruta
                            </ListButton>
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Verdura
                            </ListButton>
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Carne
                            </ListButton>
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Higiene
                            </ListButton>
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Guloseimas
                            </ListButton>
                            <ListButton color={backgroundButton} onClick={hanClickColorButton}>
                                Outro
                            </ListButton>  
                    </div> 
                    
            </div>
        </Styles>
       
    );
};

export default Home
