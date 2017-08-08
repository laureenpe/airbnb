$(document).ready(function () {
    loadFiles();
    $('select').material_select();

});





function loadFiles() {
    var html = "";

    res.search_results.forEach(function (el) {
        console.log(el.listing.user.picture_url);
        html += `  
                    <div class= "col s12 m6 l6" >
                            <div class= "slide">
                                <img class="" id="photo`+ el.id + `"` + `" src="` + el.listing.thumbnail_url + `">
                            </div> 
                                <div class= "container-profile" >
                                    <img class="circl" src="` + el.listing.user.picture_url+ `">
                                 </div>        

                            <div class= "text">
                                <p class="description">`+ "$" + " " + el.listing.cost + " " + "CLP" + " " + el.listing.room_type + " " + " " + el.listing.localized_city + " " + ` </p> 
                                <p class="description">`+ el.listing.room_type + ` </p> 
                                <p class="description"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"        aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>`+ el.listing.reviews_count + " "+  "Evaluaciones"+` </p>                  
                                
                            </div>

                    </div>`


        $('.pictures').html(html);

    })
}

//Function to filters