$('h1').addClass('big-title margin-50'); // will add class to h1, we can removeClass also
// $ - document.querySelector('h1') or document.querySelectorAll('button')

$('h1').text('bye'); //change text hello -> bye

$('button').text('dont click me'); // will change all buttons

$('a').attr('href', 'https://www.yahoo.com/'); // will change attribute


/*
for(let i = 0; i < 5; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        document.querySelector('h1').style.color = 'purple'
    });
} 
or with jQuery
*/

$('button').click(function() {
    $('h1').css('color', 'purple');
});  // addEventListener


$('input').keypress(function(event) {
    $('h1').text(event.key);
});

$('h1').before('<button>New</button>'); //make element before h1, we can use also after, or prepend, or append


//animation

$('button').on('click', function() {  //any button will hide and show, we also can just .hide or .show one time
    $('h1').fadeToggle();
    $('h2').slideUp();  //also we can .slideDown or .slideToggle
}); 

$('button').on('click', function() {  
    $('h1').animate({opacity: 0.5});
});

$('button').on('click', function() {  
    $('h3').slideUp().slideDown().animate({opacity: 0.5});
});