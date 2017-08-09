$(document).ready(function () {
    loadFiles();
    loadFilesIndex();
    $("#btn-save").click(saveToLocalStorage); //guarda a local storage
    getFromLocalStorage(); //obtener local storage
    $('select').material_select();

});

function loadFiles() {
    var html = "";
    res.search_results.forEach(function (el) {
        console.log(el);
        html += `  
                    <div class= "col s12 m6 l6" >
                            <div class= "slide">
                                <img class="" id="photo`+ el.id + `"` + `" src="` + el.listing.thumbnail_url + `">
                            </div> 
                                <div class= "container-profile" >
                                    <img class="circl" src="` + el.listing.user.picture_url + `">
                                 </div>        

                            <div class= "text">
                                <p class="description">`+ "$" + " " + el.listing.cost + " " + "CLP" + " " + el.listing.property_type + " " + " " + el.listing.localized_city + " " + ` </p> 
                                <p class="description">`+ el.listing.room_type + ` </p> 
                                <p class="description"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"        aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>`+ el.listing.reviews_count + " " + "Evaluaciones" + ` </p>                  
                                
                            </div>

                    </div>`

        $('.pictures').html(html);
        $('.experience').html(html);
    })
}

//Function to index
function loadFilesIndex() {
    var html = "";
    res.search_results.forEach(function (el) {
        console.log(el);
        html += `  
                    <div class= "col s12 m6 l6 margin-image" >
                            <div class= "slide">
                                <img class="exper" id="photo`+ el.id + `` + `" src="` + el.listing.thumbnail_url + `">
                            </div> 
                                     
                            <div class= "texto">
                                <p class="description">`+ "$" + " " + el.listing.cost + " " + "CLP" + " " + el.listing.property_type + " " + " " + el.listing.localized_city + " " + ` </p> 
                                <p class="descriptions">`+ el.listing.room_type + ` </p> 
                                <p class="descriptions"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"        aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>`+ el.listing.reviews_count + " " + "Evaluaciones" + ` </p>                            
                            </div>

                    </div>`

        $('.experience').html(html);



    })
}