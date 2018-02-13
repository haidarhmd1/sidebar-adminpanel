$(document).ready(function(){
        toggleItems("#side_bar_toggle",".sidebar_menu","main-screen-full"); //SideBar Menu
        toggleItems("#side_bar_toggle",".main_content , #notification-content","content_side_padding"); //SideBar Menu
        toggleItems("#show-content",".dropdrown-nav","show-hidden-menu"); //DropDown Menu
        toggleItems("#account-content",".dropdrown-nav-account","show-hidden-menu"); //DropDown Menu
        toggleItems("#user-settings",".show_container_settings","settings-container"); //Settings Container topNav
        toggleItems("#msg-show",".show_container_msg","msg-container"); //Msg Container TopNav
});

function toggleItems(clickItem,firstObject, secondObject){
    $(clickItem).click(function(e){
        $(firstObject).toggleClass(secondObject);
    });
}