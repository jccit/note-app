import { Component } from 'react';
import { jsx } from '@emotion/core';
import Container from './Container';
import NoteCard from './NoteCard';

class NoteList extends Component {
    renderCards() {
        const output = [];

        for (let i = 0; i < 20; i++) {
            output.push(<NoteCard key={i} />);
        }

        return output;
    }

    render() {
        return (
            <Container>
                { this.renderCards() }
            </Container>
        )
    }
}

export default NoteList;