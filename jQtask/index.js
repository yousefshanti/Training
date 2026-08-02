
function moveToRight() {
  if ($(".block1").children().length > 0) {
    $(".block1").children().first().appendTo(".block2");
  } else {
    alert("There are no more boxes to move");
  }

}

function moveToLeft() {
  if ($(".block2").children().length > 0) {
    $(".block2").children().first().appendTo(".block1");
  } else {
    alert("There are no more boxes to move");
  }
}
