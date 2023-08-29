$('ul').on('click',"li",function(){
    $(this).toggleClass('blackC')
})


$('ul').on('click','span', function(fadeT){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
    fadeT.stopPropagation()
})


$('input').on('keypress',function(event){
    if(event.which === 13){
        // console.log(event.target.value);
        let addtodo = $(this).val()
        $(this).val('')
        $('ul').append(`<li><span><i class="fa-regular fa-circle-xmark"></i></span> ${addtodo}</li>`)

    }
})

