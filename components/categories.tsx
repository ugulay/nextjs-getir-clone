import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ImageWithLoader } from '../components/image';
import { randProductImage, randCategory } from '../utils/sampler';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        var tempCats: any = [], i = 0, len = 24;
        while (++i <= len) tempCats.push(randCategory());
        setCategories(tempCats);
    }, []);

    return (
        <>

            <h5 className="flex flex-wrap items-center py-4 font-semibold text-gray-800 ">
                Kategoriler
            </h5>

            <div className="flex flex-col flex-wrap bg-white rounded-lg py-2 px-3 font-semibold text-gray-600 sticky">
                {categories.map((category: any, index: number) => {
                    return (
                        <a href={`/kategori/${(category.slug).toLowerCase()}`} key={index} className="inline-flex items-center py-2">

                            <div className="mr-3">
                                <div className="rounded border w-8 h-8">
                                    <ImageWithLoader src={randProductImage()} width="100%" height="100%" />
                                </div>
                            </div>

                            <div className="">
                                {category.name}
                            </div>

                            <div className="ml-auto">
                                <ChevronDownIcon className="w-5 h-5 text-gray-400 text-light" />
                            </div>

                        </a>
                    )
                })}
            </div>

        </>
    )

}

export default Categories;