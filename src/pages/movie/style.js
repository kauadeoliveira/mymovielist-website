import styled from "styled-components";

export const Details = styled.section`
    display: flex;
    gap: 8px;
    width: 100%;
    padding: 10px;
    justify-content: space-between;


`


export const Poster = styled.div`
    height: 250px;
    width: 160px;
    background-color: black;
    background-image: url(${({ poster }) => poster});
    background-size: cover;
    background-repeat: no-repeat;
`


export const Description = styled.div`
    width: 70%;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .boxTitle{
        h2{
            font-size: 1rem;
            margin: 0;
        }
        .about{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            font-size: .6rem;
            span:not(:first-child)::before{
                content: '•';
                margin: 0 3px;
            }

            .rating{
                display: inline-flex;
                height: 20px;
                line-height: 20px;
                align-items: center;
            }
        }    
    }
    .overview{
        h3, p{
            margin: 0;
        }
        h3{
            font-size: .85rem;
        }
        p{
            font-size: .7rem;
        }
    }

    .credits{
        span{
            font-weight: bold;
            margin-right: 3px;
        }
        ul{
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            font-size: .6rem;

            li{
                display: inline-block;
            }

            li:not(:first-of-type)::before{
                content: ',';
                margin-right: 3px;
            }
        }

        .genres{
            a{
                color: inherit;
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }
`
export const Cast = styled.section`
    width: 100%;

    .swiper{
        height: 100%;
        padding: 10px;
    }
`