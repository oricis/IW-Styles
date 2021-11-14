/**
 * JS functions
 *
 */

function log() // void
{
    console.log(...arguments);
}
function qi(id) // js node
{
    return document.getElementById(id);
}
function qs(selector) // js node
{
    return document.querySelector(selector);
}
function qsa(selector) // js nodes
{
    return document.querySelectorAll(selector);
}
