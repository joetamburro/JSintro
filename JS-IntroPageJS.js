$(document).ready(function(){
  $('.Button').click(function() {

      var Value = $('.name').val();
      $('.name').text(Value);
  
      var Value = $('.age').val();
      $('#age').text(Value);
  
      var Value = $('.occupation').val();
      $('#occupation').text(Value);
  
      var Value = $('.birthland').val();
      $('#birthland').text(Value);
  
      var Value = $('.location').val();
      $('#location').text(Value);
  
      var Value = $('.beer').val();
      $('#beer').text(Value);

      var Value = $('.dislike').val();
      $('#dislike').text(Value);
  })
 
 
})
