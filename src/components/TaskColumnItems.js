import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { dropIt, allowDrop, dragStart } from '../dragdrop';

const labels = {
    "Growth Experiment": <span className='tasks__label tasks__label--red'>Growth Experiment</span>,
    "Marketing": <span className='tasks__label tasks__label--purple'>Marketing</span>,
    "UI Design": <span className='tasks__label tasks__label--green'>UI Design</span>
}

function openEditTaskForm(id, type, title, description, uiDesignLabel, marketingLabel, growthExperimentLabel) {
    return function() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('editTaskForm').style.display = 'flex';
        document.getElementById('editTaskForm').hiddenId.value = id;
        document.getElementById('editTaskForm').hiddenType.value = type;
        document.getElementById('editTaskForm').title.value = title;
        document.getElementById('editTaskForm').description.value = description;
        document.getElementById('editTaskForm').growthExperimentLabel.checked = growthExperimentLabel ? 'checked' : '';
        document.getElementById('editTaskForm').marketingLabel.checked = marketingLabel ? 'checked' : '';
        document.getElementById('editTaskForm').uiDesignLabel.checked = uiDesignLabel ? 'checked' : '';
    }

}

export function TaskColumnItems({ type, tasks, openForm }) {
    let a = tasks.map(el => {
        if (el.type === type) {
            return <li key={el.id}
                id={el.id}
                draggable="true"
                onDragStart={dragStart}>
                <button onClick={openEditTaskForm(el.id, el.type, el.title, el.description, el.labels[0], el.labels[1], el.labels[2])}>
                    <FontAwesomeIcon icon={faCog} color='black' />
                </button>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                {<div className='tasks__labels'>{el.labels.map((el) => el && labels[el])}</div>}
            </li>
        }
    })

    return (
        <ul className={`tasks__items tasks__items--${type}`} id={type} onDrop={dropIt} onDragOver={allowDrop}>
            {a}
            <li>
                <button onClick={openForm}
                    id={`submit${type.charAt(0).toUpperCase() + type.slice(1)}Task`}>
                    <span /><span />
                </button>
            </li>
        </ul>
    )
}
