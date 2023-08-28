$('li').on('click',function(){
    $(this).toggleClass('blackC')
})

$('span').on('click', function(fadeT){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
    fadeT.stopPropagation()
})