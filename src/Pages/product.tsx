import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
           <CardProduct>
                <CardProduct.Header image="/images/laptop.jpg" />
                <CardProduct.Body title="Laptop">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quasi, laudantium pariatur beatae quibusdam similique nisi 
                    exercitationem aliquid magni suscipit deleniti fugit veniam 
                    obcaecati cupiditate, nobis inventore. Officiis animi 
                    tempora deserunt.
                </CardProduct.Body>
                <CardProduct.Footer price="5.000.000" />
           </CardProduct>
           <CardProduct>
                <CardProduct.Header image="/images/laptop.jpg" />
                <CardProduct.Footer price="2.000.000" />
           </CardProduct>
        </div>
    )   
}

export default ProductPage