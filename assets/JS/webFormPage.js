function AccessTypeMenuClosed(){
    var DownArrow= document.getElementById("AccessTypeDropdownC");
    DownArrow.style.visibility= "hidden";
    DownArrow.style.width= "0px";

    var RightArrow= document.getElementById("AccessTypeDropdownO");
    RightArrow.style.visibility= "visible";

    var AccessTypeMenu= document.getElementById("AccessTypeMenu");
    AccessTypeMenu.style.visibility= "visible";
}

function AccessTypeMenuOpened(){
    var DownArrow= document.getElementById("AccessTypeDropdownC");
    DownArrow.style.visibility= "visible";

    var RightArrow= document.getElementById("AccessTypeDropdownO");
    RightArrow.style.visibility= "hidden";

    var AccessTypeMenu= document.getElementById("AccessTypeMenu");
    AccessTypeMenu.style.visibility= "hidden";
    
}

function clickedPublic(){
    var DownArrow= document.getElementById("AccessTypeDropdownC");
    DownArrow.style.visibility= "visible";

    var RightArrow= document.getElementById("AccessTypeDropdownO");
    RightArrow.style.visibility= "hidden";

    var AccessTypeMenu= document.getElementById("AccessTypeMenu");
    AccessTypeMenu.style.visibility= "hidden";

    var AccessType= document.getElementById("AccessType");
    AccessType.innerHTML="Public";

    var AccessPublicIcon= document.getElementById("Users");
    AccessPublicIcon.style.visibility= "visible";
    AccessPublicIcon.style.width= "auto";

    var AccessPrivateIcon= document.getElementById("User");
    AccessPrivateIcon.style.visibility= "hidden";
    AccessPrivateIcon.style.width= "0px";
}

function clickedPrivate(){
    var DownArrow= document.getElementById("AccessTypeDropdownC");
    DownArrow.style.visibility= "visible";

    var RightArrow= document.getElementById("AccessTypeDropdownO");
    RightArrow.style.visibility= "hidden";

    var AccessTypeMenu= document.getElementById("AccessTypeMenu");
    AccessTypeMenu.style.visibility= "hidden";

    var AccessType= document.getElementById("AccessType");
    AccessType.innerHTML="Private";
    
    var AccessPublicIcon= document.getElementById("Users");
    AccessPublicIcon.style.visibility= "hidden";
    AccessPublicIcon.style.width= "0px";

    var AccessPrivateIcon= document.getElementById("User");
    AccessPrivateIcon.style.visibility= "visible";
    AccessPrivateIcon.style.width= "auto";
}