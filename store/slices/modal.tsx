import { createSlice } from '@reduxjs/toolkit';
import { AvailableModals } from '../../components/modals'

type TModalSlice = {
    modal: typeof AvailableModals[number] | null;
    loading: boolean;
}

const initialState: TModalSlice = {
    modal: null,
    loading: false
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload || null;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setModal, setLoading } = ModalSlice.actions;
export default ModalSlice.reducer;