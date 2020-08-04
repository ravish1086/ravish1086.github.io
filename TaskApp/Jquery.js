
$(document).ready(function(){
        
    $('.nav-button').click(function(){
        console.log("hello");
        $('li').toggleClass('res-li');
        $('.mynav').toggleClass('res-nav');
        
    });

    if($(window).width() > 600)
    {
        console.log("hitt");
        $('li').removeClass('res-lii');
        $('.mynav').removeClass('res-nav');  
    }

    $('#style-toggle').click(function(){
        console.log("toggle clicked");
        let attr=document.getElementById('toggle-image').getAttribute('src');
        if(attr=="toggle1.png")
        {
            $('#toggle-image').css("transition","ease-in 5s");
                $('#toggle-image').attr("src","toggle2.png");
        }
        else{
            $('#toggle-image').css("transition","ease-in 5s");
            $('#toggle-image').attr("src","toggle1.png");
        }

        var elem1 = document.getElementsByClassName("table-hide")[0];
        let attr1 = window.getComputedStyle(elem1, null).getPropertyValue("display");

        var elem2 = document.getElementsByClassName("card-hide")[0];
        let attr2=window.getComputedStyle(elem2, null).getPropertyValue("display");
        console.log(attr1+"   "+attr2);
        if(attr1=="none")
        {
            document.getElementsByClassName('table-hide')[0].style.display="block";
            document.getElementsByClassName('card-hide')[0].style.display="none";
        }
            else if(attr2=="none")
        {
            document.getElementsByClassName('table-hide')[0].style.display="none";
            document.getElementsByClassName('card-hide')[0].style.display="block";
        }
    });
});