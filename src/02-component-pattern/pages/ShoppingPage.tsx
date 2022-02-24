import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/index';
import '../styles/custom-styles.css';

const product={
    id:'1',
    title:'Coffe Mug',
    img:'./coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Page</h1>
            <hr/>

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle title='Hola mundo' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image'  />
                    <ProductCard.Title title={'Cafecito'} />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>
                
                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor:'#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductCard.Title 
                        style={{
                            fontWeight:'bold'
                        }}
                    />
                    <ProductCard.Buttons   
                        style={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
