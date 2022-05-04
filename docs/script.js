var j = 0;
var p = 0;
function expand(){
    let menu = document.getElementById('menu');
    let menuItems = menu.children;
    let sub = document.getElementById('menu2');
    let subMenuItems = sub.children;
    if(j == 0){
        document.getElementById("add").style.transform = 'rotate(45deg)';
        document.getElementById("menu").style.transform = 'scale(1)';
        menuItems[0].style.transform = "translateY(-160px)";
        menuItems[1].style.transform = "translate(140px, -80px)";
        menuItems[2].style.transform = "translate(140px, 80px)";
        menuItems[2].style.zIndex = 1;
        menuItems[3].style.transform = "translateY(160px)";
        menuItems[4].style.transform = "translate(-140px, 80px)";
        menuItems[5].style.transform = "translate(-140px, -80px)";
        
        j = 1;
    }
    else{
        document.getElementById("add").style.transform = 'rotate(0deg)';
        document.getElementById("menu").style.transform = 'scale(0.9)';
        menuItems[0].style.transform = "translateY(0px)";
        menuItems[1].style.transform = "translate(0px, 0px)";
        menuItems[2].style.transform = "translate(0px, 0px)";
        menuItems[3].style.transform = "translateY(0px)";
        menuItems[4].style.transform = "translate(0px, 0px)";
        menuItems[5].style.transform = "translate(0px, 0px)";
        j = 0
    }
}

function expandSub(){
    let sub = document.getElementById('menu2');
    let subMenuItems = sub.children;
    //menuItems[2].style.zIndex = "0"
    
    if(p == 0){
        subMenuItems[0].style.transform = "translateY(-160px)";
        subMenuItems[1].style.transform = "translate(140px, -80px)";
        subMenuItems[2].style.transform = "translate(140px, 80px)";
        subMenuItems[3].style.transform = "translateY(160px)";
        subMenuItems[4].style.transform = "translate(-140px, 80px)";
        subMenuItems[5].style.transform = "translate(-140px, -80px)";
        for (let k = 0; k < subMenuItems.length; k++) {
            // subMenuItems[k].style.zIndex = "200"
            console.log("TEst")
        }
        p = 1;
    }
    else{
        subMenuItems[0].style.transform = "translateY(0px)";
        subMenuItems[1].style.transform = "translate(0px, 0px)";
        subMenuItems[2].style.transform = "translate(0px, 0px)";
        subMenuItems[3].style.transform = "translateY(0px)";
        subMenuItems[4].style.transform = "translate(0px, 0px)";
        subMenuItems[5].style.transform = "translate(0px, 0px)";
        for (let k = 0; k < subMenuItems.length; k++) {
            subMenuItems[k].style.zIndex = "-10"
            console.log("pekaboo")
        }
        p = 0;
    }
}