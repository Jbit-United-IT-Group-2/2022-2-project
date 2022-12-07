import members from './members.js';

const pages = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.start-btn');
const round = document.querySelector('.round');

let owMembers = [...members];
let temp = [];

const cards = document.querySelectorAll('.card');

const card1 = cards[0];
const card2 = cards[1];

const cardImg1 = card1.querySelector('img');
const cardImg2 = card2.querySelector('img');

const cardName1 = card1.querySelector('.card-title');
const cardName2 = card2.querySelector('.card-title');

const dialogue1 = card1.querySelector('.card-text');
const dialogue2 = card2.querySelector('.card-text');

let member1;
let member2;

let count = 0;

const updateCard = () => {
  if ([16, 24, 28, 30].includes(count)) {
    owMembers = [...temp];
    temp = [];
    if (count === 16) {
      round.textContent = '16강';
      alert('16강!');
    }
    if (count === 24) {
      round.textContent = '8강';
      alert('8강!');
    }
    if (count === 28) {
      round.textContent = '4강';
      alert('4강!');
    }
    if (count === 30) {
      round.textContent = '결승!';
      alert('결승!');
    }
  }

  if (count === 31) {
    location.href = temp[0].result;
  }
  count = count + 1;
  console.log(count);
  console.log(owMembers);
  member1 = owMembers.pop();
  member2 = owMembers.pop();
  cardImg1.src = member1.image;
  cardImg2.src = member2.image;
  cardName1.textContent = member1.name;
  cardName2.textContent = member2.name;
  dialogue1.textContent = member1.dialogue;
  dialogue2.textContent = member2.dialogue;
};

updateCard();

let currentPage = 0;
for (let page of pages) {
  page.classList.add('hide');
}
pages[currentPage].classList.remove('hide');

for (let btn of btns) {
  btn.addEventListener('click', function () {
    pages[currentPage].classList.add('hide');
    currentPage++;
    pages[currentPage].classList.remove('hide');
  });
}

card1.addEventListener('click', () => {
  temp.push(member1);
  updateCard();
});
card2.addEventListener('click', () => {
  temp.push(member2);
  updateCard();
});
