const prevBtn = document.getElementById("PREV");
const container1 = document.querySelector(".heroBgCarocelAlign");
const children1 = document.querySelectorAll(".cart1");

let currentIndex = 0;

// Add pagination container
const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination';
container1.appendChild(paginationContainer);

// Create pagination dots
children1.forEach((child, index) => {
  const paginationDot = document.createElement('span');
  paginationDot.className = 'pagination-dot';
  paginationDot.dataset.index = index;
  paginationContainer.appendChild(paginationDot);
});

// Update pagination on navigation
function updatePagination() {
  const paginationDots = paginationContainer.children;
  for (let i = 0; i < paginationDots.length; i++) {
    paginationDots[i].classList.remove('active');
  }
  paginationDots[currentIndex].classList.add('active');
}

//////////////////////////////////////////////
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + children1.length) % children1.length;
  updateClassesOnNext1();
  updatePagination(); // Update pagination
});

function updateClassesOnNext1() {
  children1.forEach((child1, index) => {
    const newIndex = (index - currentIndex + children1.length) % children1.length + 1;
    child1.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `carr5`, `car1`, `car2`, `car3`, `car4`, `car5`);
    child1.classList.add(`car${newIndex}`);
  });
}

// Add event listener to pagination dots
paginationContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('pagination-dot')) {
    const newIndex = parseInt(e.target.dataset.index);
    currentIndex = newIndex;
    updateClassesOnNext1();
    updatePagination();
  }
});

const intervalId1 = setInterval(function () {
  prevBtn.click();
}, 5000);


function Services() {
  const ShowMore = document.getElementById('ShowMore')
  const DownIcon = document.getElementById('DownIcon')

  if (ShowMore.classList.contains('displayN')) {
    ShowMore.classList.remove('displayN')
    ShowMore.classList.add('displayB')


  }
  else {
    ShowMore.classList.add('displayN')
    ShowMore.classList.remove('displayB')

  }

  if (DownIcon.classList.contains('rotateN')) {
    DownIcon.classList.remove('rotateN')
    DownIcon.classList.add('rotateB')
  }
  else {
    DownIcon.classList.add('rotateN')
    DownIcon.classList.remove('rotateB')
  }


}

// SCROLL ANIMATION

const imgCont2Container = document.querySelector('.imgCont2Container');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(imgCont2Container)) {
    imgCont2Container.classList.add('newclass0');
  } else {
    imgCont2Container.classList.remove('newclass0');
  }
});

// SCROLL ANIMATION

const Cont22Text = document.querySelector('.Cont22Text');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(Cont22Text)) {
    Cont22Text.classList.add('newclass1');
  } else {
    Cont22Text.classList.remove('newclass1');
  }
});
// SCROLL ANIMATION

const FurtherElips1 = document.querySelector('.FurtherElips1');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(FurtherElips1)) {
    FurtherElips1.classList.add('newclass2');
  } else {
    FurtherElips1.classList.remove('newclass2');
  }
});
// SCROLL ANIMATION

const FurtherElips2 = document.querySelector('.FurtherElips2');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(FurtherElips2)) {
    FurtherElips2.classList.add('newclass3');
  } else {
    FurtherElips2.classList.remove('newclass3');
  }
});
// SCROLL ANIMATION

const FurtherElips3 = document.querySelector('.FurtherElips3');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(FurtherElips3)) {
    FurtherElips3.classList.add('newclass4');
  } else {
    FurtherElips3.classList.remove('newclass4');
  }
});



// //////////

// const nextBtn = document.getElementById("ButtonHuMa");
// const container2 = document.querySelector(".cartsContAlign");
// const children2 = document.querySelectorAll(".carts44");


// nextBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + children2.length) % children2.length;
//   updateClassesOnNext2();
// });

// function updateClassesOnNext2() {
//   children2.forEach((child2, index) => {
//     const newIndex = (index - currentIndex + children2.length) % children2.length + 1;
//     child2.classList.remove(`Show1`, `Show2`, `Show3`, `Show4`, `Show5`);
//     child2.classList.add(`Show${newIndex}`);
//   });
// }

// const intervalId2 = setInterval(function () {
//   nextBtn.click();
// }, 3000);





let currentIndex1 = 0;
const slides = document.querySelector('.slides');
const dots1 = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    currentIndex1 = index;
    slides.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    updateDots();
}

function updateDots() {
    dots1.forEach(dot => dot.classList.remove('active'));
    dots1[currentIndex1].classList.add('active');
}

function showNextSlide() {
    currentIndex1 = (currentIndex1 + 1) % totalSlides;
    showSlide(currentIndex1);
}

function showPrevSlide() {
    currentIndex1 = (currentIndex1 - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex1);
}

dots1.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

function currentSlide(index) {
    showSlide(index);
}

setInterval(showNextSlide, 5000);

// Initialize the first slide as active
updateDots();



function BarsNavs() {
  const NavsAside = document.getElementById('NavsAside')

  if(NavsAside.classList.contains('ImOut')){
    NavsAside.classList.remove('ImOut')
    NavsAside.classList.add('ImIn')
  }
}

function CloseNavsAside() {
  const NavsAside = document.getElementById('NavsAside')

  if(NavsAside.classList.contains('ImIn')){
    NavsAside.classList.remove('ImIn')
    NavsAside.classList.add('ImOut')
  }
}