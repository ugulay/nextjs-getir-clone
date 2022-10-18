import {
    UserIcon, GiftIcon,
    ChevronRightIcon, SearchIcon
} from '@heroicons/react/solid';
import useModal from '../hooks/useModal';

type HeaderProps = {
    className?: string;
    sticky?: boolean;
    [key: string]: any;
}

const Header = ({ sticky = true }: HeaderProps) => {

    const { component, selectModal } = useModal();

    return (<>

        {component && <>{component}</>}

        <header className={` text-gray-200 ${sticky ? 'sticky' : null} top-0 z-10 hidden lg:block`}>

            <div className="bg-violet-800 pt-1 ">
                <nav className="container flex justify-between mx-auto p-0 m-0">

                    <div className="text-lg font-semibold text-white-700 inline-flex gap-px ">
                        <a href={"/"} className=" text-yellow-300 bg-violet-700 px-5 rounded-t-lg py-3">gelsin</a>
                        <a href={"/"} className=" px-5 py-3 hover:bg-violet-700 hover:rounded-t-lg">yemek</a>
                        <a href={"/"} className=" px-5 py-3 hover:bg-violet-700 hover:rounded-t-lg">büyük</a>
                        <a href={"/"} className=" px-5 py-3 hover:bg-violet-700 hover:rounded-t-lg">su</a>
                        <a href={"/"} className=" px-5 py-3 hover:bg-violet-700 hover:rounded-t-lg">çarşı</a>
                    </div>

                    <div className="text-white-800 flex items-baseline">
                        <a href={"/kampanyalar"} className="text-base px-4 py-3 flex">
                            <GiftIcon className="w-6 h-6 mr-2" /> Kampanyalar
                        </a>
                        <button className="text-base px-4 py-3 flex" onClick={(e) => {
                            selectModal('registerModal');
                        }}>
                            <UserIcon className="w-6 h-6 mr-2" /> Profil
                        </button>
                    </div>

                </nav>
            </div>

            <div className="bg-violet-700">
                <nav className=" container items-center justify-between p-2 py-5 mx-auto mb-1 grid grid-cols-9">

                    <div className="hidden lg:flex flex-1 col-span-3">
                        <a href={"/"} className="block lg:inline-block text-yellow-400 font-bold text-3xl">
                            gelsin
                        </a>
                    </div>

                    <div className="col-span-3">
                        <div className="flex flex-row flex-wrap items-center justify-between overflow-hidden bg-white rounded-lg p-0 m-0 w-full">

                            <SearchIcon className="w-4 h-4" />

                            <input type={"text"} name="search" placeholder="Ürün ara" className="p-3 text-sm text-gray-700 " />

                            <div className="bg-yellow-400 inline-flex items-center overflow-hidden ">
                                <a href="" className=" bg-white rounded-r-full font-bold text-violet-900 inline-flex flex-wrap items-center py-3">
                                    <span className="">Ev</span> <ChevronRightIcon className="w-5 h-5" />
                                </a>
                                <div className="text-gray-700 font-semibold overflow-hidden py-3 px-3">
                                    TVS 15 dk
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-3"></div>

                </nav>
            </div>
        </header>

    </>
    )

}

export default Header;