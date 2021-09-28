import styled from 'styled-components';

export const SearchArea = styled.div`
    padding: 20px;
    display: flex;    
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 200px);

    form{

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
    h1{
        margin: 20px 0;
    }
    .results{
        display: flex;
        justify-content: center;
        align-items: center;

        .loading{
            width: 50px;
            height: auto;
        }
        .resultItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            height: 200px;
            margin-right: 10px;
            padding: 10px;
            border: 1px solid #DDD;

            img{
                width: 90%;
                height: 90%;
            }
        }
    }
`;