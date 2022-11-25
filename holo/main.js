const slides = document.querySelectorAll('.slide');

let currentPage = 0;

function changeSlide() {
  currentPage++;
  slides.forEach((slide, i) => {
    slide.classList.add('hide');
    if (currentPage === i) {
      slide.classList.remove('hide');
    }
  });
}

// Title page
const startBtn = document.querySelector('.start_btn');
startBtn.addEventListener('click', () => {
  changeSlide();
});

// Content page
let members = [
  {
    name: 'Watson Amelia',
    image: 'images/en/ame.png',
    desc: '찐따 탐정 아메',
  },
  {
    name: 'Takanashi Kiara',
    image: 'images/en/kiara.png',
    desc: '켄터키 프라이드 치킨',
  },
  {
    name: 'Ninomae Inanis',
    image: 'images/en/ina.png',
    desc: '문너눈나',
  },
  {
    name: 'Gawr Gura',
    image: 'images/en/gura.png',
    desc: '양덕 픽 상어',
  },
  {
    name: 'Mori Calliope',
    image: 'images/en/calli.png',
    desc: '랩하는 칼리',
  },
  {
    name: 'Ceres Fauna',
    image: 'images/en/fauna.png',
    desc: '대자연의 힘으로!',
  },
  {
    name: 'Hakos baelz',
    image: 'images/en/baelz.png',
    desc: '땃쥐는 친구가 없어요',
  },
  {
    name: 'Nanashi Mumei',
    image: 'images/en/mumei.png',
    desc: '부엉이냐 올빼미냐',
  },
];

const title = document.querySelector('.title');
const cards = document.querySelectorAll('.card');
const cardImgs = document.querySelectorAll('.card-img-top');
const cardTitles = document.querySelectorAll('.card-title');
const cardTexts = document.querySelectorAll('.card-text');

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
