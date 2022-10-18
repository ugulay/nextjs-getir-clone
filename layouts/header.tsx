import Link from 'next/link';
import { UserIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline';

export type MenuItem = {
    name: string,
    url?: string,
    active?: boolean,
    icon?: any,
    submenu?: MenuItem[],
    authOnly?: boolean
}

export type Menu = MenuItem[];

const leftMenu: Menu = [
    {
        name: "Elektronik", authOnly: false,
        submenu: [
            { name: "Bilgisayar", url: "/c/pc" },
            { name: "Cep Telefonu", url: "/c/telefon" },
            { name: "Tablet", url: "/c/tablet" },
        ]
    },
    {
        name: "Elektronik", authOnly: false,
        submenu: [
            { name: "Bilgisayar", url: "/c/pc" },
            { name: "Cep Telefonu", url: "/c/telefon" },
            { name: "Tablet", url: "/c/tablet" },
        ]
    }
];

const rightMenu: Menu = [
    { name: "Sepet", url: "/sepet", authOnly: false, icon: <ShoppingCartIcon className="text-blue-500 icon" /> },
    { name: "Giriş", url: "/giris", authOnly: false, icon: <UserIcon className="text-blue-500 icon" /> },
];

const renderMenu = (menu: Menu, isSub: boolean = false) => {

    const classForWrap = isSub ? "dropdown-menu" : "navbar-nav";
    const classForItem = isSub ? "dropdown-item" : "nav-link";

    return (<ul className={classForWrap}>

        {menu.map((item: MenuItem, index: number) => {
            return (

                <li className={`nav-item d-flex h-100 flex-column align-self-center ${item?.submenu ? "dropdown" : ""}`} key={index}>

                    <Link href={item?.url || "#"} >
                        <a className={`align-items-center d-flex ${classForItem} ${item?.submenu ? 'dropdown-toggle' : ""} `} data-bs-toggle={item?.submenu ? 'dropdown' : ""} aria-expanded="false">
                            {item?.icon}
                            <span className={"px-1"}>{item.name}</span>
                        </a>
                    </Link>

                    {item?.submenu && renderMenu(item.submenu, true)}

                </li>

            )
        })}

    </ul >)
}


const Header = () => {

    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">

                    <Link href={"/"}><a className="navbar-brand">Navbar</a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between py-2" id="navbarNav">
                        <>{renderMenu(leftMenu)}</>
                        <form className="d-flex mx-lg-5 mx-sm-auto w-100">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-sm" placeholder="Ürünlerde ara..." />
                                <button type="button" className="btn btn-secondary"><SearchIcon className="text-blue-500 icon" /></button>
                            </div>
                        </form>
                        <>{renderMenu(rightMenu)}</>
                    </div>

                </div>
            </nav>

        </header >
    );
}

export default Header;
