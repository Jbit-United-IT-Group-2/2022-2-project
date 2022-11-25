import enMembers from './enMember.js';

const pages = document.querySelectorAll('.page');

let currentPage = 0;

function changeSlide() {
  currentPage++;
  pages.forEach((page, i) => {
    page.classList.add('hide');
    if (currentPage === i) {
      page.classList.remove('hide');
    }
  });
}

// Title page
const startBtn = document.querySelector('.start_btn');
startBtn.addEventListener('click', () => {
  changeSlide();
});

// Content page
let members = [...enMembers];

const title = document.querySelector('.title');
const cards = document.querySelectorAll('.card');
const cardImgs = document.querySelectorAll('.card-img-top');
const cardTitles = document.querySelectorAll('.card-title');
const cardTexts = document.querySelectorAll('.card-text');
const progress = document.querySelector('.progress-bar');

let member1, member2;
let temp = [];
let count = 0;

cards[0].addEventListener('click', () => {
  temp.push(member1);
  next();
});
cards[1].addEventListener('click', () => {
  temp.push(member2);
  next();
});

function next() {
  if ([4, 6].includes(count)) {
    members = [...temp];
    temp = [];
    let titleText;
    switch (count) {
      case 4:
        titleText = '4강';
        break;
      case 6:
        titleText = '결승!';
        break;
    }
    title.textContent = titleText;
  }
  count++;
  progress.style.width = `${(count / 7) * 100}%`;
  if (count === 8) {
    changeSlide();
    cardImgs[2].src = temp[0].image;
    cardTitles[2].textContent = temp[0].name;
    cardTexts[2].textContent = temp[0].desc;
    return;
  }
  console.log(members);
  member1 = members.pop();
  cardImgs[0].src = member1.image;
  cardTitles[0].textContent = member1.name;
  cardTexts[0].textContent = member1.desc;
  member2 = members.pop();
  cardImgs[1].src = member2.image;
  cardTitles[1].textContent = member2.name;
  cardTexts[1].textContent = member2.desc;
}
next();
