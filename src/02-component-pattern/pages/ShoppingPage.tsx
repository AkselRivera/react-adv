import { ProductCard, ProductImage } from '../components/index';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';





export const ShoppingPage = () => {

    const {  shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr/>

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                {/* Apuntes  :)
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle title='Hola mundo' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard> */}

                {
                    products.map( product =>(        
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className='custom-image'/>
                            <ProductCard.Title />
                            <ProductCard.Buttons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
                
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product])=> (

                    <ProductCard 
                        key={key}
                        product={product}
                        className='bg-dark text-white'
                        style={{width:'100px'}}
                        value={ product.count }
                        onChange={onProductCountChange}
                    >
                        <ProductImage className='custom-image'/>
                        <ProductCard.Buttons 
                            className='custom-buttons' 
                            style={{
                                display:'flex',
                                justifyContent:'center'
                            }}
                        />
                    </ProductCard>

                    ))

                    

                }
            </div>

        </div>
    )
}
