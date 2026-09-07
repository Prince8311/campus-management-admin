import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FineModal from './Fine';
import axiosInstance from '../../../Services/Middleware/AxiosInstance';

jest.mock('../../../Services/Middleware/AxiosInstance', () => ({ get: jest.fn() }));
jest.mock('../../../Services/Api/ApiConfig', () => ({
    getApiEndpoints: () => ({ fetchAcademicLevels: '/levels', fetchClasses: '/classes', fetchFeeTypes: '/fees' }),
}));

const draft = { scope: 'Global', target: '', feeType: 'Tuition', term: 'Per day', graceDays: '0', amount: '50' };
const renderModal = (fineDraft = draft) => {
    const onSaveDraft = jest.fn();
    render(<FineModal isOpenFineModal setIsOpenFineModal={jest.fn()} fineDraft={fineDraft} onSaveDraft={onSaveDraft} />);
    return { onSaveDraft };
};

beforeEach(() => {
    axiosInstance.get.mockReset();
    axiosInstance.get.mockImplementation(url => Promise.resolve({ data: url === '/fees'
        ? { status: 200, types: ['Tuition', 'Transport'] }
        : { status: 200, data: ['1', '2'] } }));
});

test('saves a global fine with its fee type without loading a class or level', async () => {
    const { onSaveDraft } = renderModal();
    await waitFor(() => expect(screen.getByRole('button', { name: 'Save Draft' })).toBeEnabled());
    expect(axiosInstance.get).toHaveBeenCalledTimes(1);
    expect(axiosInstance.get).toHaveBeenCalledWith('/fees');
    expect(screen.queryByRole('button', { name: /^Class \*/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Save Draft' }));
    expect(onSaveDraft).toHaveBeenCalledWith(draft);
});

test('clears the old target when switching through global and requires a new class', async () => {
    renderModal({ ...draft, scope: 'Class wise', target: '1' });
    const save = screen.getByRole('button', { name: 'Save Draft' });
    await waitFor(() => expect(save).toBeEnabled());
    fireEvent.click(screen.getByRole('button', { name: /Setup By/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Global', exact: true }));
    expect(save).toBeEnabled();
    fireEvent.click(screen.getByRole('button', { name: /Setup By/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Class wise', exact: true }));
    await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledTimes(3));
    expect(save).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: /^Class \*/ }));
    fireEvent.click(await screen.findByRole('button', { name: '2', exact: true }));
    expect(save).toBeEnabled();
});

test('blocks saving when fee loading fails and recovers after retry', async () => {
    axiosInstance.get.mockRejectedValueOnce(new Error('Offline'));
    renderModal();
    expect(await screen.findByRole('alert')).toHaveTextContent('Unable to load fee types');
    expect(screen.getByRole('button', { name: 'Save Draft' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Save Draft' })).toBeEnabled());
});
