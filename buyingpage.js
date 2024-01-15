function openSideBar(){
    var showsidebar = document.getElementById("sidebar");
    

if (showsidebar.style.display === "none") 
{
showsidebar.style.display = "flex";
document.getElementById("sidebarlogo").innerHTML = "✖";


} else 

{
showsidebar.style.display = "none";
}

}
