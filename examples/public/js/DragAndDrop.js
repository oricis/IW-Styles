
/**
 * Global vars
 *
 */

var dragSrcEl = null;


/**
 * Function declarations
 *
 */

function handleDragOver(ev)
{
    if (ev.preventDefault) {
        ev.preventDefault(); // Necessary to allow us to drop
    }

    ev.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragStart(ev)
{
    // Target (this) element is the source nodevent.
    dragSrcEl = this;

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/html', this.innerHTML);

    this.classList.add('moving');
}

function handleDrop(ev)
{
    if (ev.preventDefault) {
        ev.preventDefault(); // Avoid that firefox open images on the window
    }
    if (ev.stopPropagation) {
        ev.stopPropagation(); // Stops some browsers' redirection
    }

    // Don't do anything if dropping the same space we're dragging
    if (dragSrcEl != this) {
        dragSrcEl.classList.remove('moving');

        // Set the source item's HTML to the HTML of the item dropped on
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = ev.dataTransfer.getData('text/html');
    }

    return false;
}
