import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/index';

const product={
    id:'1',
    title:'Coffe Mug',
    img:'./coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                <ProductCard product={product}>
                    <ProductImage  />
                    {/* <ProductCard.Title title={'Hola'} /> */}
                    <ProductTitle title='Hola mundo'/>
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductCard.Title title={'Cafecito'} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
