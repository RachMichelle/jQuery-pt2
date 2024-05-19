// add new
$('#add').on('click', function(e){
    e.preventDefault();
    if ($('#rating').val() > 10 || $('#rating').val() < 0){
        alert('Please enter a rating between 0 and 10!');
        return null;
    }
    if ($('#title').val().length < 2){
        alert ('Title must be longer!');
        return null;
    }
    if ($('#title').val !== '' && $('#rating').val() !== ''){
    $('#movies').append
    ('<li class = "movie"><span class = movie-title>' + $('#title').val() + '</span> : ' + '<span class = movie-rating>' + $('#rating').val() + ' </span><button class="remove"> X </button></li>');
    $('#title').val('');
    $('#rating').val('');
    }
});

// remove list item
$('#movies').on('click', '.remove', function(){
    $(this).parent().remove();
})

// sorting
$('#submitSort').on('click', function (e){
    e.preventDefault();
    if ($('#sortOptions').val() === 'A-Z'){
        aToZ();
    }
    if ($('#sortOptions').val() === 'Z-A'){
        zToA();
    }
    if ($('#sortOptions').val() === 'Rating(low-high)'){
        ratingAsc();
    }
    if ($('#sortOptions').val() === 'Rating(high-low)'){
       ratingDesc();
    }
})

// rating asc
function ratingAsc (){
    const $ratingList = $('.movie')
$ratingList.detach().sort(function(a,b){
    return $(a).children('.movie-rating').text().localeCompare($(b).children('.movie-rating').text(), 'en', {numeric:true})
})
.appendTo($('#movies'))
}

// rating desc
function ratingDesc(){
    const $ratingList = $('.movie')
$ratingList.detach().sort(function(a,b){
    return $(b).children('.movie-rating').text().localeCompare($(a).children('.movie-rating').text(), 'en', {numeric:true})
})
    .appendTo($('#movies'))
}


// alpahetical a-z
function aToZ(){
    const $ratingList = $('.movie')
$ratingList.detach().sort(function(a,b){
    return $(a).children('.movie-title').text().localeCompare($(b).children('.movie-title').text())}).appendTo($('#movies'))
}

// alpahetical z-a
function zToA(){
    const $ratingList = $('.movie')
$ratingList.detach().sort(function(a,b){
    return $(b).children('.movie-title').text().localeCompare($(a).children('.movie-title').text())}).appendTo($('#movies'))
}