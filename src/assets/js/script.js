$(document).ready(function () {
  $('.category-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><iconify-icon icon="basil:arrow-left-outline"></iconify-icon></button>',
    nextArrow: '<button class="slick-next"><iconify-icon icon="stash:arrow-right-duotone"></iconify-icon></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>'

        }
      },
      {
        breakpoint: 576,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><iconify-icon icon="basil:arrow-left-outline"></iconify-icon></button>',
    nextArrow: '<button class="slick-next"><iconify-icon icon="stash:arrow-right-duotone"></iconify-icon></button>',
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.arrival-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><iconify-icon icon="basil:arrow-left-outline"></iconify-icon></button>',
    nextArrow: '<button class="slick-next"><iconify-icon icon="stash:arrow-right-duotone"></iconify-icon></button>',
    responsive: [

      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.best-sell-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><iconify-icon icon="basil:arrow-left-outline"></iconify-icon></button>',
    nextArrow: '<button class="slick-next"><iconify-icon icon="stash:arrow-right-duotone"></iconify-icon></button>',
    responsive: [


      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {

        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><iconify-icon icon="basil:arrow-left-outline"></iconify-icon></button>',
    nextArrow: '<button class="slick-next"><iconify-icon icon="stash:arrow-right-duotone"></iconify-icon></button>',
    responsive: [

      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {

        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          prevArrow: '<button class="slick-prev"><iconify-icon icon="bi:chevron-left"></iconify-icon></button>',
          nextArrow: '<button class="slick-next"><iconify-icon icon="bi:chevron-right"></iconify-icon></button>',
          slidesToShow: 1
        }
      }
    ]
  });

  // Main Slider
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: '.thumb-slider'
  });

  // Thumbnail Slider
  $('.thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992, // Tablet
        settings: {
          vertical: false,
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          vertical: false,
          slidesToShow: 2,
          
        }
      }
    ]
  });


});


window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// offcanvas price range slider js

document.getElementById('filterSidebar')
  .addEventListener('shown.bs.offcanvas', function () {
    initPriceRange();
  });

function initPriceRange() {
  const rangeInput = document.querySelectorAll("#filterSidebar .range-input input"),
    priceInput = document.querySelectorAll("#filterSidebar .price-input input"),
    range = document.querySelector("#filterSidebar .slider .progress");

  let priceGap = 1000;

  // number input events
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.classList.contains("input-min")) {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else if (e.target.classList.contains("input-max")) {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  // range slider events
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.classList.contains("range-min")) {
          rangeInput[0].value = maxVal - priceGap;
        } else if (e.target.classList.contains("range-max")) {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
}


// normal price range slider js
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");

let priceGap = 1000;

// Update when typing in number inputs
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.classList.contains("input-min")) {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else if (e.target.classList.contains("input-max")) {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

// Update when dragging range sliders
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInput[0].value = maxVal - priceGap;
      } else if (e.target.classList.contains("range-max")) {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


// input increase/ decrease
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const quantityInput = document.getElementById("quantity");

decreaseBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    quantityInput.value = value - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});


const toggles = document.querySelectorAll('.desc-title');

toggles.forEach(toggle => {
  const plusIcon = toggle.querySelector('.icon-plus');
  const minusIcon = toggle.querySelector('.icon-minus');
  const targetSelector = toggle.getAttribute('data-bs-target');
  const collapseTarget = document.querySelector(targetSelector);

  if (!plusIcon || !minusIcon || !collapseTarget) return; // safety check

  collapseTarget.addEventListener('show.bs.collapse', () => {
    plusIcon.classList.add('d-none');
    minusIcon.classList.remove('d-none');
  });

  collapseTarget.addEventListener('hide.bs.collapse', () => {
    plusIcon.classList.remove('d-none');
    minusIcon.classList.add('d-none');
  });
});








