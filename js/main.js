let catImage = document.querySelector('#clickCat'),
clickCount = 0,
clicks = document.querySelector('#clicks');
catImage.addEventListener('click', () => {
    clickCount++;
    clicks.innerHTML = `You clicked the cat image ${clickCount} time${clickCount === 1 ? '' : 's'}`;
});