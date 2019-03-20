import { Component } from 'react';
import { jsx } from '@emotion/core';
import Container from './Container';
import NoteCard from './NoteCard';

class NoteList extends Component {
    renderCards() {
        const output = [];

        let i = 0;
        for (const note of this.props.notes) {
            output.push(<NoteCard key={i} note={note} />);
            i++;
        }

        return output;
    }

    render() {
        if (this.props.notes.length > 0) {
            return (
                <Container>
                    { this.renderCards() }
                </Container>
            );
        }

        return null;
    }
}

export default NoteList;