import React from 'react';
import {ProgressBarArea} from './styled';

const ProgressBar = (props)=> {
    return (
        <ProgressBarArea className="progress-bar" data={props.data}>
            <div className="status-bar">
                <div className="progress">{props.data === "null" ? "Indisponível" : props.data}</div>
            </div>
        </ProgressBarArea>
    );
}

export default ProgressBar;