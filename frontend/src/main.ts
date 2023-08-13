/* import { json } from "stream/consumers"; */
import "./style.css";
import fs from 'fs';

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

const carousel = document.querySelector('.carousel') as HTMLDivElement;
const carouselInner = document.querySelector('.carousel-inner') as HTMLDivElement;
const carouselItems = document.querySelectorAll('.carousel-item');
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

const prevButton = document.querySelector('.prev-button') as HTMLButtonElement;
const nextButton = document.querySelector('.next-button') as HTMLButtonElement;

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

updateCarousel()

/*
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Your order section
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

type orderType = {
  "pizza1": number,
  "pizza2": number,
  "pizza3": number,
  "pizza4": number,
  "pizza5": number,
  "pizza6": number,
  "pizza7": number,
  "name" : string,
  "email" : string,
  "phoneNumber" : string,
  "houseNumber" : string,
  "city": string,
  "zipCode": string,
  "street": string
}

const orderDetails: orderType = {
  "pizza1": 0,
  "pizza2": 0,
  "pizza3": 0,
  "pizza4": 0,
  "pizza5": 0,
  "pizza6": 0,
  "pizza7": 0,
  "name" : "",
  "email" : "",
  "phoneNumber" : "",
  "houseNumber" : "",
  "city": "",
  "zipCode": "",
  "street": ""
}

/* const yourOrder = document.getElementById('your-order') as HTMLDivElement */
const pizzaButton1 = document.getElementById('pizza1-button') as HTMLButtonElement
const pizzaButton2 = document.getElementById('pizza2-button') as HTMLButtonElement
const pizzaButton3 = document.getElementById('pizza3-button') as HTMLButtonElement
const pizzaButton4 = document.getElementById('pizza4-button') as HTMLButtonElement
const pizzaButton5 = document.getElementById('pizza5-button') as HTMLButtonElement
const pizzaButton6 = document.getElementById('pizza6-button') as HTMLButtonElement
const pizzaButton7 = document.getElementById('pizza7-button') as HTMLButtonElement
const pizza1amount = document.getElementById('pizza1')  as HTMLInputElement
const pizza2amount = document.getElementById('pizza2')  as HTMLInputElement
const pizza3amount = document.getElementById('pizza3')  as HTMLInputElement
const pizza4amount = document.getElementById('pizza4')  as HTMLInputElement
const pizza5amount = document.getElementById('pizza5')  as HTMLInputElement
const pizza6amount = document.getElementById('pizza6')  as HTMLInputElement
const pizza7amount = document.getElementById('pizza7')  as HTMLInputElement

pizzaButton1.addEventListener('click', async () => {
  const amount = await +pizza1amount.value
  if (!amount)
    return null
  orderDetails.pizza1 += amount
  console.log(orderDetails)
})

pizzaButton2.addEventListener('click', async () => {
  const amount = await +pizza2amount.value
  if (!amount)
    return null
  orderDetails.pizza2 += amount
  console.log(orderDetails)
})

pizzaButton3.addEventListener('click', async () => {
  const amount = await +pizza3amount.value
  if (!amount)
    return null
  orderDetails.pizza3 += amount
  console.log(orderDetails)
})

pizzaButton4.addEventListener('click', async () => {
  const amount = await +pizza4amount.value
  if (!amount)
    return null
  orderDetails.pizza4 += amount
  console.log(orderDetails)
})

pizzaButton5.addEventListener('click', async () => {
  const amount = await +pizza5amount.value
  if (!amount)
    return null
  orderDetails.pizza5 += amount
  console.log(orderDetails)
})

pizzaButton6.addEventListener('click', async () => {
  const amount = await +pizza6amount.value
  if (!amount)
    return null
  orderDetails.pizza6 += amount
  console.log(orderDetails)
})

pizzaButton7.addEventListener('click', async () => {
  const amount = await +pizza7amount.value
  if (!amount)
    return null
  orderDetails.pizza7 += amount
  console.log(orderDetails)
})