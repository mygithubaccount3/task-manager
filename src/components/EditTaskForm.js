import React from 'react';
import { database } from '../firebase';

export function EditTaskForm({ closeForm }) {
    function editTask(e) {
        e.preventDefault();
        database.collection('tasks').doc(e.target.hiddenId.value).update({
            description: e.target.description.value, id: e.target.hiddenId.value, labels: [e.target.growthExperimentLabel.checked, e.target.marketingLabel.checked, e.target.uiDesignLabel.checked], title: e.target.title.value, type: e.target.hiddenType.value
        });
        closeForm();
    }
    return (
        <form onSubmit={editTask} id='editTaskForm'>
            <input type='hidden' id='hiddenId' name="hiddenId" />
            <input type='hidden' id='hiddenType' name="hiddenType" />
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
            <button type='submit'>Edit</button>
        </form>
    )
}
