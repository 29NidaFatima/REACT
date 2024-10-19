import Product from "./product.jsx";

function ProductTab() {
    return (
        <> 
          
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={40000} />
            <Product title="iPad" price={1} />
        </>
    );
}

export default ProductTab;
