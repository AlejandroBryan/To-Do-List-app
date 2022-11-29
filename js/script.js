

$(document).ready(function() {

    function newTask(){
        let inputValue =  $('#taskValue').val();
        let list = $('#list');
        let li = $('<li></li>')
        let text = document.createTextNode(inputValue);
        li.append(text)

        if (inputValue === '') {
            alert("You must write something!");
          } else {
            list.append(li);
          }
       
    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    //3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.addClass("delete")
    }

    $('#list').sortable();
         
    }

   $('#button').on('click', function (e) { 
        e.preventDefault();
       // $('.taskForm').submit();
        newTask();
        $('#taskValue').val('');
    });  
 })






   





 