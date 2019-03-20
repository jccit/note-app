import React from "react";
import { hot } from "react-hot-loader";
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route } from 'react-router-dom';

import ResetStyles from './styles/reset.style';

import Header from './components/Header';

import Home from './pages/Home';
import Note from './pages/Note';

const themes = {
    light: {
        colors: {
            body: '#f5f5f5',
            background: '#fff',
            text: '#212121'
        }
    },
    dark: {
        colors: {
            body: '#000',
            background: '#212121',
            text: '#fafafa'
        }
    }
}

class App extends React.Component {
    constructor() {
        super();

        const selectedTheme = localStorage.getItem('theme') || 'light';

        this.state = {
            theme: themes[selectedTheme],
            selectedTheme
        };
    }

    switchTheme() {
        const isLight = this.state.selectedTheme == 'light';
        const newTheme = isLight ? 'dark' : 'light';

        this.setState({
            ...this.state,
            selectedTheme: newTheme,
            theme: themes[newTheme]
        });

        localStorage.setItem('theme', newTheme);
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <Global styles={css(ResetStyles(this.state.theme))} />
                <Header title="Notes" changeTheme={() => this.switchTheme()} />
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/note/:id" component={Note} />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default hot(module)(App);