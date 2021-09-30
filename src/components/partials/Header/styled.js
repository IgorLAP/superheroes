import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #48ABC2;

    header{
        height: 100px;
        max-width: 1000px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .leftSide {
            height: 70px;

            &:hover img{
                height: 75px;
                transform: translateY(-3px);
            }

            a, img{
                height: inherit;
            }
        }
        .rightSide{
            font-size: 20px;
            color: #F4EC74;
            font-weight: 700;
            text-transform: uppercase;

            span{
                text-shadow: 1px 1px 1px black;
            }
        }
    }
`;