// ---------- menu ----------
$(function() {
    // 최근 검색어/인기 검색어 show
    $('.input-search').on('click', function() {
        $('.search-option').addClass('active')
    })

    $('.search-option-close').on('click', function() {
        $('.search-option').removeClass('active')
    })

    // 카테고리 메뉴에 마우스를 올렸을 때
    $('.cate').on('mouseover', function() {
        $('.cate-sub').addClass('active')
    })
 
    $('.cate-sub').on('mouseleave', function() {
        $('.cate-sub').removeClass('active')
    })

    var swiper = new Swiper(".event", {
        direction: "vertical",
        loop: true,
        slidesPerView: 1,
        // 자동재생
        autoplay: {
            delay: 3000,            // 슬라이드 당 시간
        },
        speed: 1000,                // 슬라이드가 넘어가는 시간
    });
})

// ---------- main -----------
$(function() {
    // swiper 슬라이드 만들기
    // new Swiper('슬라이드박스 선택자', 옵션{ } )
    const swiper = new Swiper('.main-swiper', {
  
        // fade
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        // 자동재생
        autoplay: {
            delay: 4500,            // 슬라이드 당 시간
  
        },
        speed: 2000,                // 슬라이드가 넘어가는 시간
  
        pagination: {
            el: ".main-swiper-pagination",
            type: "progressbar",    
        },
  
        navigation: {
            nextEl: ".main-control-next",
            prevEl: ".main-control-prev",
        },
  
    })
  
    // 슬라이드 전체 개수 세팅
    let total = swiper.slides.length - 2
    $('.fraction-count.total').text(total)
  
    // 슬라이드 전환 종료후 이벤트
    swiper.on('slideChangeTransitionEnd', function () {
  
        let count = 1
        if( swiper.activeIndex > total ) {
            count = swiper.activeIndex % total
        } else {
            count = swiper.activeIndex
        }
        count = count < 10 ? '0' + count  : count;

        if( count == 0 ) count = total

        $('.fraction-count.current').text(count)
  
        $('.main-text-top').removeClass('titleUp')
        $('.main-title').removeClass('titleUp')
        $('.main-text-bottom').removeClass('titleUp')
        $('.main-gradient').removeClass('titleUp')
        $('.star').removeClass('starFade')
  
        // $('.main-gradient').fadeOut()
  
        $('.swiper-slide-active .main-text-top').addClass('titleUp')
        $('.swiper-slide-active .main-title').addClass('titleUp')
        $('.swiper-slide-active .main-text-bottom').addClass('titleUp')
        $('.swiper-slide-active .main-gradient').addClass('titleUp')
        $('.swiper-slide-active .star').addClass('starFade')
  
        // $('.swiper-slide-active .main-gradient').fadeIn('slow')
  
    })
  
  
    // 재생버튼
    $('.control-play').on('click', function() {
        swiper.autoplay.start()
        $('.control-play').toggleClass('hide')
        $('.control-pause').toggleClass('hide')
    })
    
    // 일시정버튼
    $('.control-pause').on('click', function() {
        swiper.autoplay.stop()
        $('.control-play').toggleClass('hide')
        $('.control-pause').toggleClass('hide')
    })  
    
  
  })

// ---------- section1 ----------
  
$(function() {
    const swiper = new Swiper('.section1-swiper', {
        // Optional parameters
        direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
        loop: true,

        speed: 500,                    // 슬라이드가 넘어가는 시간
        slidesPerView: 3,               // 보여지는 슬라이드 개수
        slidesPerGroup: 3,             // 한 번에 넘어가는 슬라이드 개수
        spaceBetween: 68,                // 슬라이드 간 여백
        grabCursor: true,               // 마우스커서를 잡는 손가락 모양
        /* centeredSlides: true, */           // 센터모드

        navigation: {
          nextEl: ".section1-control-next",
          prevEl: ".section1-control-prev",
      },
    pagination: {
        el: ".section1-swiper-pagination",
        clickable: true,
      },
    });
    
})

// ---------- section2 ----------

$(function() {
    const swiper = new Swiper('.section2-swiper', {
        // Optional parameters
        direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
        // loop: true,
        speed: 500,                    // 슬라이드가 넘어가는 시간
        slidesPerView: 4,               // 보여지는 슬라이드 개수
        spaceBetween: 40,                // 슬라이드 간 여백

        grabCursor: true,               // 마우스커서를 잡는 손가락 모양
        /* centeredSlides: true, */           // 센터모드

        navigation: {
         nextEl: ".section2-swiper-button-next",
         prevEl: ".section2-swiper-button-prev",
        },
    })

    // 타임세일 타이머
    // $('.timer p').text('12:00:00')

    // 1초마다 동작하는 타이머
    setInterval(saleTimer, 1000)

})

let now  = new Date() 
let year = now.getFullYear()    // 년
let month = now.getMonth()      // 월
let day = now.getDate()         // 일

let tomorrow = new Date()
tomorrow.setDate(year, month, day+1)
tomorrow.setHours(0)      
tomorrow.setMinutes(0)
tomorrow.setSeconds(0)


const zeroPad = (num, places) => String(num).padStart(places, '0')

function saleTimer() {

    now  = new Date()       // 현재 날짜/시간

    var gap = tomorrow.getTime() - now.getTime()
    // 남은시간 종료
    if( gap < 0 ) {
        $('.timer p').text('타임세일 종료')
        return
    }
    // 1초 = 1000ms
    // 1분 = 60초 = 60 * 1000 
    // 1시 = 60분 = 60 * 60 * 1000
    // 1일 = 24시 = 24 * 60 * 60 * 1000
    let days = Math.floor(gap / (24 * 60 * 60 * 1000))
    let hours = Math.floor(gap / (60 * 60 * 1000))
    let min = Math.floor(gap / (60 * 1000))
    let sec = Math.floor(gap / (1000))

    // console.log('gap : ' + gap);
    // console.log('day : ' + days);
    // console.log('hours : ' + hours);
    // console.log('min : ' + min);
    // console.log('sec : ' + sec);

    let rHours = zeroPad(hours % 24, 2)
    let rMin = zeroPad(min % 60, 2)
    let rSec = zeroPad(sec % 60, 2)
    let saleTime = `${rHours}:${rMin}:${rSec}`

    $('.timer p').text(saleTime)
    console.log(`남은 시간 : ${rHours}:${rMin}:${rSec}`);


}

// ---------- section6 ----------

$(function() {

    const swiper2  = new Swiper('.section6-swiper2', {
      // Optional parameters
      direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
      loop: true,

      speed: 500,                    // 슬라이드가 넘어가는 시간
      slidesPerView: 1,               // 보여지는 슬라이드 개수
      spaceBetween: 37,                // 슬라이드 간 여백
      grabCursor: true,               // 마우스커서를 잡는 손가락 모양
      // centeredSlides: true,           // 센터모드
      allowTouchMove: false,

      effect: "fade",
      fadeEffect: {
          crossFade : false,
      },
      
  });

  const swiper1 = new Swiper('.section6-swiper1', {
      // Optional parameters
      direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
      loop: true,

      speed: 500,                    // 슬라이드가 넘어가는 시간
      slidesPerView: 4,               // 보여지는 슬라이드 개수
      spaceBetween: 20,                // 슬라이드 간 여백
      allowTouchMove: false,
      grabCursor: true,               // 마우스커서를 잡는 손가락 모양
      // centeredSlides: true,           // 센터모드
    

      navigation: {
        nextEl: ".section6-control-next",
        prevEl: ".section6-control-prev",
      },
      thumbs: {                           
        swiper: swiper2,            
      },
  
  });
    
})


// ---------- section8 ----------


$(function() {

    $('.heart-img').on('click', function() {
        $(this).toggleClass('active')
    })

    const swiper2 = new Swiper('.section8-swiper2', {
        // Optional parameters
        direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
        loop: true,
        autoplay: {
            delay: 4000,            // 슬라이드 당 시간
  
        },
        speed: 2000,                // 슬라이드가 넘어가는 시간
        speed: 500,                    // 슬라이드가 넘어가는 시간
        slidesPerView: 1,               // 보여지는 슬라이드 개수
        spaceBetween: 100,                // 슬라이드 간 여백
        grabCursor: true,               // 마우스커서를 잡는 손가락 모양
        /* centeredSlides: true, */           // 센터모드
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
            crossFade : false,
        },
    });
    
    const swiper1 = new Swiper('.section8-swiper1', {
        // Optional parameters
        direction: 'horizontal',        /* 슬라이드 방향 :  'vertical', 'horizontal' */
        loop: true,
        autoplay: {
            delay: 4000,            // 슬라이드 당 시간
        },
        speed: 2000,                // 슬라이드가 넘어가는 시간
        speed: 500,                    // 슬라이드가 넘어가는 시간
        slidesPerView: 4,               // 보여지는 슬라이드 개수
        spaceBetween: 100,                // 슬라이드 간 여백
        allowTouchMove: false,
        grabCursor: true,               // 마우스커서를 잡는 손가락 모양
        /* centeredSlides: true, */           // 센터모드
    
    thumbs: {                           
        swiper: swiper2,            
    },
    navigation: {
        nextEl: ".section8-control-next",
        prevEl: ".section8-control-prev",
      },
    });
    
})

// ---------- section9 ----------
$(function(){
    $('.event1').on('click', function(){
        $('.event1').addClass('active')

        $('.event2').removeClass('active')
        $('.event3').removeClass('active')
        $('.event4').removeClass('active')
        $('.event5').removeClass('active')
        $('.event6').removeClass('active')
        $('.event7').removeClass('active')
    })
    
    $('.event2').on('click', function(){
        $('.event2').addClass('active')

        $('.event1').removeClass('active')
        $('.event3').removeClass('active')
        $('.event4').removeClass('active')
        $('.event5').removeClass('active')
        $('.event6').removeClass('active')
        $('.event7').removeClass('active')
    })

    $('.event3').on('click', function(){
        $('.event3').addClass('active')

        $('.event1').removeClass('active')
        $('.event2').removeClass('active')
        $('.event4').removeClass('active')
        $('.event5').removeClass('active')
        $('.event6').removeClass('active')
        $('.event7').removeClass('active')
    })

    $('.event4').on('click', function(){
        $('.event4').addClass('active')

        $('.event1').removeClass('active')
        $('.event2').removeClass('active')
        $('.event3').removeClass('active')
        $('.event5').removeClass('active')
        $('.event6').removeClass('active')
        $('.event7').removeClass('active')
    })

    $('.event5').on('click', function(){
        $('.event5').addClass('active')

        $('.event1').removeClass('active')
        $('.event2').removeClass('active')
        $('.event3').removeClass('active')
        $('.event4').removeClass('active')
        $('.event6').removeClass('active')
        $('.event7').removeClass('active')
    })

    $('.event6').on('click', function(){
        $('.event6').addClass('active')

        $('.event1').removeClass('active')
        $('.event2').removeClass('active')
        $('.event3').removeClass('active')
        $('.event4').removeClass('active')
        $('.event5').removeClass('active')
        $('.event7').removeClass('active')
    })

    $('.event7').on('click', function(){
        $('.event7').addClass('active')

        $('.event1').removeClass('active')
        $('.event2').removeClass('active')
        $('.event3').removeClass('active')
        $('.event4').removeClass('active')
        $('.event5').removeClass('active')
        $('.event6').removeClass('active')
    })
})

// ---------- footer ----------
$(function() {
    $('.family-arrow').on('click', function() {
        $('.family-site').toggleClass('active')
    })
})

// ---------- floating ----------
// $(function(){
//     // 플로팅 버튼 클릭 이벤트
//     $('.up').on('click', function() {
    
           
//         // 스크롤 맨 위로 이동
//         $('html').stop().animate({'scroll-top' : 0}, 1000)
    
//     })
//     $('.down').on('click', function() {
    
    
//         // 스크롤 맨 밑로 이동
//         let height = $('html').height()
//         $('html').stop().animate({'scroll-top' : height}, 1000)
    
//     })
// })