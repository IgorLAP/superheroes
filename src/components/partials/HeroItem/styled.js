import styled from 'styled-components';

export const HeroItemArea = styled.div`
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
`;