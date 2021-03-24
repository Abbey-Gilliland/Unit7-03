let age = 0

document.getElementById('submit').addEventListener('click', decide)

function decide () {
  age = document.getElementById('your-age').value
  age = parseInt(age)
  if (age > 17) {
    document.getElementById('your-movie').innerHTML = 'You can watch a R rated movie alone.'
  } else if (age >= 13) {
    document.getElementById('your-movie').innerHTML = 'You can watch a PG-13 rated movie alone.' 
  } else if (age >= 5) {
    document.getElementById('your-movie').innerHTML = 'You can watch a G rated movie alone.'
  } else {
    document.getElementById('your-movie').innerHTML = 'you are too young to watch a movie.'
  }
}
