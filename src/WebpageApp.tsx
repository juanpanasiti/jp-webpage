import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

import { store } from './redux/store';
import { MainRouter } from './routers/MainRouter';
import { lightTheme } from './themes/lightTheme';

const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`
    }
});

const WebpageApp = () => {
    return (
        <ClientContext.Provider value={client}>
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <MainRouter />
                </ThemeProvider>
            </Provider>
        </ClientContext.Provider>
    );
};
export default WebpageApp;
