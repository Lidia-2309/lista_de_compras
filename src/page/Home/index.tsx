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

    const foods = {
        name: [
          "Fruta",
          "Verdura",
          "Carne",
          "Higiene",
          "Guloseimas",
          "Outro"
        ]
      };

    const [backgroundButton, setBackgroundButton] = useState("white")
    const [clickColor, setClickColor] = useState(false)
    const [cor, setCor] = useState('branco');
    const [selectedButton, setSelectedButton] = useState("");
    const [value_ant, setValue_Ant] = useState('');

    const hanClickColorButton = (value:string) => {
        setClickColor(!clickColor);
        console.log('Valor:'+ value + ' = ' + clickColor)
        console.log('value_ant:'+ value_ant)

        if(clickColor === true || value_ant !== value){
            setSelectedButton(value);
        }
        else{
            setSelectedButton('');
            setValue_Ant(value);
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
                        {foods.name.map((value) => (
                            <ListButton 
                                value={value} 
                                color={selectedButton === value ? "rgb(255, 122, 136)" : "white"} 
                                onClick={()=> 
                                    (hanClickColorButton(value))
                                }>{value}
                            </ListButton>  
                        ))}                             
                    </div> 
            </div>
        </Styles>
    );
};

export default Home
