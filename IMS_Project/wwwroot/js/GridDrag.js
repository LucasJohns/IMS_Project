var dragged = 0;

//Detects whether an item has been picked up
function drag_start(event) {
    if (!hasNumber(event.target.id)) {
        dragged = dragged + 1;
        event.target.id = event.target.id.toString().concat(dragged.toString());
    }
    
    
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('src', event.target.getAttribute('id'));
    retrieveElementId('oof').innerHTML = event.dataTransfer.getData('text');
}

//Detects if the item being dragged has been dropped into a grid cell
function drag_drop(event) {
    event.preventDefault();
    if (event.target.className === 'companyBody') {
        var draggedElement = event.dataTransfer.getData('src');
        event.target.appendChild(retrieveElementId(draggedElement));
        retrieveElementId(draggedElement).style = "";
    }
    if (event.target.innerHTML === '') {
        draggedElement = event.dataTransfer.getData('src');
        event.target.appendChild(retrieveElementId(draggedElement));
        retrieveElementId('oof').innerHTML = retrieveElementId(draggedElement);
        retrieveElementId(draggedElement).style = "margin:0 auto;";
    } else {       
        var src = retrieveElementId(event.dataTransfer.getData('src'));
        var draggedElementParent = src.parentNode;
        var targetElement = event.currentTarget.firstElementChild;

        event.currentTarget.replaceChild(src, targetElement);
        draggedElementParent.appendChild(targetElement);
        retrieveElementId('oof').innerHTML = targetElement;
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function drag_leave(event) {
}
function drag_enter(event) {
    retrieveElementId('oof').innerHTML = "you";
}

function drag_over(event) {
    
}

function retrieveElementId(id) {
    return document.getElementById(id);
}