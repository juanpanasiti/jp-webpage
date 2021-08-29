import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import { MainRouter } from './routers/MainRouter';
import { lightTheme } from './themes/lightTheme';

const WebpageApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <MainRouter />
            </ThemeProvider>
        </Provider>
    );
};
export default WebpageApp;
