import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalArea = styled.div`
    background-color: #FFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 550px;
    height: 300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #48ABC2; 
        border-radius: 10px;

        &:hover{
            background: #1288A3; 
        }
    }

    .closeBtn{
        color: #FFF;
        text-align: end;
        cursor: pointer;
        
        span{
            background-color: red;
            font-size: 20px;
            border-radius: 5px;
            width: 200px;
        }
    }
    .modalHeros{
        width: 100%;
        
        a{
            
        }
        .modalImg{
            width: 25%;
            border-radius: 10px;
            transform: scale(0.9);
            transition: all ease .2s;

            &:hover{
                transform: scale(1);
            }
        }
    }
    p{  
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
    }
    form{
        padding: 30px 0;
        display: flex;
        flex-direction: column;

        input{
            margin-bottom: 15px;
        }
    }

@media( max-width: 425px){
    width: 320px;

    .modalImg{
        width: 50% !important;
    }
}
@media( max-width: 320px){
    width: 280px;

    .modalImg{
        width: 50% !important;
    }
}
`;