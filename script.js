let bacon = 0
document.getElementById('press').addEventListener('click', myInput)
function myInput () {
  bacon = document.getElementById('start').value
  bacon = parseInt(bacon)
  if (bacon < 0) {
    alert('the interger is negative')
  } else {
    alert('the interger is positive')
  }
}
