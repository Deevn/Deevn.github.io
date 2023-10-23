const innerCursor = document.querySelector('.inner-cursor')

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    innerCursor.style.left = e.clientX + 'px';
    innerCursor.style.top = e.clientY + 'px';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
