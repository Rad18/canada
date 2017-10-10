  
$( document ).ready(function() {

$ ("#hidden_iframe").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Регистрация', 'Словакия');
  }
 
});

$ ("#hidden_iframe2").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform2').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Регистрация', 'Словакия');
  }
 
});

$ ("#hidden_iframe3").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform3').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Регистрация', 'Словакия');
  }
 
});


 $(function(){                       
   $('#send22').click(function(){
        $('.modal').hide('slow');
        $('.modal-backdrop').hide('slow');
    });
});

 $(function(){                       
   $('#send1').click(function(){
        $('.modal').hide('slow');
        $('.modal-backdrop').hide('slow');
    });
});

      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      mobile:       false,       // default
                    }
                    )
                    wow.init();

   jQuery(function($){
   $("#Number").mask("+38(999) 999-9999");
   });


});
