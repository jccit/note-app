import React from "react";
import { hot } from "react-hot-loader";
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import ResetStyles from './styles/reset.style';

import Header from './components/Header';
import NoteList from './components/NoteList';

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
            selectedTheme,
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
                <Global styles={ResetStyles(this.state.theme)} />
                <Header title="Notes" changeTheme={() => this.switchTheme()} />
                <NoteList />
            </ThemeProvider>
        )
    }
}

export default hot(module)(App);