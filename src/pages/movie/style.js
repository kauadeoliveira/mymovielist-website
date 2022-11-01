import styled from "styled-components";

export const Details = styled.section`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;


`


export const Poster = styled.div`
    height: 270px;
    width: 180px;
    background-color: black;
    background-image: url(${({ poster }) => poster});
    background-size: cover;
    background-repeat: no-repeat;
`


export const Description = styled.div`
    width: 70%;
    height: 225px;
    padding: 10px;

    .boxTitle{
        h2{
            margin: 0;
        }
        .about{
            position: relative;
            bottom: 5px;
            font-size: .75rem;
            span:not(:first-child)::before{
                content: '•';
                margin: 0 5px;
            }

            .rating{
                display: inline-flex;
                font-size: .9rem;
                height: 20px;
                line-height: 20px;
                align-items: center;
            }
        }    
    }

    .genres{
        display: flex;
        font-size: .75rem;
        a{
            padding: 1px 3px;
            border-radius: 5px;
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
        }
    }

    .overview{
        h3, p{
            margin: 0;
        }
        h3{
            font-size: 1rem;
        }
        p{
            font-size: .75rem;
        }
    }
`