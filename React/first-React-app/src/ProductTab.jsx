
import Product from "./Product";
function ProductTab(){
    let option1=[<li>"satya"</li>,<li>"kumar"</li>,<li>"chaudhary"</li>]; 
    // let option2={a:"hi-tech",b:"durable",c:"fast"};
    return(

        <>
        <Product title="phone " price={302535} feature={option1}/>
        {/* <Product title="laptop " price={524662}/>
        <Product title="pen " price={5263425}/> */}
         </>
    );
} 
export default ProductTab;