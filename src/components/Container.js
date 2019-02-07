import { Component } from 'react';
import { jsx, css } from '@emotion/core';

class Container extends Component {
    render() {
        return (
            <div css={css`
                padding: 0 20px;

                @media (max-width: 500px) {
                    padding: 0 10px;
                }
            `}>
                { this.props.children }
            </div>
        )
    }
}

export default Container;