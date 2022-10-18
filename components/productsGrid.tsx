import { useEffect, useState } from 'react';
import { randProduct, Product } from '../utils/sampler';
import { ImageWithLoader } from '../components/image';
import { PlusIcon, ChevronRightIcon } from '@heroicons/react/solid';

const ProductGrid = () => {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        var rows: Product[] = [], i = 0, len = 36;
        while (++i <= len) rows.push(randProduct()); rows
        setProducts(rows);
    }, [])

    return (
        <>

            <h5 className="flex flex-wrap items-center py-4 font-semibold text-gray-800">
                <ul className="inline-flex items-center gap-2">
                    <li>Yeni Ürünler</li>
                    <li><ChevronRightIcon className="w-4 h-4 text-gray-400" /></li>
                    <li>Yeni Ürünler</li>
                </ul>
            </h5>

            <div className="grid gap-px grid-cols-4 rounded-sm bg-gray-100 overflow-hidden">

                {products.map((product, i) => {
                    return (
                        <article key={i} className=" bg-white inline-flex items-center gap-2 flex-col p-3 text-center">

                            <figure className="relative thumbnail">
                                <a href="">
                                    <ImageWithLoader
                                        src={product.image} alt={product.name}
                                        width={"120"} height={"120"} layouts={{
                                            xs: "w-full",
                                            sm: "w-full",
                                            md: "w-full",
                                            lg: "w-full",
                                        }}
                                        placeholder={'blur'}
                                    />
                                </a>
                                <button className="absolute shadow p-2 top-0 right-0 bg-white rounded-md">
                                    <PlusIcon className="w-4 h-4 text-violet-400" />
                                </button>
                            </figure>

                            <div className=" text-violet-700 font-normal text-base">
                                {(product.discountedPrice !== undefined && product.discountedPrice < product.price) ? <>
                                    <span className="text-gray-400 line-through mr-2">
                                        {new Intl.NumberFormat('tr-TR', { style: "currency", currency: "TRY" }).format(product.price)}
                                    </span>
                                    {new Intl.NumberFormat('tr-TR', { style: "currency", currency: "TRY" }).format(product.discountedPrice)}
                                </> : new Intl.NumberFormat('tr-TR', { style: "currency", currency: "TRY" }).format(product.price)}
                            </div>

                            <div className="font-medium  text-gray-700">
                                {product.name}
                            </div>

                            <div className="text-gray-400 font-normal text-sm">
                                {product.size}
                            </div>

                        </article>
                    )
                })}

            </div>
        </>
    )
}

export default ProductGrid;