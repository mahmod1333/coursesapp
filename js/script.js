const sidenav= document.getElementById('sidenav');
const menu= document.getElementById('menu');
let m = false
menu.addEventListener('click',()=>{
if (m===false) {
    sidenav.style.right="0px"
    m=true
}else{  
      sidenav.style.right="-240px"
      m=false
}
})
/*---------------------------------------------header section ---------------------------*/