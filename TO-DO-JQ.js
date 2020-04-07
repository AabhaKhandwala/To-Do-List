//var list=$('#list');
//var clickButton=$('.callAction');

$('.callAction').click(function(){

var newListItem=$('input.inputText').val(); 
$('#list').append('<li class="list-item deletetask" >' + newListItem + '</li>');
$('input.inputText').val(" ");

 deleteListItem();
});

function deleteListItem(){
    $('.deletetask').click(function(){
    $(this).css("text-decoration" , "line-through");
    var self=this;
     setTimeout(function(){$(self).remove(); 
    },1000);  
      // $(this).remove(); 
    });     

  }

  /*function deleteListItem(){
    setTimeout(function(){
        $('#list li.list-item').css("text-decoration" , "line-through");
      },1000);
    $('.deletetask').click (function() {
        $(this).remove();
        });

  }*/