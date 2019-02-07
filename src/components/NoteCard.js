import { Component } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Ink from 'react-ink';

const Card = styled.article`
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: ${props => props.theme.colors.background};
    position: relative;
    margin-bottom: 10px;

    @media (max-width: 500px) {
        padding: 15px;
    }
`;

class NoteCard extends Component {
    render() {
        return (
            <Card>
                <h2>My Note</h2>
                <p>This is some text for my note</p>
                <Ink />
            </Card>
        )
    }
}

export default NoteCard;