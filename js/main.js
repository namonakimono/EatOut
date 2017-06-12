$(document).ready(function () {
});

function getLunchMenu() {
  var idx = randRange(0,(lunchList.length - 1));
  var selected = lunchList[idx];
  console.log(selected);
  $('#lunch').prepend(selected + "<br>");
  return selected;
}

function getDinnerMenu() {
  var idx = randRange(0,(dinnerList.length - 1));
  var selected = dinnerList[idx];
  console.log(selected);
  $('#dinner').prepend(selected + "<br>");
  return selected;
}

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

lunchList = new Array
  ("川府", "上海庭", "川府点心（秋）","每日新闻の楼顶"
  ,"正直食堂","passport随便"
  ,"すきや","大戸屋","やよい軒","炒饭+担担面"
  ,"ゴーゴーカレー","印度咖喱"
  ,"サイゼリヤ","大阪烧"
  ,"鮨"
  ,"三楼"
  )

dinnerList = new Array
  ("ガストー","豚大学"
  ,"すきや","とんかつ","大戸屋","やよい軒","炒饭+担担面"
  ,"ゴーゴーカレー","印度咖喱"
  ,"花丸うどん"
  ,"新油そば","古い油そば", "混ぜそば"
  ,"小星星","成都担々麺","可以","背脂面","大蒜面","内田家","横浜拉面","鸡白汤拉面"
  ,"サイゼリヤ","大阪烧"
  ,"鮨"
  ,"三楼"
  )

