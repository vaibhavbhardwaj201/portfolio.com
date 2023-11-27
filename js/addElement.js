function addElement() {
    // get the class to add span element
    var element = document.querySelectorAll('.addElement');

    // loop through the element
    element.forEach(function (element) {
        // create span element
        var spanParent = document.createElement('span');
        var spanChild = document.createElement('span');

        // add class to span element
        spanParent.classList.add('line-parent');
        spanChild.classList.add('line-child');
        
        console.log(element.innerHTML);

        // add text to span element
        spanChild.innerHTML = element.innerHTML;

        spanParent.appendChild(spanChild);

        // append span element to the element
        element.innerHTML = '';
        element.appendChild(spanParent);
    });
}

addElement();