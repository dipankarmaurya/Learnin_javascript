var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

let button = document.getElementById('collect');

button.addEventListener('click', () => {
    $('#container').append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
})