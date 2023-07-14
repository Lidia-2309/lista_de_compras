import { useEffect, useState } from "react";
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
    
    const [product, setProduct] = useState('');
    const [clickColor, setClickColor] = useState(false)
    const [selectedButton, setSelectedButton] = useState("");
    const [value_ant, setValue_Ant] = useState('');
    const [values, setValues] = useState('');  // -> usado para guardar o value e usar no useEffect
    const [cont, setCont] = useState(false);
    const [price, setPrice] = useState<number>(0);
    const [view, setView] = useState(false);

    const hanClickColorButton = (value:string) => {
        if(value !== values){
            setClickColor(true);
            setCont(!cont);
        }
        else{
            setClickColor(!clickColor);
        }
        setValues(value);
    }

    useEffect(() => {
        console.log('Valor:'+ values)
        if(value_ant === values){
            setSelectedButton('');
            setValue_Ant('');
        }
        if(clickColor === true){
            setSelectedButton(values);
            setValue_Ant(values);
        }
        else{
            setSelectedButton('');
            setValue_Ant(values);
        }
    },[clickColor, cont])

    return (
        <Styles>
            <div className="body">
                    <div className="title">
                        <h1>Lista de Compras</h1> 
                        <GiShoppingCart className="icon-cart"></GiShoppingCart>
                    </div>
                    <h3>O que deseja adicionar na sua lista?</h3>
                    
                    <input 
                        onChange={(e) => setProduct(e.target.value)}
                        placeholder="Nome do item">
                    </input>

                    <div> 
                        {foods.name.map((value) => (
                            <ListButton 
                                value={value} 
                                color={selectedButton === value ? "rgb(255, 122, 136)" : "white"} 
                                onClick={()=> 
                                    (hanClickColorButton(value))}>
                                    
                                    {value}

                            </ListButton>  
                        ))}                             
                    </div> 

                    <input 
                        type="number" 
                        placeholder="Preço em reais"
                        onChange={(e)=> setPrice(+e.target.value)}
                        >
                    </input>
                                    
                    <button onClick={() => setView(true)} className="button">Adicionar item</button>

                    { view === true ? 
                        <div> 
                            <h2>Produto: {product}</h2>
                            <h2>Tipo: {values}</h2>
                            <h2>Preço: {price}</h2>
                        </div> 
                        
                        : null
                    }
            </div>
        </Styles>
    );
};

export default Home
