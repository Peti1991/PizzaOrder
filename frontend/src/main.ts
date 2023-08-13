import "./style.css";

/*
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Counter for Input Pizza amount 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const customNums = document.querySelectorAll(".customNum");

customNums.forEach((num) => {
  const numInput = num.querySelector(".numInput") as HTMLInputElement;
  const arrUp = num.querySelector(".arrUp") as HTMLElement;
  const arrDown = num.querySelector(".arrDown") as HTMLElement;

  const initialValue = parseInt(numInput.value) || 0;
  numInput.value = initialValue.toString();

  const updateValue = () => {
    numInput.dispatchEvent(new Event("input"));
    checkMaxMin();
  };

  arrUp.addEventListener("click", () => {
    if (numInput.stepUp) {
      numInput.stepUp();
      updateValue();
    }
  });

  arrDown.addEventListener("click", () => {
    if (numInput.stepDown) {
      numInput.stepDown();
      updateValue();
    }
  });

  const checkMaxMin = () => {
    const numInputValue = parseInt(numInput.value);
    const numInputMax = parseInt(numInput.max || "0");
    const numInputMin = parseInt(numInput.min || "0");

    if (numInputValue === numInputMax) {
      (num as HTMLElement).style.paddingTop = "0.8em";
      (num as HTMLElement).style.height = "5em";
      arrUp.style.display = "none";

      (num as HTMLElement).style.paddingBottom = "0";
      arrDown.style.display = "block";
    } else if (numInputValue === numInputMin) {
      (num as HTMLElement).style.paddingBottom = "0.8em";
      (num as HTMLElement).style.height = "5em";
      arrDown.style.display = "none";

      (num as HTMLElement).style.paddingTop = "0";
      arrUp.style.display = "block";
    } else {
      (num as HTMLElement).style.padding = "0";
      (num as HTMLElement).style.height = "7em";
      arrUp.style.display = "block";
      arrDown.style.display = "block";
    }
  };

  numInput.addEventListener("input", checkMaxMin);
});

/*
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Previous Next button and Carousel 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const carousel = document.querySelector('.carousel') as HTMLDivElement
const carouselInner = document.querySelector('.carousel-inner') as HTMLDivElement
const carouselItems = document.querySelectorAll('.carousel-item')
const numItems = carouselItems.length;
let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + numItems) % numItems;
  updateCarousel();
}

const prevButton = document.querySelector('.prev-button') as HTMLButtonElement
const nextButton = document.querySelector('.next-button') as HTMLButtonElement

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
