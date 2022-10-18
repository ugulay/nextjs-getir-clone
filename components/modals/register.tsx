import Modal from '../modal';
import useModal from '../../hooks/useModal';
import { XIcon } from '@heroicons/react/solid';

const RegisterModal = ({ ...props }): JSX.Element | null => {

    const { closeModal } = useModal();

    return (<Modal {...props}>

        <div className="bg-white rounded-xl shadow-xl w-[40rem]">
            <div className="flex flex-wrap flex-row justify-between items-center p-3 border-b  text-gray-700">
                <span className="block">Header</span>
                <span className="block">
                    <button className="font-bold py-1 px-2 rounded-lg bg-gray-100" onClick={(e) => { closeModal(); }}>
                        <XIcon className="w-5 h-6" />
                    </button>
                </span>
            </div>
            <div className="flex p-3">
                Profil
            </div>
        </div >

    </Modal>);
}

export default RegisterModal;