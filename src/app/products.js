import styles from './products.css'
import React, { useState, useEffect } from 'react';




function Installment(props){
    const fees = props.installment.hasFee ? "Com juros" : "Sem juros";

    return(
        <p>em {props.installment.number}x de R$ {props.installment.total} {fees}</p>
    )
}

function ProductListItem(props){
    const defaultProductImage = "https://cdn.awsli.com.br/600x450/238/238483/produto/46949036/0588180f94.jpg"

    return(
        <div className='cardProduct'>
            <img src={defaultProductImage} alt="Imagem de uma caneca padrão" />
            <div className='descriptionProduct'>
                <a href="#"> <h3>{props.product.title}</h3> </a>
                <h4>R$ {props.product.amount}</h4>
                <Installment installment={props.product.installments} />
            </div>
        </div>
    )
}

export default function ProductsForSaleList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/products")
            .then((response) => response.json())
            .then((json) => {
                setIsLoaded(true);
                setProducts(json);
            },(error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []
);

    if(error){
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
        return <div>Carregando...</div>
    } else{
        const p = products.map(
            (x, index) => <ProductListItem product={x} key={index} />);
        return <div>{p}</div>
    }

}
