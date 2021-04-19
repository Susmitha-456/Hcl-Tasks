let currentDroppable = null;

dragging.onmousedown = function(event) {

let shiftX = event.clientX - dragging.getBoundingClientRect().left;
let shiftY = event.clientY - dragging.getBoundingClientRect().top;

dragging.style.position = 'absolute';
document.body.append(dragging);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
 dragging.style.left = pageX - shiftX + 'px';
 dragging.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
 moveAt(event.pageX, event.pageY);

 dragging.hidden = true;
 let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
 dragging.hidden = false;

 if (!elemBelow) return;

 let droppableBelow = elemBelow.closest('.droppable');
 if (currentDroppable != droppableBelow) {
   if (currentDroppable) { // null when we were not over a droppable before this event
     leaveDroppable(currentDroppable);
   }
   currentDroppable = droppableBelow;
   if (currentDroppable) { // null if we're not coming over a droppable now
     // (maybe just left the droppable)
     enterDroppable(currentDroppable);
   }
 }
}

document.addEventListener('mousemove', onMouseMove);

dragging.onmouseup = function() {
 document.removeEventListener('mousemove', onMouseMove);
 dragging.onmouseup = null;
};

};

function enterDroppable(elem) {
elem.style.background = 'pink';
}

function leaveDroppable(elem) {
elem.style.background = '';
}

dragging.ondragstart = function() {
return false;
};

