$(document).ready(function () {
  // Check scroll position on page load
  checkScroll();

  // Check scroll position on scroll event
  $(window).scroll(function () {
    checkScroll();
  });

  // Function to check the scroll position and update navigation style
  function checkScroll() {
    // Get the current scroll position
    var scrollPosition = $(window).scrollTop();

    // Check if the scroll position is greater than or equal to 10 pixels
    if (scrollPosition >= 10) {
      // Add the "active" class to the navigation element
      $("nav").addClass("active");
    } else {
      // Remove the "active" class if scroll position is less than 10 pixels
      $("nav").removeClass("active");
    }
  }

  // By default, show only Product Marketplace
  $("#ProductMarketplace").show();
  $(
    "#RentalMarketplace, #BookingMarketplace, #SubscriptionMarketplace, #More"
  ).hide();

  // Handle click event for each marketplace type
  $(".typeOf-marketPlace-list button").click(function () {
    // Reset all divs to hide
    $(
      "#ProductMarketplace, #RentalMarketplace, #BookingMarketplace, #SubscriptionMarketplace, #More"
    ).hide();

    // Remove "active" class from all list items
    $(".typeOf-marketPlace-list").removeClass("active");

    // Get the marketplace type based on button text
    var marketplaceType = $(this).find("p").text().trim();

    // Show the corresponding div based on the marketplace type
    if (marketplaceType === "Product Marketplace") {
      $("#ProductMarketplace").show();
    } else if (marketplaceType === "Rental Marketplace") {
      $("#RentalMarketplace").show();
    } else if (marketplaceType === "Booking Marketplace") {
      $("#BookingMarketplace").show();
    } else if (marketplaceType === "Subscription Marketplace") {
      $("#SubscriptionMarketplace").show();
    } else if (marketplaceType === "More") {
      $("#More").show();
    }

    // Add "active" class to the clicked list item
    $(this).parent().addClass("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  // effect: "fade",
  direction: "vertical",
  // direction: "horizontal",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
