import "./Product.css";

function Product({title,price,feature}){
     return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <p>{feature}</p>
        </div>
    );
}
export default Product;