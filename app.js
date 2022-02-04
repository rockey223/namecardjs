const mode = document.getElementById('btn');

const moon = document.getElementById('mode');
mode.addEventListener('click',change);
function change(){
    
        moon.classList.toggle('fa-sun');
        all();
    
    
}

function all(){
    const dark = document.querySelector('.sec');
    dark.classList.toggle('dark');
}