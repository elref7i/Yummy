'use strict';
const urls = {
  home: `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
  details: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=53065`,
  categories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
};
const allData = async (type, url) => {
  let data = null;
  try {
    const response = await fetch(url);
    if (data === null) {
      $('body').css({ backgroundColor: '#000' });
    } else {
      $('body').css({ backgroundColor: '#fff' });
      console.log('a7a');
    }
    data = await response.json();
    if (type === 'home') {
      display(data.meals);
      console.log(data.meals[0]);
    } else if (type === 'categories') {
    }
  } catch (error) {
    console.log('Error fatching data:', error);
  }
};

allData('home', urls.home);
console.log($('.links-sidebar').children());

const row = $('<div class="row gx-0 gx-sm-3 gy-3"></div>');

function display(homeData) {
  for (let i = 0; i < homeData.length; i++) {
    console.log('good');
    let meal = `
    <div class="| col-12 col-md-4 col-lg-3">
      <div class="inner p-3">
        <div class="image-foot home-image-meal cursor-p | rounded-4 overflow-hidden position-relative shadow-lg" data-home-id='${homeData[i].idMeal}'>
          <img src="${homeData[i].strMealThumb}" alt="" class="w-100">
          <div
            class="overlay-image position-absolute w-100 h-100 text-center p-2 d-flex justify-content-center align-items-center">
            <h2 class="fs-bold str-meal">${homeData[i].strMeal}</h2>
          </div>
        </div>
      </div>
    </div>
    `;
    $('.home .container').append(row);
    $(row).append(meal);
  }
}

//*Sidebar-------------------------------*//
$('.icon-bar i').on('click', function (e) {
  if ($(this).attr('data-open') === 'true') {
    $('aside').animate({ left: '0px' }, 400);
    $(this).hide(100, function () {
      $('.close-menue').css({ display: 'block' });
    });
  } else {
    $('aside').animate({ left: '-312.056px' });
    $(this).hide(100, function () {
      $('.open-menue').css({ display: 'block' });
    });
  }
});
