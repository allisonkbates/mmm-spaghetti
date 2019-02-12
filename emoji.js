window.onload = function () {
    document.addEventListener('click', function(event) {
        //list out all variables 
        var type = event.target.dataset.type;
        var multiple = event.target.dataset.multiple;
        var name = event.target.dataset.name;
        var skin = document.querySelectorAll('div[data-type="skin"');
        var emojiFace = document.querySelector('.emoji-face');
        var eyes = document.querySelector('div[data-type="eyes"');
        var left = eyes.querySelector('.left');
        console.log(left);

        //list out all functions to use
        function removeSelected(element) {
            element.classList.remove('selected');
        }

        function removeClasses(element) {
            element.classList.remove('default','startled', 'heart', 'star', 'fire','squeeze','closed-up', 'closed-down', 'lined');
        }

        //conditional logic
        if (event.target.classList.contains('js-choice')) {
            if (type="skin") {
                skin.forEach(removeSelected);
                emojiFace.classList.add(name);
            }
           if(type="eyes") {
                eyes.forEach(removeSelected);
                left.forEach(removeClasses);
                left.classList.add(name);
            }
            
            event.target.classList.add('selected');
            
            //console.log(event.target.classList.add('selected'));
            //console.log(type + multiple + name);
        }
    });
}