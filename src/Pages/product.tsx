import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
import Counter from './../components/Fragments/Counter';

const products = [
    {
        id: 1,
        image: "/images/laptop.jpg",
        title: "Laptop",
        price: "5.000.000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laudantium pariatur beatae quibusdam similique nisi"
    },
    {
        id: 2,
        image: "/images/laptop.jpg",
        title: "Laptop Gimang",
        price: "10.000.000",
        description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi"
    },
    {
        id: 3,
        image: "/images/laptop.jpg",
        title: "Laptop Dingin",
        price: "2.000.000",
        description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi, Quasi, laudantium pariatur beatae quibusdam similique nisi"
    },
]

const email = localStorage.getItem('email')

const ProductPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')

        window.location.href = '/login'
    }

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-6">
                {email}
                <div className="w-200 ml-5">
                    <Button title="Logout" variant="bg-black" onClick={handleLogout}></Button>
                </div>
            </div>
            <div className="flex justify-center py-5">
                {/* Rendering List */}
                {products.map((item) => (
                    <CardProduct key={item.id}>
                        <CardProduct.Header image={item.image} />
                        <CardProduct.Body title={item.title}>
                             {item.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={item.price} />
                    </CardProduct>
                ))}
            </div>
            <div className="flex w-100 justify-center">
                <Counter />
            </div>
        </>
    )   
}

export default ProductPage