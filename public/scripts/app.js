console.log("Sanity Check: JS is working!");
// var x = document.getElementByID("dataContainer")
// dataContainer.innerHTML = "text"

$(document).ready(function(){


    $.ajax({
        method: 'GET',
        url:"/api/equinecenters",
        success: function onSuccess(json){
            var centers = json.data
            centers.forEach(eqCenter => {
                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.name}</li>`)

                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.address}</li>`)
                
                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.number}</li>`)
                
                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.email}</li>`)
                
                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.website}</li>`)
                
                $('#eqCenterList').append(`<li class= "listItem">
                ${eqCenter.disserved}</li>`)
                
        })
    },
        error:function onError(){
            console.log("Error")
        }
});



    $('#form').on('submit', function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data)
        // var center = $(this).serialize;
      $.ajax({
          method:'POST',
          url:"/api/equinecenters",
          data: data,
          success: window.location.reload()
      })
        })
       
      });

      $(deletebtn).on('click', function(event) {
        console.log('clicked delete button');
      });

