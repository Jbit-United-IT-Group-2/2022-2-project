const members = [
  {
    name: "아나",
    image:"images/cardimages/ana.png",
    result:"result/ana.html",
    dialogue: "날 기억해 줘."
  },
  {
    name: "애쉬",
    image: "images/cardimages/ashe.png",
    result:"result/ashe.html",
    dialogue: "나란 여자는 없는 게 없지."
    
  }
  ,
  {
    name: "바티스트",
    image:"images/cardimages/baptiste.png",
    result:"result/baptiste.html",
    dialogue: "내가 네 수호천사다."
  }
  ,
  {
    name:"바스티온" ,
    image:"images/cardimages/bastion.png",
    result:"result/bastion.html",
    dialogue: "쀼 쀼 쀼"
  }
  ,
  {
    name: "브리기테",
    image:"images/cardimages/brigitte.png",
    result:"result/brigitte.html",
    dialogue: "제가 여러분의 방패가 되어드릴게요!"
  },
  {
    name: "둠피스트",
    image:"images/cardimages/doomfist.png",
    result:"result/doomfist.html",
    dialogue: "얼마 전 감금에서 벗어난 둠피스트는 이 세계를 새로운 갈등으로 몰아 넣고, 이를 통해 인류를 더욱 강하게 만들기로 결심했습니다. 둠피스트는 인공신체학으로 끌어올린 탁월한 기동성으로 최전선을 책임지는 강력한 투사로, 원거리에 피해를 주고, 적을 공중으로 띄우고, 대담하게 싸움에 뛰어들 수 있습니다."
  },
  {
    name: "디바",
    image:"images/cardimages/dva.png",
    result:"result/dva.html",
    dialogue: "내 옆에 있으면 지켜줄게!"
  },
  {
    name: "에코" ,
    image:"images/cardimages/echo.png",
    result:"result/echo.html",
    dialogue: "에코를 입력하세요."
  },
  {
    name: "겐지",
    image:"images/cardimages/gengi.png",
    result:"result/gengi.html",
    dialogue:"사이보그 시마다 겐지는 한때 거부했던 자신의 로봇 육체를 받아들였으며, 그 과정에서 한 차원 더 높은 인간성을 갖게 되었습니다."
  },
  {
    name: "한조",
    image:"images/cardimages/hanzo.png",
    result:"result/hanzo.html",
    dialogue:"酒! "
  },
  {
    name: "정커퀸",
    image:"images/cardimages/junkerQueen.png",
    result:"result/junkerQueen.html",
    dialogue:"난 타고난 지도자야!"
  },
  {
    name: "정크랫",
    image:"images/cardimages/junkrat.png",
    result:"result/junkrat.html",
    dialogue:"내가 다루는 폭탄은 말이야. 호주의 장인이 한 땀, 한 땀 노력해서 만든 거라고. 바로 이 몸께서."
  },
  {
    name:"메이" ,
    image:"images/cardimages/mei.png",
    result:"result/mei.html",
    dialogue:"정말 메이~력적이네요!"
  },
  {
    name: "메르시",
    image:"images/cardimages/mercy.png",
    result:"result/mercy.html",
    dialogue:"진찰을 시작해 볼까요?"
  },
  {
    name: "모이라",
    image:"images/cardimages/moira.png",
    result:"result/moira.html",
    dialogue:"난 병도 주고 약도 주지."
  },
  {
    name:"오리사",
    image:"images/cardimages/orisa.png",
    result:"result/orisa.html",
    dialogue:"안아드릴까요?"
  },
  {
    name:"파라",
    image:"images/cardimages/pharah.png",
    result:"result/pharah.html",
    dialogue:"파라 하세요. 두 번 하세요."
  },
  {
    name:"리퍼",
    image:"images/cardimages/reaper.png",
    result:"result/reaper.html",
    dialogue:"흐흐흐흐, 내 안의 어둠이 날뛰는군."
  },
  {
    name:"라인하르트",
    image:"images/cardimages/reinhardt.png",
    result:"result/reinhardt.html",
    dialogue:"으하하하하하! 대장군 라인하르트 나가신다!"
  },
  {
    name:"로드호그",
    image:"images/cardimages/roadhog.png",
    result:"result/roadhog.html",
    dialogue:"갓난 아기한테서 사탕 뺏는 기분이야"
  },
  {
    name:"루시우",
    image:"images/cardimages/rucio.png",
    result:"result/rucio.html",
    dialogue:"요, 요! 리듬에 몸을 맡겨!    "
  },
  {
    name:"시그마",
    image:"images/cardimages/sigma.png",
    result:"result/sigma.html",
    dialogue:"저 선율이 들리나?"
  },
  
  {
    name: "소전",
    image:"images/cardimages/sojourn.png",
    result:"result/sojourn.html",
    dialogue:"제대로 해보자고."
  },
  {
    name: "솔저",
    image:"images/cardimages/soldier.png",
    result:"result/soldier.html",
    dialogue:"노병은 죽지 않는다. 그리고, 사라지지도 않아."
  },
  {
    name: "솜브라",
    image:"images/cardimages/sombra.png",
    result:"result/sombra.html",
    dialogue:"온 세상을 해킹하겠어"
  },
  {
    name: "시메트라",
    image:"images/cardimages/symmetra.png",
    result:"result/symmetra.html",
    dialogue:"내가 당신의 자리를 찾아 주죠."
  },
  {
    name: "트레이서",
    image:"images/cardimages/tracer.png",
    result:"result/tracer.html",
    dialogue:"안녕, 친구들! 해결사가 왔어!"
  },
  {
    name: "키리코",
    image:"images/cardimages/kiriko.png",
    result:"result/kiriko.html",
    dialogue:"こんにちは"
  },
  {
    name: "위도우메이커",
    image:"images/cardimages/widowmaker.png",
    result:"result/widowmaker.html",
    dialogue:"하나의 죽음이 모든 걸 바꿀 수 있지."
  },
  {
    name: "윈스턴",
    image:"images/cardimages/winston.png",
    result:"result/winston.html",
    dialogue:"전 원숭이가 아닙니다."
  },
  {
    name: "레킹볼",
    image:"images/cardimages/wreckingBall.png",
    result:"result/wreckingBall.html",
    dialogue:"누구든 작은 포유류를 건드리면 이렇게 되는 거다."
  },
  {
    name: "자리야",
    image:"images/cardimages/zarya.png",
    result:"result/zarya.html",
    dialogue:"중요한 건 승리가 아니라, 노력입니다. "
  }
]
export default members;