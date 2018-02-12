$(document).ready(function(){

    $("#side_bar_toggle").click(function(e){
        e.preventDefault();
        $(".sidebar_menu").toggleClass("main-screen-full");
        $(".main_content , #notification-content").toggleClass("content_side_padding");
    });

});