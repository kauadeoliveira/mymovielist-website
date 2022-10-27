import styled from "styled-components";

export const ImageCard = styled.div`
    background-color: black;
    background-image: url(${({ bgImage }) => bgImage});
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    height: 225px;
    border-radius: 10px;
`

export const TitleCard = styled.p`
    width: 150px;
    font-weight: bold;
    padding: 5px;
    margin: 0;
    word-wrap: break-word;
    color: #fff;
`
