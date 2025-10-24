function toggle () {
    document.body.classList.toggle("light");
}

document.getElementById('mode-btn').addEventListener('click', function() {
    if (document.getElementById('mode-btn').innerHTML === 'Light Mode'){
        document.getElementById('mode-btn').innerHTML = 'Dark Mode';
    }
    else{
        document.getElementById('mode-btn').innerHTML = 'Light Mode';
    }
});

// Prevent right click
// document.addEventListener('contextmenu', function(e){
//     e.preventDefault()
// });


// Text animation

// Details 
// Select ALL grid items
// const boxes = document.querySelectorAll('.about-grid-item');

// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 entry.target.classList.add('animated');
//             } else {
//                 entry.target.classList.remove('animated');
//             }
//         });
//     },
//     {
//         threshold: 0.5
//     }
// );

// // Observe EACH box
// boxes.forEach(box => {
//     observer.observe(box);
// });

// Text animation
// Complex
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animated', entry.isIntersecting);
        });
    },
    { threshold: 0.5 }
); 


document.querySelectorAll('.about-grid-item').forEach(box => {
    observer.observe(box);
});


document.querySelectorAll('.js-page-1-left-texts').forEach(box => {
    observer.observe(box);
});

document.querySelectorAll('.page-1-left-icons').forEach(box => {
    observer.observe(box);
});