import { Component } from 'react';
import styled from '@emotion/styled';
import Ink from 'react-ink';
import { Link } from 'react-router-dom';

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
                <Link to={`/note/${this.props.note.id}`}>
                    <h2>{ this.props.note.title }</h2>
                    <p>{ this.props.note.text }</p>
                    <Ink />
                </Link>
            </Card>
        )
    }
}

export default NoteCard;