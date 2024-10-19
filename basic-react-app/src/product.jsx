import "./product.css";

function Product({ title, price }) {
    let isDiscount=price>30000;
    let styles={backgroundColor:isDiscount?"pink":""}
    // Check if the price is greater than 30000
    // if (price > 30000) {
        return (
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h5>Price: {price / 2}</h5>
                {/* Display discount message if price is greater than 30000 */}
                {isDiscount &&<p>Discount of 5%</p>}
            </div>
        );

 
// }
}
export default Product;
