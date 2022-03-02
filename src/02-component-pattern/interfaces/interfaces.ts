

export interface Product {
    id:string;
    title:string;
    img?:string;
}

export interface ProductContextProps {
    counter:number;
    increaseBy: (value:number) => void;
    product:Product;
    maxCount?: number;
}

export interface onChangeArgs{
    product:Product;
    count:number;
}

export interface ProductInCart extends Product {
    count: number;
    // '1': {...product, count:3} Initial State shopping cart
}

export interface InitialValues {
    count?:number;
    maxCount?:number;
}

export interface ProductCardHandler{
    count: number;
    isMaxCountReached:boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value:number) => void;
    reset:()=> void;
}