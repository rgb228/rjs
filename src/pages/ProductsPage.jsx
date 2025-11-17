
import { useState, useEffect } from "react";
import { Rate } from 'antd';
export default function ProductsPage() {
    



    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        }
        getData()
    }, [])


    
    return (

        <div className="grid grid-cols-4 gap-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {
                products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                        <div className="">
                            <div className="">
                                <img className="Img_size " src={product.images[0]} alt="" />
                            </div>
                        </div>

                      <p>{product.title}</p>  
                          <Rate defaultValue={product.rating} />
                      <p>{product.price}$</p> 
                     <button
                            className="px-2 py-1 bg-amber-600 text-white"
                            onClick={() => addToCart(product)}
                        >Купить</button>
                                     


                    </div>
                ))
            }

        </div >
    )

}