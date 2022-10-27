import styled from "styled-components";

export const ImageCard = styled.div`
    background-color: black;
    background-image: url(${({ bgImage }) => bgImage});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const TitleCard = styled.p`
    font-weight: bold;
    font-size: .7rem;
    margin: 5px 0;
    word-wrap: break-word;
    color: #fff;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-flow: column-wrap;
    width: 100px;
    height: 150px;

    a{
        width: inherit;
        height: inherit;
    }
`
