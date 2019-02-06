import { Component } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 12px 20px;
    background: ${props => props.theme.colors.background};
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                Hey
            </HeaderContainer>
        );
    }
}

export default Header;