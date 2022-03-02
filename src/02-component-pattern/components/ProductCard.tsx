import  { createContext} from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandler, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface ProductCardProps{
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args:ProductCardHandler)=> JSX.Element;
    className?: string;
    style?: React.CSSProperties; 
    onChange?:(args: onChangeArgs )=> void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductContext= createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({children ,product, className,style,onChange, value, initialValues}:ProductCardProps) => {
    
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( {onChange, product, value, initialValues} );
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>

            <div 
                className={ `${styles.productCard} ${className}` }
                style={style}
            >
                { children({
                    count:counter,
                    isMaxCountReached,
                    maxCount:initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}

