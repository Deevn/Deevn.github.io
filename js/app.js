const innerCursor = document.querySelector('.inner-cursor')

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    innerCursor.style.left = e.clientX + 'px';
    innerCursor.style.top = e.clientY + 'px';
}
