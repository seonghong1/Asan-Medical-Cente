const elFooter = document.querySelector('footer')
const elcon_wrap = document.querySelector('#con_wrap')



//#con_wrap의 높이 구하기 -footer에 fixed 사용 안할때
let winH = $(window).height() //열려져 있는 화면의 높이  

let headerH = $('header').height();

let footerH = elFooter.offsetHeight; //footer높이를 자바스크립트로 구하기

console.log(`현재 화면의 높이 ${winH} / header의 높이 ${headerH} / footer의 높이 ${footerH}`);  

//#con_wrap 의 높이는 화면 전체의 높이에서 헤더와 푸터의 높이값을 빼준 값이다
let con_wrapH = winH - (headerH + footerH);
console.log(con_wrapH)
// $("#con_wrap").css("height",con_wrapH);
elcon_wrap.style.height = `${con_wrapH}px`;
window.addEventListener('resize',function(){ //jquery가 아닌 js 로 resize지정
    let winH = $(window).height() 
    let headerH = $('header').height();
    let footerH = elFooter.offsetHeight; 
    let con_wrapH = winH - (headerH + footerH);
    elcon_wrap.style.height = `${con_wrapH}px`;
})


// $(window).resize(function(){
// const elFooter = document.querySelector('footer')
// const elcon_wrap = document.querySelector('#con_wrap')
// let winH = $(window).height() 
// let headerH = $('header').height();
// let footerH = elFooter.offsetHeight; 
// let con_wrapH = winH - (headerH + footerH);
// console.log(con_wrapH)
// $("#con_wrap").css("height",con_wrapH);
// });

var du = 400;
var open = 0; // lnb메뉴가 클릭 이전의 상태일때


//lnb슬라이드 메뉴
$(".lnb_btn").click(function(){
    if(open==0){ // 메뉴가 닫혀있으면 if 실행
    $("#wrap").animate({left:274},du);
    $("#lnb").animate({left:0},du);
    $(".cover").fadeIn(du);
    $(".lnb_btn").find("img").attr({"src":"img/bg_header_lnb_active.png","alt":"메뉴닫기"});
    open = 1;
    return false
    }else{
        $("#wrap").animate({left:0},du);
    $("#lnb").animate({left:-274},du);
    $(".cover").fadeOut(du);
    $(".lnb_btn").find("img").attr({"src":"img/bg_header_lnb.png","alt":"메뉴열기"});
        open = 0;
        return false
    }
});

