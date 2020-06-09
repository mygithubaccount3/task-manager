import React, { useEffect, useState } from 'react';
import { Masonry } from 'masonic';
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

    const MasonryCard = ({ data: { type, count, svg, tasks, openForm } }) => (
        <div className='tasks'>
            <TaskColumnHeader type={type} count={count} svg={svg} />
            <TaskColumnItems type={type} tasks={tasks} openForm={openForm} />
        </div>
    )

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
                <Masonry items={[{
                    type: 'opened',
                    count: openedCount,
                    svg: faLightbulb,
                    tasks: tasks,
                    openForm: openForm
                },
                {
                    type: 'selected',
                    count: selectedCount,
                    svg: faMapSigns,
                    tasks: tasks,
                    openForm: openForm
                },
                {
                    type: 'running',
                    count: runningCount,
                    svg: faCog,
                    tasks: tasks,
                    openForm: openForm
                },
                {
                    type: 'evaluating',
                    count: evaluatingCount,
                    svg: faQuestionCircle,
                    tasks: tasks,
                    openForm: openForm
                },
                {
                    type: 'live',
                    count: liveCount,
                    svg: faCheckCircle,
                    tasks: tasks,
                    openForm: openForm
                }]} render={MasonryCard} columnWidth={250} />
            </div>
        </div>
    );
}

export default App;
