$(":input").on("focus",function(event){
    $(this).select();
});
$(":input").on("mouseup",function(event){
    $(this).select();
    return false;
});
$(':input').keyup(function(event) {
    if (event.which == 8 || event.which == 46) {
        $(this).prev('input').focus();
    }
    else {
        $(this).next('input').focus();
    }
});