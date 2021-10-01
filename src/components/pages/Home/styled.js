import styled from 'styled-components';

export const HomeArea = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    form{
        padding: 20px 0;

        input, button{
            outline: 0;
            margin-right: 10px;
            height: 30px;
            border-radius: 5px;
            transition: all ease .3s;
        }
        input{
            border-color: #DDD;
            width: 250px;
            padding: 10px;
            
            &:focus{
                border-color: #000;
            }
        }
        button{
            border: 0;
            cursor: pointer;
            background-color: #48ABC2;
            padding: 0px 10px;
            color: #FFF;

            &:hover{
                background-color: #1288A3;
            }
        }
    }
    .groups{
        display: flex;
        margin-top: 20px;
        margin-bottom: 40px;
        
        button{
            outline: 0;
            border: 0;
            background: transparent;
        }
        .createGroup, .viewGroups{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 10px;
            color: #FFF;
            width: 200px;
            height: 50px;
            background-color: #48ABC2;
            margin-right: 100px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 400;

            &:hover{
                background-color: #1288A3;
            }
        }
        img{
            width: 35px;
            margin-right: 10px;
            
        }
    }
    .loading{
        padding: 20px 0;
        width: 50px;
        height: auto;
    }
    .allHeroes{
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        .itemHero{
            margin-right: 30px;
        }

        
        .resultItem{
            color: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &:hover{
                color: #FFF;
            }
            
            .heroImg{
                width: 75%;
                height: 10%;
            }
        }
    }
    .toTop{
        cursor: pointer;
        position: fixed;
        bottom: -20%;
        right: 4%;
        width: 30px;
        height: 30px;
        background-color: #48abc2;
        text-transform: uppercase;
        border-radius: 5px;
        transition: all ease .4s;

        &.active{
            bottom: 10%;
        }

        img{
            width: 30px;
        }
    }
`;