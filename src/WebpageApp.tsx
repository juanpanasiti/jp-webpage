import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MainRouter } from './routers/MainRouter';

const WebpageApp = () => {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    );
};
export default WebpageApp;
