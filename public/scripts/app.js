console.log("Sanity Check: JS is working!");

var $centerList;
var allCenters = [];

$(document).ready(function(){

    $centerList = $('#eqCenterList');

    $.ajax({
        method: 'GET',
        url:"/api/equinecenters",
        success: function onSuccess(json){
            var centers = json.data
            centers.forEach(eqCenter => {

                $('#eqCenterList').append(`
                    <li class= "listItem" id ="nameID">
                    ${eqCenter.name} 
                    <br>
                    <button type ="button" class = "delete" data-id =${eqCenter._id}>Delete</button>
                    <button type ="button"  id ="nameli" class = "edit" data-id =${eqCenter._id}>Edit</button> </li>
                    
                    <li class= "listItem" id ="addressli">
                    ${eqCenter.address}
                    <br>
                    <button type ="button" class = "edit">Edit</button> </li></li>

                    <li class= "listItem" id ="numberli">
                    ${eqCenter.number}
                    <br>
                    <button type ="button" class = "edit">Edit</button> </li></li>

                    <li class= "listItem" id ="emailli">
                    ${eqCenter.email}
                    <br>
                    <button type ="button" class = "edit">Edit</button> </li></li>

                    <li class= "listItem" id ="websiteli">
                    ${eqCenter.website}
                    <br>
                    <button type ="button" class = "edit">Edit</button> </li></li>

                    <li class= "listItem">
                    ${eqCenter.disserved}
                    <br>
                    <button type ="button" id = "disservedli"class = "edit">Edit</button> </li></li>
                `)
                
        })
    },
        error:function onError(){
            console.log("Error")
        }
});

    function createSucc(center){    
        console.log(center.center._id)
        window.location.reload()
    }

    $('#form').on('submit', function(event) {  
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data)
        var center = $(this).serialize;
      $.ajax({
          method:'POST',
          url:"/api/equinecenters",
          data: data,
          success: createSucc
      })
    }) 
//display input and submit button when 'Edit' button is clicked



//Delete 
        var deleteCenterError = function(err)
        {
            console.log("Error " + err)
        }

        var deleteCenterSuccess = function(scc)
        {
            window.location.reload()
            console.log("scc " + scc)
        }

   


    $('#eqCenterList').on('click', '.delete', function()
    {
        var data_id = $(this).attr('data-id');
        // console.log($('.delete'))
        console.log('clicked delete button to', '/api/equinecenters/?'+$.param({
            'id':data_id
        }));
        $.ajax({
            type:"DELETE",
            url:'/api/equinecenters/?'+$.param({
                'id':data_id
            }),
            success: deleteCenterSuccess,
            error: deleteCenterError
        }) 
    })



var names = [
    "name",
    "address",
    "email",
    "website",
    "disserved",
    "number"
]

for (let i = 0; i < names.length; i++) {
    let name = names[i] 
    console.log('name ' + name)
    $('#eqCenterList').on('click','#' + name + 'li', function(){
        console.log('here')
        var data_id = $(this).attr('data-id');
        var nameli = $(this).attr('id');
    
        let updatedCenter = $(event.currentTarget).serialize();
    
        // console.log($('li').length)
        // // console.log('nameli' + data_id)
        // var lists = $('li')
        // for (let i = 0; i <= lists.length; i++) {
        //     var list = lists[0]
        //     console.log(list.getAttribute('data-id'))
    
        // }
    
        // console.log($('.input' + name + 'li'))
        // if (!$('.input' + name + 'li').length) {
            $(`li`).append(`
            <li>
            <input type ="text" id=input${nameli} class ="editInput" placeholder = "Edit" name ="editInput">
            <button class ='editSubBtn' data-id=${data_id} id=edit${nameli} >Submit</button>
            </li>`)
        // }
    
        $('.editSubBtn').on('click',function(){
            var data_id = $(this).attr('data-id');
            console.log('name ' + name)
            let fieldName = $(this).attr("id");
            let newCenter = $('#input' + name + 'li')
    
            $.ajax({
               method: "PUT",
               url: '/api/equinecenters/?' + $.param({
                    'id':data_id
                }),
               data:{
                   name: newCenter.val()
                },
               success: (center) => {
                    window.location.reload()
               }
            })
        }) 
    })
    

    }

});

    

