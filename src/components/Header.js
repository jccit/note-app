import { Component } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 14px 25px;
    height: 52px;
    background: ${props => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    z-index: 100;
`;

const Title = styled.h1`
    font-size: 24px;
`;

const ThemeButton = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Title>{ this.props.title }</Title>
                <ThemeButton onClick={this.props.changeTheme}>💡</ThemeButton>
            </HeaderContainer>
        );
    }
}

export default Header;