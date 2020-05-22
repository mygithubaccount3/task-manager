export function sendTask(e) {
        e.preventDefault();
        let type = '';
         switch(triggeredForm) {
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
        database.ref(`tasks/${random}`).set({id: random, type: type, text: e.target.name.value,
                                             labels: [
                                                e.target.uiDesignLabel.checked,
                                                e.target.marketingLabel.checked,
                                                e.target.growthExperimentLabel.checked]});
    }
    
export function openForm(e) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('addTaskForm').style.display = 'flex';
    setTriggeredForm(e.currentTarget.id)
}

export function closeForm() {
    document.getElementsByTagName('form')[0].style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
