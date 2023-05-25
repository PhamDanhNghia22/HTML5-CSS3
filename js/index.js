$('#toggle').click(function(){
    $('nav').slideToggle();
})


const btn = document.querySelectorAll('.add_cart')
btn.forEach(function(button, index){
    console.log(button,index)
})
