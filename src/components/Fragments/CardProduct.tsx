import { Link } from "react-router-dom"
import Button from "../Elements/Button"

interface Props {
    children: React.ReactNode
}

const CardProduct = (props: Props) => {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-2">
            {props.children}
        </div>
    )
}

interface HeaderProps {
    id: number,
    image: string
}

const Header = (props: HeaderProps) => {
    return (
        <Link to={`/products/${props.id}`}>
            <img 
                src={props.image} 
                alt="products" 
                className="p-8 rounded-t-lg w-full h-64 object-cover" />
        </Link>
    )
}

interface BodyProps {
    title: string,
    children: React.ReactNode
}

const Body = (props: BodyProps) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {props.title}
                </h5>
                <p className="text-s text-white">
                   {props.children}
                </p>
            </a>
        </div>
    )
}

interface FooterProps {
    price: number
    addToCart?: () => void
}

const Footer = (props: FooterProps) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{props.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</span>
            <div className="w-15">
                <Button title="Add to Cart" variant="bg-blue-600" onClick={props.addToCart}/>
            </div>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct