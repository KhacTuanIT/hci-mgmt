$(document).ready(function() {
    $(".choose-image").on('change', function(event) {
        console.log("change");
        console.log(URL.createObjectURL(event.target.files[0]));
        $show = $('#show-choose-image');
        $show.attr('src', URL.createObjectURL(event.target.files[0]));
        $show.css('width', '120px');
    })

    $('button[type="reset"]').on('click', function() {
        $show = $('#show-choose-image');
        $show.attr('src', '');
        $show.css('width', '0');
    })
})