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


function inBound(target) {
    let style = window.getComputedStyle(target)
    let rect = target.getBoundingClientRect()
    let extra_bottom = parseInt(style.paddingBottom)
                     + parseInt(style.marginBottom)

    return (rect.top < 0 && rect.bottom - extra_bottom > 0) 
        || (rect.top >= 0 && rect.top < window.innerHeight)

}

function poll() {
    // Remove attribute
    if(curr_active >= 0) {
        buttons[curr_active].classList.remove('gotcha')
    }

    // let targets_to_viewport_top = [
    //     targets[0].getBoundingClientRect(),
    //     targets[1].getBoundingClientRect(),
    //     targets[2].getBoundingClientRect(),
    // ]
    
    for(let i = 0, length = buttons.length; i < length; ++i) {
        if(inBound(targets[i])) {
            buttons[i].classList.add('gotcha')
            curr_active = i
            break
        }
        curr_active = (i == 2) ? -1 : curr_active;
    }
}

window.addEventListener('scroll', poll)