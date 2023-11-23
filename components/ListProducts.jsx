import ProductItem from './ProductItem';

const ListProducts = (props) => {
    return (
        <>
            {
                props.products.map((item, idx)=>{
                    return <ProductItem key={idx} item={item} idx={idx} updateProduct={props.updateProduct} pressedBuy={props.pressedBuy}/>
                })
            }
        </>
    )
}

export default ListProducts;