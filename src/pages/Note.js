import React, { Component } from 'react';
import Markdown from 'react-markdown';
import styled from '@emotion/styled';

const Container = styled.article`
    padding: 20px;
    max-width: 750px;
    margin: 20px auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: ${props => props.theme.colors.background};
    border-radius: 4px;

    @media (max-width: 500px) {
        padding: 15px;
    }
`;

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: null
        }
    }

    componentDidMount() {
        this.getNote(this.props.match.params.id);
    }

    render() {
        if (this.state.note) {
            return (
                <Container>
                    <h1>{ this.state.note.title }</h1>
                    <Markdown source={this.state.note.text} />
                </Container>
            );
        }

        return null;
    }

    async getNote(id) {
        const req = await fetch(`http://localhost:3000/note/${id}`);
        const note = await req.json();

        this.setState({
            ...this.state,
            note
        });
    }
}

export default Note;