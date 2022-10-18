import {
    ShoppingBagIcon
} from '@heroicons/react/solid';

const RightBasket = () => {

    return (<>

        <h5 className="flex flex-wrap items-center py-4 font-semibold text-gray-800">
            Sepetim
        </h5>

        <div className="border-2 border-yellow-300 rounded-lg p-3 py-16 bg-white">
            <div className="flex flex-col flex-wrap items-center py-2 text-center overflow-hidden">
                <ShoppingBagIcon className="w-1/2 h-auto text-gray-200" />
                <span className="text-violet-600 font-semibold">Sepetiniz şu an boş</span>
                <span className="text-gray-500 font-light">Sipariş vermek için sepetinize ürün ekleyin</span>
            </div>
        </div>

    </>
    )
}

export default RightBasket;