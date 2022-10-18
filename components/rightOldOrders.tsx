import { randPrice } from '../utils/sampler'

const RightOldOrders = () => {
    return (<>
        <h5 className="flex flex-wrap items-center py-4 font-semibold text-gray-800 mt-4">
            Geçmiş Siparişlerim
        </h5>
        <div className="rounded-lg p-3 bg-white flex flex-wrap flex-col gap-3 text-sm">

            <div className="inline-flex items-center">
                <div className="w-3/4 flex flex-col font-light">
                    <span>6 May 2021</span>
                    <span>13:57</span>
                    <span className="font-semibold text-base">Ev</span>
                </div>
                <div className="w-1/4">
                    <span className="text-violet-700 font-semibold">{new Intl.NumberFormat('tr-TR', { style: "currency", currency: "TRY" }).format(randPrice())}</span>
                </div>
            </div>

            <div className="inline-flex items-center">
                <div className="w-3/4 flex flex-col font-light">
                    <span>6 May 2021</span>
                    <span>13:57</span>
                    <span className="font-semibold text-base">Ofis</span>
                </div>
                <div className="w-1/4">
                    <span className="text-violet-700 font-semibold">{new Intl.NumberFormat('tr-TR', { style: "currency", currency: "TRY" }).format(randPrice())}</span>
                </div>
            </div>

        </div>

        <a href="" className="text-violet-600 font-semibold block text-center mt-5">Tümünü Gör</a>
    </>)
}

export default RightOldOrders;