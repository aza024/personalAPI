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



    // $(addbtn).on('click', function() {
    //     document.getElementById('name',function(){
    //         console.log(clicked);
    //     })
       
    //   });

    //   $(deletebtn).on('click', function() {
    //     console.log('clicked edit button');
    //   });

})