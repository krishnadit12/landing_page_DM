


$('.our_gallery_section_wapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$('.brand_icon_main_wapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});



$('.testimonial_wallper_main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000
            }
        }
    ]
});
$('.about_of_dit_left_side_gallery_sider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000
            }
        }
    ]
});

$('.video_review_slider_main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



  document.addEventListener('DOMContentLoaded', function() {
    // Function to show the popup
    function showPopup() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 574 || screenWidth < 320) {
            document.querySelector('.overlay').classList.add('show');
            document.querySelector('.pop-up-main-wapper').classList.add('show');
        }
    }

    // Show the popup after 3 seconds
    setTimeout(showPopup, 3000);

    // Function to hide the popup
    function hidePopup() {
        document.querySelector('.overlay').classList.remove('show');
        document.querySelector('.pop-up-main-wapper').classList.remove('show');
    }

    // Hide the popup when the close button is clicked
    document.getElementById('close-popup').addEventListener('click', hidePopup);

    // Hide the popup when clicking outside of the popup
    document.querySelector('.overlay').addEventListener('click', function(event) {
        if (event.target === document.querySelector('.overlay')) {
            hidePopup();
        }
    });
});

// why coose us 





