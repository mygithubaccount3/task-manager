import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function TaskColumnHeader({ type, count, svg }) {
    return (
        <div className={`tasks__header tasks__header--${type}`}>
            <div>
                <FontAwesomeIcon icon={svg} color='white' style={{ marginRight: '10px' }} />
                <h1 className='tasks__title'>{type}</h1>
            </div>
            <span className='tasks__count'>{count}</span>
        </div>
    )
}
