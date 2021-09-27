
// $('#fetch').click(() => {
//     var xhrReq = new XMLHttpRequest();
//     xhrReq.onload = () => {
//         var resJson = JSON.parse(xhrReq.response);
//         var imageURL = resJson.message;
//         $('#dog').attr('src', imageURL);
//         // $('#dog-image-container').append('<img src ="'+ imageURL +'"/>')
//     }
//     xhrReq.open('get', 'https://dog.ceo/api/breeds/image/random');
//     xhrReq.send();
// })

// jquery method to call ajax
// $('#fetch').click(() => {
//     $.ajax({
//         url: 'https://dog.ceo/api/breeds/image/random',
//         method: 'GET',
//         success: function (data) {
//             var imageURL = data.message;
//             $('#dog').attr('src', imageURL);
//         }
//     })
// })


//more simpler method to call ajax using jquey

$('#fetch').click(() => {
    $.get('https://dog.ceo/api/breeds/image/random', (data) => {
        var imageURL = data.message;
        $('#dog').attr('src', imageURL);
    })
})
