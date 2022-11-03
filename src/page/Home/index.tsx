import { useState } from "react";
import { Styles } from "./styles";

export const Home = () => {

    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [result, setResult] = useState<string>('');
    const [condition, setCondition] = useState<string>('');

    const calculate = () => {
        const imc = weight*10000/(height*height);
        const res = ''+ imc;
        setResult(res)

        if(imc < 18.5){
            setCondition("Abaixo do peso")
        }
        if(18.5 <= imc && imc <= 24.9){
            setCondition("Saudável :D")
        }
        if(25 <= imc && imc <= 29.9){
            setCondition("Acima do peso")
        }
        if(imc >= 30){
            setCondition("Obesidade")
        }
    };

    return (
        <Styles>
            <div className="body">
                <div>
                    <h1>Lista de Compras</h1>
                    <label>
                        <input type="number" 
                            name="height" 
                            onChange={(e) => setHeight(+e.target.value)} 
                            placeholder="Insira sua altura (cm): "
                        />
                    </label>
                    <label>
                        <input type="number" 
                            name="weight" 
                            onChange={(e) => setWeight(+e.target.value)}
                            placeholder="Insira seu peso (kg): "
                        />
                    </label>
                    <button onClick={calculate}>Calcular BMI</button>
                    <div className="BMI"><h4><strong>BMI: </strong>{result}</h4></div>
                    <div className="Condição"><h4><strong>Condição: </strong>{condition}</h4></div>
                </div>
            </div>
        </Styles>
       
    );
};

export default Home
