import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch, faMapSigns, faLightbulb, faCog, faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { AddTaskForm } from './components/AddTaskForm';
import { EditTaskForm } from './components/EditTaskForm';
import { TaskColumnHeader } from './components/TaskColumnHeader';
import { TaskColumnItems } from './components/TaskColumnItems';
import './App.scss';

function App() {
    let [tasks, setTasks] = useState([]);
    let [triggeredForm, setTriggeredForm] = useState('')

    let openedCount = 0, selectedCount = 0, runningCount = 0, evaluatingCount = 0, liveCount = 0;

    useEffect(() => {
        database.collection("tasks")
            .onSnapshot(function(querySnapshot) {
                let tasks = [];

                querySnapshot.forEach(function(doc) {
                    tasks.push(doc.data());
                });

                setTasks(tasks)
            });
    }, []);

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].type === 'opened' && openedCount++;
        tasks[i].type === 'selected' && selectedCount++;
        tasks[i].type === 'running' && runningCount++;
        tasks[i].type === 'evaluating' && evaluatingCount++;
        tasks[i].type === 'live' && liveCount++;
    }

    function openForm(e) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('addTaskForm').style.display = 'flex';
        console.log(e.currentTarget.parentElement.classList)
        if (e.currentTarget.parentElement.classList.contains('menu')) {
            document.getElementById('addTaskForm').typeDropdown.style.display = 'block';
            setTriggeredForm(e.currentTarget.parentElement.className)
        } else {
            document.getElementById('addTaskForm').typeDropdown.style.display = 'none';
            setTriggeredForm(e.currentTarget.id)
        }
    }

    function closeForm() {
        const form = document.getElementById('addTaskForm');
        const editForm = document.getElementById('editTaskForm');
        form.reset();
        editForm.reset();
        form.style.display = 'none';
        editForm.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    function search() {
        database.collection("tasks")
            .onSnapshot(function(querySnapshot) {
                let tasks = [];
                if (document.getElementById('searchInput').value.trim() !== "") {
                    querySnapshot.forEach((el) => {
                        if (el.data().title.includes(document.getElementById('searchInput').value.trim()) ||
                            el.data().description.includes(document.getElementById('searchInput').value.trim()) ||
                            el.data().labels.includes(document.getElementById('searchInput').value.trim())) {
                            tasks.push(el.data())
                        }
                    })
                } else {
                    querySnapshot.forEach(function(doc) {
                        tasks.push(doc.data());
                    });
                }
                setTasks(tasks)
            });
    }

    return (
        <div className="App">
            <div id='overlay' onClick={closeForm}></div>
            <AddTaskForm triggeredForm={triggeredForm} closeForm={closeForm} />
            <EditTaskForm closeForm={closeForm} />
            <div className='menu'>
                <FontAwesomeIcon icon={faPlusCircle} color='#00b8ff' style={{ marginRight: '10px' }} onClick={openForm} />
                <FontAwesomeIcon icon={faSearch} color='#00b8ff' />
                <input type='text' id='searchInput' placeholder='Search...' onChange={search} />
            </div>
            <div className='taskTypes'>
                <div className='tasks'>
                    <TaskColumnHeader type='opened' count={openedCount} svg={faLightbulb} />
                    <TaskColumnItems type='opened' tasks={tasks} openForm={openForm} />
                </div>
                <div className='tasks'>
                    <TaskColumnHeader type='selected' count={selectedCount} svg={faMapSigns} />
                    <TaskColumnItems type='selected' tasks={tasks} openForm={openForm} />
                </div>
                <div className='tasks'>
                    <TaskColumnHeader type='running' count={runningCount} svg={faCog} />
                    <TaskColumnItems type='running' tasks={tasks} openForm={openForm} />
                </div>
                <div className='tasks'>
                    <TaskColumnHeader type='evaluating' count={evaluatingCount} svg={faQuestionCircle} />
                    <TaskColumnItems type='evaluating' tasks={tasks} openForm={openForm} />
                </div>
                <div className='tasks'>
                    <TaskColumnHeader type='live' count={liveCount} svg={faCheckCircle} />
                    <TaskColumnItems type='live' tasks={tasks} openForm={openForm} />
                </div>
            </div>
        </div>
    );
}

export default App;
