// CAROUSEL

// enable targetting of slider content 
const slider = document.querySelector('.slider');
// enable targetting of carousel navigation arrows
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
// enable targetting of carousel page circles
const circleParent = document.querySelector('.controls ul');

var contentIndex = 0;

function setContentIdx() {
    // if circle already selected, remove transparent class and go back to black
    document.querySelector('.controls .selected').classList.remove('selected');
    // go to selected page
    slider.style.transform = 'translate(' + (contentIndex) * -25 + '%)';
}

// scrolling with carousel indicators
document.querySelectorAll('.controls li').forEach(function(circle, index) {
    circle.addEventListener('click', function() {
        // keep track of page index changes from the arrows
        contentIndex = index;
        setContentIdx();
        circle.classList.add('selected');
    });
});

// scrolling with arrows 
rightArrow.addEventListener('click', function() {
    // scroll right unless the content slider you're on is 3 (end of slider)
    contentIndex = (contentIndex < 3) ? contentIndex + 1 : 3;
    setContentIdx();
    // add circle colouring to new current page
    circleParent.children[contentIndex].classList.add('selected');
});

leftArrow.addEventListener('click', function() {
    // scroll left unless the content slider you're on is 0 (beginning of slider)
    contentIndex = (contentIndex > 0) ? contentIndex - 1 : 0;
    setContentIdx();
    circleParent.children[contentIndex].classList.add('selected');
});