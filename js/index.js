let list_btn = $('.btn-list');
let remove_btn = $('.btn-remove');
list_btn.click(function(){
    $('.full-screen').slideDown();
});
remove_btn.click(function(){
    $('.full-screen').slideUp();
});
$('.own-ft').click(function(){
    $(this).toggleClass('own-ft-animating').siblings().removeClass('own-ft-animating');
    $(this).siblings().each(function(){$(this).find('span').removeClass('hidden');});
    $(this).find('span').toggleClass('hidden');
});
$('.btn-list').click(function(){
   $('body').css('overflow','hidden');
});
$('.btn-remove').click(function(){
    $('body').css('overflow','auto');
});

//my-join我要参加点击事件
$('.my-join').click(function () {
   window.location.href='http://localhost:63342/%E4%B8%80%E5%8A%A0%E6%89%8B%E6%9C%BA/html/ShotOn.html?_ijt=5fcm129r4q4e2acm0dbrsdup3f'
});

