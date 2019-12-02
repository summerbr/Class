
// Plain Javascript/ Vanilla Javascript
//let taskTextBox1 = document.getElementById("taskTextBox")
//console.log(taskTextBox1)

let someDiv = document.getElementById("someDiv") // HtmlElement
//let a = $(#"someElementId") // HtmlElement
// get element by id using jQuery
let taskTextBox = $("#taskTextBox") // returns a jQuery object

// get element by class
console.log($(".some-class"))

//let btnAddTask = $("#btnAddTask") // return jQuery object

$("#btnShowInfo").click(function(){
  // show the div
  //$("#infoDiv").toggle(1000)
  $("#infoDiv").slideToggle(1000)

})

$("#btnAddTask").click(function(){



  // get the value from the textbox using jquery
  let title = taskTextBox.val()

  //let liItem = document.createElement("li")

  let liItem = $("<li>") // create li element
  liItem.html(title)

  // UL
//  $("#taskList").append(liItem)


})


//someDiv.slideToggle()
