//templates.mjs

function test() {
    console.log('Template module successfully imported.');
}

/**
 * Swap templates.
 * @param doc Current document.
 * @param elem Element to append new template too.
 * @param appendTag Id/Class of template to swap to.
 */
function swap(doc, elem, appendTag) {
    clear(elem);
    append(doc, elem, appendTag);
}


/**
 * Append a template to element
 * @param elem Element to append.
 * @param doc Current document.
 * @param tag Id/Class to append too.
 */
function append(doc, elem, tag) {
    const clone = doc.importNode(elem.content, true);
    let qSelector = doc.querySelector(tag);
    qSelector.appendChild(clone);
}

function appendElem(doc, elem, tag) {
    let qSelector = doc.querySelector(tag);
    qSelector.appendChild(elem);
}

function get(doc, elem) {
    return doc.importNode(elem.content, true);
}


/**
 * 
 * @param elem Element to remove template from.
 * @param removeElem Element to remove.
 */
function remove(elem, removeElem) {
    elem.removeChild(removeElem);
}

/**
 * Clear all templates.
 * @param elem Element to remove all templates from.
 */
function clear(elem) {
    while(elem.firstChild) {
        remove(elem, elem.firstChild);
    }
}

//Exported modules
export { 
    test,
    append, 
    swap,
    get,
    remove,
    appendElem,
    clear
};
