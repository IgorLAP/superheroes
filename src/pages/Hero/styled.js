import styled from 'styled-components';

export const HeroArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .loading{
        padding: 20px 0;
        width: 50px;
        height: auto;
    }
    .hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
        padding: 20px 40px;
        background-color: #DDD;
        border-radius: 5px;
        box-shadow: 1px 1px 10px 5px #000;
        transition: all ease .3s;
        
        &:hover{
            box-shadow: 1px 1px 10px 10px #48ABC2;
            transform: translate(-5px,-5px);
        }
        span{
            display: inline-block;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 700;
            margin: 10px 0;
        }
        .heroName{
            text-align: center;
            padding-top: 10px;
            padding-bottom: 20px;
        }
        .heroInfos{
            display: flex;
            
        }

        .leftSide{
            max-width: 350px;

            .powerStats{
                
                p{
                    font-size: 15px;
                    font-style: italic;
                    margin-bottom: 3px;
                }

            }
            .biography{
                margin: 10px 0;
            }
        }
        .rightSide{
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 70px;
            align-items: flex-start;


            img{
                width: 250px;
                height: 370px;
                border: 1px solid #000;
                border-radius: 25px;
                margin: 5px 0;
            }
        }
    }
    .bottomInfos{
        display: flex;
        text-align: center;
        margin-top: 20px;
        max-width: 400px;
        
        .moreInfos{
            margin: 20px 0;
        }
    }

@media (max-width: 768px){
    .hero{
        margin: 20px;
    }
}
@media (max-width: 425px) {
    .hero{
        min-width: 300px;
        max-width: 425px;
        
        .heroInfos{
            flex-direction: column;
            justify-content: center;

            .leftSide{

                img{
                    width: 100% !important;
                    height: auto !important;
                    border: 1px solid #000;
                    border-radius: 25px;
                }
                .powerStats{
                width: 100% !important;
                height: auto !important;

                }
            }

            .rightSide{
                flex: 0;
                margin: 0;

            }
        } 
    }
}
`;