$(document).ready(function () {

    $('.slider').slider();
    loadFiles();
});





function loadFiles() {
    var html = "";

    res.search_results.forEach(function (el) {
        console.log(el.listing.reviews_count);
        html += `  <div class= "col s6" >
                        <div class= "slide">
                                <img  id="photo`+ el.id + `"` + `" src="` + el.listing.thumbnail_url + `"
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                        
                                <p class="description">`+ "$" + " " + el.listing.cost + " " + "CLP" + " " + el.listing.room_type + " " + " " + el.listing.localized_city + " " + ` </p> 
                                <p class="description">`+ el.listing.room_type + ` </p> 
                                <p class="description"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"        aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>`+ el.listing.reviews_count + ` </p> 
                         
                        </div>        
                    </div>`


        $('.pictures').html(html);

    })
}
