var x = document.getElementById('x');

var toggle = false;

x.addEventListener('click',()=> {
    if (!toggle) {
        toggle = true;
        $('#button').css({
            "border":"1px solid white"
        })
        $('#x').css({
            'marginLeft': "70px",
            "backgroundColor":'white'
        });
        $('.container').css({
            html: "toggle on",
            "color": "red",
            "backgroundColor":'black'
        });
    }
    else {
        toggle = false;
        $('#button').css({
            "border":"1px solid black"
        })
        $('#x').css({
            'marginLeft': "0px",
            "backgroundColor": 'black'
            
        });

        $('.container').css({
            html: "toggle off",
            "color": "blue",
            "backgroundColor":'white'
        });
    }
})
