import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { getDetailProduct } from "../services/product.service";
import { useState } from 'react';
import ProductResponses from "../interfaces/ProductResponses";

const DetailProductPage = () => {
    const [product, setProduct] = useState<ProductResponses>({})
    const { id } = useParams()

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])

    console.log(product)
    return (
        <div className="w-100 min-h-screen flex justify-center items-center">
            {Object.keys(product).length > 0 && (
                <div className="flex font-sans max-w-xl">
                    <div className="flex-none w-48 relative">
                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy" />
                    </div>
                    <form action="" className="flex auto p-6">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                {product.title}
                            </h1>
                            <div className="text-lg font-semibold text-slate-500">
                                {product.price}
                            </div>
                            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="space-x-2 flex text-sm">
                                    {product.description}
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-6 text-sm font-medium">
                                <div className="flex-auto flex space-x-4">
                                    <button 
                                    className="h-10 px-6 font-semibold rounded-md bg-black text-white">
                                        Buy Now
                                    </button>
                                    <button 
                                    className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900">
                                        Add To Tag
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DetailProductPage 