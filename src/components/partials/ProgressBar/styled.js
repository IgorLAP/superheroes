import styled from 'styled-components';

export const ProgressBarArea = styled.div`
    color: ${props=>props.data === "null" ? "#000" : "#FFF"};
    
    .status-bar{
        margin-bottom: 5px;
        width: 250px;
        height: 30px;
        border: 1px solid #000;
        border-radius: 15px;
        background-color: #FFF;
                    
        .progress{
            display: flex;
            align-items: center;
            border-radius: 15px;
            height: 100%;
            width: ${props=>props.data === "null" ? 0 : props.data || 0}%;
            background-color: ${props=>props.data === "null" ? "" : "#3AA920"};
            padding-left: 10px;
            font-size: 14px;
        }
    }
`;