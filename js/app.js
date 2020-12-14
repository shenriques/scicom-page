// CAROUSEL

// enable targetting of slider content 
const slider = document.querySelector('.slider');
// enable targetting of carousel navigation arrows
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
// enable targetting of carousel page circles
const circleParent = document.querySelector('.controls ul');

var contentIndex = 0;

// scrolling with carousel indicators
document.querySelectorAll('.controls li').forEach(function(circle, index) {
    circle.addEventListener('click', function() {
        // keep track of page index changes from the arrows
        contentIndex = index;
        // colour only the circle of the page in view
        document.querySelector('.controls .selected').classList.remove('selected');
        circle.classList.add('selected');
        slider.style.transform = 'translate(' + (contentIndex) * -25 + '%)';
    });
});

// scrolling with arrows 
rightArrow.addEventListener('click', function() {
    // scroll right unless the content slider you're on is 3 (end of slider)
    contentIndex = (contentIndex < 3) ? contentIndex + 1 : 3;
    // remove the circle colouring the previously viewed page
    document.querySelector('.controls .selected').classList.remove('selected');
    // add circle colouring to new current page
    circleParent.children[contentIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (contentIndex) * -25 + '%)';
});

leftArrow.addEventListener('click', function() {
    // scroll left unless the content slider you're on is 0 (beginning of slider)
    contentIndex = (contentIndex > 0) ? contentIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    circleParent.children[contentIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (contentIndex) * -25 + '%)';
});