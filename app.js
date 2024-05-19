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
    $('#movies').append('<li class = "movie"><span class = movie-title>' + $('#title').val() + '</span> : ' + '<span class = movie-rating>' + $('#rating').val() + ' </span><button class="remove"> X </button></li>');
    $('#title').val('');
    $('#rating').val('');
    }
});

$('#movies').on('click', '.remove', function(){
    $(this).parent().remove();
})