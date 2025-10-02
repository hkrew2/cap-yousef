






// transationis

 const slidesCount = document.querySelectorAll('.swiper-slide').length;
    const progressContainer = document.getElementById('progress');

    // إنشاء شريط لكل صورة
    for (let i = 0; i < slidesCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.innerHTML = "<span></span>";
      progressContainer.appendChild(bar);
    }

    const swiper = new Swiper('.swiper', {
      autoplay: {
        delay: 5000, // 5 ثواني لكل صورة
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          updateProgress(swiper.activeIndex);
        }
      }
    });

    function updateProgress(index) {
      const bars = document.querySelectorAll('.progress-bar span');
      bars.forEach((bar, i) => {
        bar.style.animation = "none"; // وقف القديم
        bar.offsetHeight; // ريستارت
        if (i === index) {
          bar.style.animation = "fill 5s linear forwards";
        } else if (i < index) {
          bar.style.width = "100%";
        } else {
          bar.style.width = "0%";
        }
      });
    }

    // بدء أول بار
    updateProgress(0);