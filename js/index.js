const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const openBusBooker=()=>{
    window.open("https://codesandbox.io/embed/busbooker-backend-q2qpt?fontsize=14&hidenavigation=1&theme=dark");
   
    window.open("https://codesandbox.io/embed/busbooker-github-25o83?fontsize=14&hidenavigation=1&theme=dark");
}

const openLibrary=()=>{
    window.open("https://codesandbox.io/embed/react-libraryapp-github-mdwxj?fontsize=14&hidenavigation=1&theme=dark");
    window.open('https://codesandbox.io/embed/libraryapp-expressjs-github-jh783?fontsize=14&hidenavigation=1&theme=dark');

}