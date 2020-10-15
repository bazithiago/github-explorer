import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: #3a3a3a;
    max-width: 470px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    height: 72px;

    input {
        flex: 1;
        border: 0;
        border-radius: 5px 0 0 5px;
        background: #fff;
        padding-left: 30px;
        font-size: 20px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        border: 0;
        border-radius: 0 5px 5px 0;
        background: #04d361;
        color: #fff;
        font-weight: 700;
        transition: all 0.2s;

        &:hover {
            background: ${shade(0.2, '#04D361')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    max-width: 700px;
    margin-top: 80px;

    a {
        background-color: #fff;
        padding: 16px;
        transition: all 0.2s;
        border-radius: 5px;
        width: 100%;
        display: flex;
        align-items: center;

        &:hover {
            transform: translateX(5px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        svg {
            margin-left: auto;
            color: #a8a8b3;
            size: 20px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-weight: 700;
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 16px;
                color: #a8a8b3;
            }
        }
    }
`;
