$(document).ready(function(){
  let i = 0;
  for(i = 0; i < localStorage.length; i++){
    let taskID = 'task-' + i;
    $('#list').append("<li id='" + taskID + "'><input type='checkbox' class='status'>" + localStorage.getItem(taskID) + "<button class='delete'>Delete</button></li>");
  }

  $('#clear').click( e => {
      localStorage.clear();
      location.reload();
  });

  $(".submitBtn").click( e => {
    e.preventDefault();
    let inputVal = $('#input-field').val();
    if(inputVal === ''){
      alert('No input!');
    }else{
      let taskID = "task-" + i;
      localStorage.setItem(taskID, inputVal);
      $('#list').append(
        "<li class='task' id='"+taskID+"'>"+
          "<input type='checkbox' class='status'>"+
          inputVal+
          "<button class='delete'>Delete</button>"+
        "</li>")
      }
      i++;
      $('#input-field').val('');

  });



  $(document).on('click', '.status', e => {
    let status = $(this.activeElement).prop('checked');
    if(status == true){
      $(this.activeElement).parent().css({'text-decoration': 'line-through','color': '#a0a0a0'})
    }else if(status == false){
      $(this.activeElement).parent().css({'text-decoration': 'none','color': 'black'})
    }
  })



  $(document).on('click', '.delete', e => {
    let li = $(this.activeElement).closest('li');
    taskID = li.attr('id');
    localStorage.removeItem(taskID);
    li.remove();
  })


});
