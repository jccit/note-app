import React from "react";
import { hot } from "react-hot-loader";
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import ResetStyles from './styles/reset.style';

import Header from './components/Header';

const theme = {
    colors: {
        background: 'white'
    }
}

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Global styles={ResetStyles} />
                <Header />
            </ThemeProvider>
        )
    }
}

export default hot(module)(App);