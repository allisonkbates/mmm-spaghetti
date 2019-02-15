window.onload = function () {
    document.addEventListener('click', function(event) {
        //list out all variables 
        var type = event.target.dataset.type;
        var multiple = event.target.dataset.multiple;
        var name = event.target.dataset.name;
        var skin = document.querySelectorAll('div[data-type="skin"]');
        var emojiFace = document.querySelector('.emoji-face');
        var eyes = document.querySelectorAll('div[data-type="eyes"]');
        var left = document.querySelector('.left');
        var right = document.querySelector('.right');
        var mouth = document.querySelectorAll('div[data-type="mouth"]');
        var emojiMouth = document.querySelector('.emoji-mouth');

        //list out all functions to use
        function removeSelected(element) {
            element.classList.remove('selected');
        }

        //conditional logic
        if (event.target.classList.contains('js-choice')) {
            if (type === "skin") {
                skin.forEach(removeSelected);
                emojiFace.classList.remove('skin-1', 'skin-2', 'skin-3', 'skin-4', 'skin-5', 'skin-6');
                emojiFace.classList.add(name);
            }
            
            if(type === "eyes") {
                eyes.forEach(removeSelected);
                right.classList.remove('default','startled', 'heart', 'star', 'fire','squeeze','closed-up', 'closed-down', 'lined');
                left.classList.remove('default','startled', 'heart', 'star', 'fire','squeeze','closed-up', 'closed-down', 'lined');
                right.classList.add(name);
                left.classList.add(name);
            }
            
            if (type === "mouth") {
                mouth.forEach(removeSelected);
                emojiMouth.classList.remove('default', 'no-mouth','upside', 'open', 'tongue', 'lined','frown','smile', 'curse', 'grimace');
                emojiMouth.classList.add(name);
            }

            event.target.classList.add('selected');
            
            //console.log(event.target.classList.add('selected'));
            //console.log(type + multiple + name);
        }
    });
}