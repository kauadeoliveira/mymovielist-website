import { Container } from "@mui/system";
import styled from "styled-components";

export const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 5px;

    h3{
        width: 100%;
        position: relative;
        top: 10px;
    }
`
export const MyContainer = styled(Container)`
    display: ${({ noDisplay }) => noDisplay ? 'none' : 'block'};
    margin-top: 50px;
`

export const TitlePage = styled.h1`
    margin: 0;
    font-size: 1rem;
`