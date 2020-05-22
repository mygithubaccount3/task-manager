import React from 'react';
import { database } from '../firebase';

export function AddTaskForm({ triggeredForm, closeForm }) {

    function sendTask(e) {
        e.preventDefault();
        let type = '';
        switch (triggeredForm) {
            case 'submitOpenedTask':
                type = 'opened';
                break;
            case 'submitSelectedTask':
                type = 'selected';
                break;
            case 'submitRunningTask':
                type = 'running';
                break;
            case 'submitEvaluatingTask':
                type = 'evaluating';
                break;
            case 'submitLiveTask':
                type = 'live';
                break;
        }
        const random = Math.floor(Math.random() * Math.floor(100000))

        database.collection("tasks").doc(random.toString()).set({
            id: random,
            type: type,
            title: e.target.title.value,
            description: e.target.description.value,
            labels: [
                e.target.uiDesignLabel.checked,
                e.target.marketingLabel.checked,
                e.target.growthExperimentLabel.checked]
        })
            .catch(function(error) {
                alert("Error adding document: ", error);
            });
        closeForm();
    }

    return (
        <form onSubmit={sendTask} id='addTaskForm'>
            <label htmlFor='taskTitle'>
                Title: <input type='text' id='taskTitle' name='title' />
            </label>
            <label htmlFor='taskDescription'>
                Description: <input type='text' id='taskDescription' name='description' />
            </label>
            <label>
                UI Design <input name="uiDesignLabel" type="checkbox" />
            </label>
            <label>
                Marketing <input name="marketingLabel" type="checkbox" />
            </label>
            <label>
                Growth Experiment <input name="growthExperimentLabel" type="checkbox" />
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}
