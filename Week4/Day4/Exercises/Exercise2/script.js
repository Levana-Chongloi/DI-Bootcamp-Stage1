    //Do not display the li that contains the text node “John”
    document.querySelector('li:first-child').style.display = 'none';

    //Alert if the background color is "light blue"
    const divBackgroundColor = window.getComputedStyle(document.querySelector('div')).backgroundColor;
    if (divBackgroundColor === 'rgb(173, 216, 230)') {
        const users = document.querySelectorAll('li');
        alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
    }