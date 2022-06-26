import styled from 'styled-components';

export const SearchArea = styled.div`
    padding: 20px;
    display: flex;    
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    h1{
        margin: 20px 0;
    }
    .results{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .loading{
            width: 50px;
            height: auto;
        }
        .resultItem{
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            height: 280px;
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #DDD;
            transition: all ease .2s;

            &:hover{
                color: #FFF;
                background-color: #48ABC2;
            }
            p{
                font-size: 20px;
                padding: 5px 0;
            }
            img{
                width: 90%;
                height: 85%;
            }
        }
    }

@media (max-width: 425px){
    form{
        padding: 20px 0;
        
        label{
            width: 300px;

            input{
                margin: 0;
            }
        }
        button{
            display: block;
            width: 100%;
            margin-top: 10px;
            padding: 0;
        }
    }

    a{
        display: flex;
        width: 50%;
        
        .resultItem{
            
        }
    }
}
@media (max-width: 320px){
    

    a{
        display: flex;
        justify-content: center;
        width: 100%;
        
        .resultItem{
            
        }
    }
}
`;