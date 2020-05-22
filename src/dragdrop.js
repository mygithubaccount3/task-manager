import {database} from './firebase';

export function allowDrop(e) {
    e.preventDefault();
}
export function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
}
export function dropIt(e) {
    e.preventDefault();
    let sourceId = e.dataTransfer.getData("text/plain");
    let sourceIdEl = document.getElementById(sourceId);
    let sourceIdParentEl = sourceIdEl.parentElement;
    let targetEl = document.getElementById(e.target.id)
    let targetParentEl = targetEl.parentElement;

    if (targetParentEl.id !== sourceIdParentEl.id) {
        if (targetEl.className === sourceIdEl.className) {
            database.collection('tasks').doc(sourceId).update({
                type: targetEl.getAttribute('id')
            });

        } else {
            database.collection('tasks').doc(sourceId).update({
                type: targetEl.getAttribute('id')
            });
        }
    } else {
        let holder = targetEl;
        let holderText = holder.textContent;
        targetEl.textContent = sourceIdEl.textContent;
        sourceIdEl.textContent = holderText;
        holderText = '';
    }
}
