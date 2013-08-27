var usersCollection = []

$(document).ready(function(){
  $('.Button').click(function() {
      if (validateForm()) {
          var Value = $('.name').val();
          $('.name').text(Value);
  
          var Value = $('.age').val();
          $('.age').text(Value);
  
          var Value = $('.occupation').val();
          $('.occupation').text(Value);
  
          var Value = $('.birthland').val();
          $('.birthland').text(Value);
  
          var Value = $('.location').val();
          $('.location').text(Value);
  
          var Value = $('.beer').val();
          $('.beer').text(Value);

          var Value = $('.dislike').val();
          $('.dislike').text(Value);

          usersCollection.push(getFormValues() );
          updateUserList(usersCollection);

          

        }

  })

  // modal close button
  $('.Button-2').click(function () {
    console.log('done!')
    $('.modal').removeClass('modal-active');
  })  
                                                                                 
})

function validateForm (){
  // reset status
  var good=true                                       
  $('.errormessage-left').removeClass('active-left')
  $('input').removeClass("warning")
  $('input').each(function(){
    if ($(this).val() == "") {
      console.log("found a bad one");
      good=false
      $(this).addClass("warning")
      $('.errormessage-left').  addClass('active-left'),
      $('.modal').addClass('modal-active'); 
    }
  })
  console.log(good)
  return good
}



function getFormValues () {
  var nameVal = $('.name').val();
 

  var formData = {
    name: nameVal,  
  }

  return formData
}

function updateUserList (list) {
  var ul = $('.users-list ul')
  ul.html('')

  list. forEach(function(user){
    var text = "<li>" + user.name + "</li>"
    ul.append(text)
  })
}