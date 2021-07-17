var buttons = [
    document.getElementById('a-founder'), 
    document.getElementById('a-doctorate'),
    document.getElementById('a-master')
];

var targets = [
    document.getElementById('founder'),
    document.getElementById('doctorate'),
    document.getElementById('master')
];

var curr_active = 0;

for(let i = 0, length = targets.length; i < length; ++i) {
    buttons[i].addEventListener(
        'click',
        function(i) {
            return function() {
                var header_height = document.getElementsByTagName('header')[0].offsetHeight;
                var element_to_viewport = targets[i].getBoundingClientRect().y;
                var viewport_to_document = window.scrollY;
                window.scroll(0, element_to_viewport + viewport_to_document - header_height);
            }
        }(i)
    )
}

function poll() {
    // Remove attribute
    if(curr_active >= 0) {
        buttons[curr_active].classList.remove('gotcha')
    }

    let viewport_height = window.innerHeight;
    let targets_to_viewport_top = [
        targets[0].getBoundingClientRect().y,
        targets[1].getBoundingClientRect().y,
        targets[2].getBoundingClientRect().y,
    ]
    
    for(let i = 0, length = buttons.length; i < length; ++i) {
        if(targets_to_viewport_top[i] < viewport_height && targets_to_viewport_top[i] > 0) {
            buttons[i].classList.add('gotcha')
            curr_active = i
            break
        }
        curr_active = (i == 2) ? -1 : curr_active;
    }
}

window.addEventListener('scroll', poll)