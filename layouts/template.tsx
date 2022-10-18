import Header from "./header";
import Footer from "./footer";

type AvailableProps = {
    children: any;
    noHeader?: boolean;
    noFooter?: boolean;
    fullWidth?: boolean;
    [key: string]: any;
}

const Template = (props: AvailableProps) => {
    return (
        <>
            {/*props.noHeader !== true && <Header />*/}

            {props?.children}

            {/*props?.noFooter !== true && <Footer />*/}
        </>
    );
}

export default Template;