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

for(let i = 0; i < 3; ++i) {
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