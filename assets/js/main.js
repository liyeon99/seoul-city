$('.btn-lang').click(function(){
  url=$('#language').val();
  window.open(url);
})

// 메인 슬라이드 배너 전체보기
$('.sc-visual .all').click(function (e) {
  $('.sc-allBanner').show();
  $('body').addClass('hidden');
});
$('.sc-allBanner .btn-close').click(function (e) {
  $('.sc-allBanner').hide();
  $('body').removeClass('hidden');
});

// 메인 슬라이드 주요뉴스
const newsSlide = new Swiper('.sc-visual .news .swiper',{
  loop:true,
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:".swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.next',
    prevEl:'.prev'
  }
})
// 메인 슬라이드 시민 참여
const citizenSlide = new Swiper('.sc-visual .citizen .swiper',{
  loop:true,
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:".swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.next',
    prevEl:'.prev'
  }
})

// 첫 페이지 로딩시 자동 재생
newsSlide.autoplay.start();
// 첫 페이지 로딩시 자동 재생 멈춤
citizenSlide.autoplay.stop();

$('.sc-visual .headline').click(function(e){
  e.preventDefault();
  
  $('.sc-visual .content').removeClass('active');
  $(this).parent('.content').addClass('active');
  
  if($(this).parent('.content').hasClass('news')){
    $('.sc-visual .citizen .start').removeClass('on');
    $('.sc-visual .citizen .stop').addClass('on');
    if(!$(this).parent('.content').find('.start').hasClass('on')){
      newsSlide.autoplay.start();
    }
    citizenSlide.autoplay.stop();
  }else{
    $('.sc-visual .news .start').removeClass('on');
    $('.sc-visual .news .stop').addClass('on');
    if(!$(this).parent('.content').find('.start').hasClass('on')){
      citizenSlide.autoplay.start();
    }
    newsSlide.autoplay.stop();
  }
});

// 메인 슬라이드 재생/정지
function mainPlay(frame, slide) {
  $(`${frame} .start`).on('click', function() {
      slide.autoplay.start();
      $(`${frame} .start`).removeClass('on');
      $(`${frame} .stop`).addClass('on');
  });

  $(`${frame} .stop`).on('click', function() {
      slide.autoplay.stop();
      $(`${frame} .stop`).removeClass('on');
      $(`${frame} .start`).addClass('on');
  });
}

//배너 슬라이드
const bannerSlide = new Swiper('.sc-banner .swiper',{
  loop:true,
  slidesPerView:3,// 화면에 보여질 배너 개수
  spaceBetween: 43, //간격
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:" .swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.next',
    prevEl:'.prev'
  }
})
//배너 슬라이드 재생,정지
// $('.sc-banner .start').hide(); // 시작 시 재생 버튼 숨기기

// $('.sc-banner .start').on('click',function() {
//   bannerSlide.autoplay.start();
//   $('.start').hide();
//   $('.stop').show();
// });

// $('.sc-banner .stop').on('click',function() {
//   bannerSlide.autoplay.stop();
//   $('.stop').hide();
//   $('.start').show();
// });


//관련 사이트
$('.related-item a').on('click',function (e) { 
  if($(this).parent().find('.sub-wrap').length){
    e.preventDefault();

    if ($(this).parent().hasClass('on')) {
      $(this).parent().removeClass('on').find('.sub-wrap').stop().slideUp();
    } else {
      $('.related-item').removeClass('on').find('.sub-wrap').stop().slideUp();
      $(this).parent().addClass('on').find('.sub-wrap').stop().slideDown();
    }
  }
});

// 웹접근성에 필요한 탭 이벤트
// shift tab
$('.related-list .sub-item:first-child').keydown(function(e){
  // alert('focus 한번더');
  // console.log(e.keyCode);
  code =e.keyCode
  if(code===9 && e.shiftKey){
    $('.related-item').removeClass('on').find('.sub-wrap').stop().slideUp();
  }
});

// 그냥 tab
$('.related-list .sub-item:last-child').keydown(function(e){
  code =e.keyCode
  if(code===9 && !e.shiftKey){
    $('.related-item').removeClass('on').find('.sub-wrap').stop().slideUp();
  }
});


// 아래 제거
// let desc1 = ["서울시립대학교", "보건환경연구원", "인재개발원", "농업기술센터", "서울종합방재센터", "119특수구조단", "소방서", "소방학교", "서울아리수본부", "미래한강본부", "물재생센터", "서북병원","어린이병원", "은평병원", "서울역사박물관", "한성백제박물관", "서울공예박물관", "시립미술관", "체육시설관리사업소", "서울도서관", "서울역사편찬원", "품질시험소", "서울대공원", "동부공원녹지사업소", "중부공원녹지사업소", "서부공원녹지사업소", "북부공원녹지사업소", "서울시립과학관", "서울식물원", "서울기록원", "아동복지센터", "공무원수련원", "시민안전체험관"
// ];
// let html = ``;
// // function(){} = =>{} 와 동일
// desc1.forEach(element => {
//   // console.log(element);
//   html+=`
//     <li class='sub-item'>
//       <a href='#'>
//           ${element}
//       </a>
//     </li>`
// });

// $('#relate1').html(html);


// for (let i = 0; i < desc.length; i++) {
//   document.write(`
    // <li class='sub-item'>
    //   <a href='#'>
    //       ${desc[i]}
    //   </a>
    // </li>
// `);
// }





// 상단 이동 버튼
  // 스크롤 이벤트 핸들러
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) { // 스크롤이 100px 이상일 때
    $('.btn-top').addClass('on'); 
  } else {
    $('.btn-top').removeClass('on'); 
  }
});

// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').on('click',function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false; // 클릭 시 기본 동작 방지
});

// 슬라이드 함수
mainPlay('.news', newsSlide);
mainPlay('.citizen', citizenSlide);
mainPlay('.sc-banner',bannerSlide);