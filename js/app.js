

$(document).ready(function () {


    //Click vào icon-menu-responesive để tạo sự kiện click
    $("#icon-menu-responsive").click(function () {
        // alert("Đã click thành công!");
        //Click xong => hiển thị menu respon bằng việc xổ từ trên xuống.

        //  $("#respons-menu").slideToggle(); //slideDown, slideUp, slideToggle.
        $("#site").toggleClass("open-menu-respon");
        $("#icon-menu-responsive").toggleClass("fa-navicon fa-times");
        return false;
    });

    $(window).resize(function () { // Sự kiện tahy đổi kích thước màn hình
        //alert("resize");
        // Nếu màn hình có độ rộng lớn hơn 1024px thì respone-menu nó phải ẩn đi
        if($(document).width() >= 768)
        {
            //  $("ul#respons-menu").css("display", "none");
            $("#site").removeClass("open-menu-respon");
            $("#icon-menu-responsive").removeClass("fa-times").addClass("fa-navicon");
        }
    });


});