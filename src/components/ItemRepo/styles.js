import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    margin-bottom: 20px;
    h3 {
        font-size: 32px;
        color: #fafafa;
        text-transform: uppercase;
    }

    p {
        font-size: 20px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a.remover {
        color: #FF0000;
        font-size: 20px;
        text-decoration: none;
    }

    a.visualizar {
        color: #FFF;
        font-size: 20px;
        text-decoration: none;
    }

    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-right: 20px;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`;