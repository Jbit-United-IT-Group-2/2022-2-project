import HLMembers from './HLMember.js';

let members = [...HLMembers].sort(() => Math.random() - 0.5);

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
const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
  wrap: true,
});

const carouselInner = document.querySelector('.carousel-inner');
members.forEach((member, i) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (i === 0) {
    carouselItem.classList.add('active');
  }
  const carouselImg = document.createElement('img');
  carouselImg.classList.add('d-block');
  carouselImg.classList.add('w-100');
  carouselImg.src = member.image;

  carouselItem.appendChild(carouselImg);
  carouselInner.appendChild(carouselItem);
});

const startBtn = document.querySelector('.start_btn');
startBtn.addEventListener('click', () => {
  changeSlide();
});

// Content page

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
  if ([8, 12, 14].includes(count)) {
    members = [...temp];
    temp = [];
    let titleText;
    switch (count) {
      case 8:
        titleText = '8강';
        progress.classList.remove('bg-success');
        progress.classList.add('bg-info');
        break;
      case 12:
        titleText = '4강';
        progress.classList.remove('bg-info');
        progress.classList.add('bg-warning');
        break;
      case 14:
        titleText = '결승!';
        progress.classList.remove('bg-warning');
        progress.classList.add('bg-danger');
        break;
    }
    alert(`${titleText}!`);
    title.textContent = titleText;
  }
  count++;
  progress.style.width = `${(count / 15) * 15}rem`;
  if (count === 16) {
    location.href = temp[0].result;
    return;
  }
  // console.log(members);
  // console.log(count);
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
