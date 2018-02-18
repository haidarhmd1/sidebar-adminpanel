$(document).ready(function(){
    
	$("#sortable").sortable();
        toggleItems("#side_bar_toggle",".sidebar_menu","main-screen-full"); //SideBar Menu
        toggleItems("#side_bar_toggle",".main_content , #notification-content","content_side_padding"); //SideBar Menu
        toggleItems("#show-content",".dropdrown-nav","show-hidden-menu"); //DropDown Menu
        toggleItems("#account-content",".dropdrown-nav-account","show-hidden-menu"); //DropDown Menu
        toggleItems("#user-settings",".show_container_settings","settings-container"); //Settings Container topNav
        toggleItems("#msg-show",".show_container_msg","msg-container"); //Msg Container TopNav


        // add notes to table
        $(".add-btn").on("click", function(e){
            e.preventDefault();
            if($(".add-txt").val() == ""){
                alert("Please Enter a Message");
            }
            else{
                $("#bodyTable").append("<tr><td>"+ $(".add-txt").val() +"</td></tr>");
                $(".add-txt").val("");
            }
        });

        // remove notes from table
        $("#bodyTable").on("dblclick", "tr" , function(e){
            $(this).remove();
        });
        
        // page redirection for ui/ux elements page
        pageredirect("#sortable-page", "uiuxpages/sortable.html");

});

function toggleItems(clickItem,firstObject, secondObject){
    $(clickItem).click(function(e){
        $(firstObject).toggleClass(secondObject);
    });
}

function pageredirect (boxid, pagehref){
    $(boxid).click(function(e){
        window.location.href = pagehref;
    });
}