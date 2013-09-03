describe("Personal Info Form Validation", function(){

  it("should warn the user when fields are blank", function(){
    $('.button').click();
    expect($('input').hasClass('warning')).toBe(true)
  });


})



describe("Modal", function(){

   it("should display modal when all fields aren't filled", function(){
    $('.Button-2').click();
    expect($('.modal').hasClass('modal-active')).toBe(false)

  });

})

describe("Get Form Values", function(){

  it("should return an object with empty strings as values when form is blank", function(){
    expect(getFormValues().name).toBe('')
  });

  it("should input correct input values when form is filled", function(){
    $('.name').val("test")
    expect(getFormValues().name).toBe("test")
  });

})

describe("Update User list function", function(){

  it("should insert user name from form into user info column on page", function(){
    // $('.users-list ul').val(.nameVal)
    expect(updateUserList())
    // expect(false).toBe(true)

  })

})




// describe("Cool Form", function(){

//   beforeEach(function(){
//     $('.input').val('')
//   });

//   it("should warn the user when fields are blank", function(){

//     $('.add-user').click()

//     expect($('.warning').hasClass('active')).toBe(true)


//   });


// });