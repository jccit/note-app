import React, { Component } from 'react';

import NoteList from '../components/NoteList';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    async getNotes() {
        const req = await fetch('http://localhost:3000/user/1');
        const user = await req.json();

        this.setState({
            ...this.state,
            notes: user.notes
        });
    }

    render() {
        return <NoteList notes={this.state.notes} />
    }
}

export default Home;