function myFucntion() {
    document.getElementById('items').classList.toggle("show");
}
//close the dropdown menu if the user click outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drop_btn')) {
        var dropdown = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function img_gallery(evt,img_name)
{
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace("active"," ")
    }

    document.getElementById(img_name).style.display="block";
    evt.currentTarget.className += " active";
}