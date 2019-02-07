import { css } from '@emotion/core';

export default function(theme) {
    return css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }

        body {
            padding-top: 60px;
            background-color: ${theme.colors.body};
            color: ${theme.colors.text};
        }

        h1,h2,h3,h4,h5,h6 {
            font-size: 16px;
            line-height: 1;
            margin: 0;
            padding: 0;
        }
    `;
}