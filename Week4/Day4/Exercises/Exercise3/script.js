    // Retrieve the div and console.log it
    var containerDiv = document.getElementById('container');
    console.log(containerDiv);

    // Change the name “Pete” to “Richard”
    document.getElementById('pete').innerHTML = 'Richard';

    // Delete the <li> that contains the text node “Sarah”
    var sarahElement = document.querySelector('.list:nth-child(2) li:nth-child(2)');
    sarahElement.parentNode.removeChild(sarahElement);

    // Change each first name of the two <ul>'s to your name using a loop
    var ulElements = document.querySelectorAll('.list');
    for (var i = 0; i < ulElements.length; i++) {
        ulElements[i].getElementsByTagName('li')[0].innerHTML = 'Your Name';
    }

    // Add a class called student_list to both of the <ul>'s
    for (var i = 0; i < ulElements.length; i++) {
        ulElements[i].classList.add('student_list');
    }

    // Add the classes university and attendance to the first <ul>
    ulElements[0].classList.add('university', 'attendance');
