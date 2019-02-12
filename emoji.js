window.onload = function () {
    document.addEventListener('click', function(event) {
        if(event.target.classList.contains('js-choice')) {
            var type = event.target.dataset.type;
            var multiple = event.target.dataset.multiple;
            var name = event.target.dataset.name;
            
            if (type="skin") {
                var jsChoice = document.querySelector('.selected' && '.js-choice');
                jsChoice.classList.remove('selected');
                var emojiFace = document.querySelector('.emoji-face');
                emojiFace.classList.add(name);
            }
            
            event.target.classList.add('selected');
            jsChoice = "";
            //console.log(event.target.classList.add('selected'));
            //console.log(type + multiple + name);
        }
    });
}