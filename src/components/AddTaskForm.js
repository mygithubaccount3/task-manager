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
                e.target.uiDesignLabel.checked ? "UI Design" : "",
                e.target.marketingLabel.checked ? "Marketing" : "",
                e.target.growthExperimentLabel.checked ? "Growth Experiment" : ""]
        })
            .catch(function(error) {
                alert("Error adding document: ", error);
            });
        closeForm();
    }

    return (
        <form onSubmit={sendTask} id='addTaskForm'>
            <label>
                Title: <input type='text' name='title' />
            </label>
            <label>
                Description: <input type='text' name='description' />
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
