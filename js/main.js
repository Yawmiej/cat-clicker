let catImages = document.querySelectorAll('.clickCat'),
clickCount1 = 0, clickCount2 = 0;
clicks = document.querySelectorAll('.clicks');
for (let catImage of catImages ) {
    catImage.addEventListener('click', (evt) => {
        if(evt.target === catImages[0]){
            clickCount1++;
            clicks[0].innerHTML = `You clicked the Jerry ${clickCount1} time${clickCount1 === 1 ? '' : 's'}`;
        } else if(evt.target === catImages[1]) {
            clickCount2++;
            clicks[1].innerHTML = `You clicked the Teddy ${clickCount2} time${clickCount2 === 1 ? '' : 's'}`;
        }
        console.log(evt.target)
    });
}