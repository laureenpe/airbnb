$(document).ready(function () {
    loadFiles();
});





function loadFiles() {
    var html = "";
    res.search_results.forEach(function (el) {
        html += ` 
                        <div class="col s6">
                            <img id="photo`+ el.idimage + `" src='` + el.listing.thumbnail_url + `' >
                        </div>
                         <div class="col s6">
                            <img id="photo`+ el.idimage + `" src='` + el.listing.thumbnail_url + `' >

                        </div>
                       
                        
                    `


        $('.pictures').html(html);

    })
}

