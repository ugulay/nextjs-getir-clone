import { ShoppingBagIcon, TruckIcon } from '@heroicons/react/solid';
import { randPrice } from '../utils/sampler'

const MinPriceBar = () => {
    return (
        <>
            <div className="bg-white shadow-md">
                <div className=" container mx-auto flex py-2 gap-7">

                    <div className="inline-flex items-center">
                        <div className="w-1/4 mr-4">
                            <ShoppingBagIcon className="w-10 h-10 text-violet-900" />
                        </div>
                        <div className="w-3/4 flex flex-col">
                            <span className="font-light">MİNİMUM</span>
                            <span className="font-bold text-gray-700">{new Intl.NumberFormat('tr-tr', { style: "currency", currency: "TRY" }).format(randPrice())}</span>
                        </div>
                    </div>

                    <div className="inline-flex items-center">
                        <div className="w-1/4 mr-4">
                            <TruckIcon className="w-10 h-10 text-violet-900" />
                        </div>
                        <div className="w-3/4 flex flex-col">
                            <span className="font-light">GETİRMESİ</span>
                            <span className="font-bold text-gray-700">
                                {new Intl.NumberFormat('tr-tr', { style: "currency", currency: "TRY" }).format(0.0)} - {new Intl.NumberFormat('tr-tr', { style: "currency", currency: "TRY" }).format(randPrice())}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MinPriceBar;