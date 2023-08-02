import { useEffect, useState } from "react";
import { ListButton, Styles } from "./styles";
import { GiShoppingCart} from "react-icons/gi";
import { FcCancel} from "react-icons/fc"
import food from "../../interfaces";

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

    const [listproducts, setListProducts] = useState<food[]>([])
    const [product, setProduct] = useState('');
    const [clickColor, setClickColor] = useState(false)
    const [selectedButton, setSelectedButton] = useState("");
    const [value_ant, setValue_Ant] = useState('');
    const [values, setValues] = useState('');  // -> usado para guardar o value e usar no useEffect
    const [cont, setCont] = useState(false);
    const [price, setPrice] = useState<number>(0);
    const [idChange, setIdChange] = useState<number>(0);
    const [idNext, setIdNext] = useState<number>(0);

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

    const handleObjectValues = (namee:string, pricee: number, typee:string) => {
        setIdNext(idNext + 1);
        const newfood: food = {
            id_food: idNext,
            name_food: namee,
            price_food: pricee,
            type_food: typee
        }
        setListProducts((prevState) => ([
            ...prevState,
           newfood
        ]))
    }

    useEffect(() => {
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


    const handleTrash = (name:string) => {
        const index = listproducts.findIndex((product) => product.name_food === name);
        listproducts.splice(index, 1);
        setIdChange(idChange+1);
    }

    useEffect(()=>{
        setListProducts(listproducts);
    },[listproducts,idChange])

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
                                    
                    <button onClick={() => handleObjectValues(product, price, values)} className="button">Adicionar item</button>
                                    
                    <div className="List"> 
                        {foods.name.map((value) => (
                            <h2>
                                    {value}

                                        <div> 
                                           {
                                            listproducts.map((valores)=>(
                                                value === valores.type_food ?  
                                                <div className="products">{valores.name_food + " - " + valores.price_food + "R$" + " "} 
                                                <FcCancel onClick={() => handleTrash(valores.name_food)}/> </div>
                                                : null
                                            ))
                                        }
                                        </div> 

                            </h2>  
                        ))}                             
                    </div> 
            </div>
        </Styles>
    );
};

export default Home
