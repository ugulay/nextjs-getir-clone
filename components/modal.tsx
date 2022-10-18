export type TModal = {
    children?: React.ReactNode;
    props?: any;
    className?: string;
    [key: string]: any;
}

const Modal = ({ children, ...props }: TModal) => {

    return (<>
        <div className={`
        fixed flex justify-center items-center p-10
        inset-0 bg-gray-800 bg-opacity-80 
        overflow-hidden h-screen w-screen z-50
        ${props?.className}`} >
            {children}
        </div>
    </>)

}

export default Modal;