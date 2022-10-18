import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../store/slices/modal';

// Available modals
import { RegisterModal } from '../components/modals';

type TUseModal = {
    component: JSX.Element | null;
    isOpen: boolean;
    loading: boolean;
    selectModal: (modal: string) => void;
    closeModal: () => void;
}

const useModal = (): TUseModal => {

    const dispatch = useDispatch();
    const { modal, loading } = useSelector(state => state.ModalReducer);
    let component: JSX.Element | null = null;

    const selectModal = (modal: string) => dispatch(setModal(modal));
    const closeModal = () => { dispatch(setModal(null)); component = null; };

    switch (modal) {
        case 'registerModal': component = <RegisterModal />; break;
        default: component = null;
    }

    const cb = useCallback(() => {
        if (document) {
            if (component) document.body.classList.add('overflow-hidden');
            if (!component) document.body.classList.remove('overflow-hidden');
        }
    }, [component]);
    useEffect(() => cb(), [cb]);

    return {
        component, isOpen: !!component,
        loading, selectModal, closeModal
    };

}

export default useModal;    