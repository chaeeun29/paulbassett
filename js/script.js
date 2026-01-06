// tab메뉴 구현
$(".tab_list").click(function(e){
 e.preventDefault();
// 클릭한 data-tab의 값 tabName에 대입
 let tabName = $(this).data("tab");
 $(".tab_list").removeClass("active");
 $(this).addClass('active');
 $(".pr_box").removeClass('active');
 $("#" + tabName).addClass("active");
});