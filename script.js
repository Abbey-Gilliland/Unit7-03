// This code sets the starting point of the variable for age.
let age = 0
// This code allows the button to activate the function "decide".
document.getElementById('submit').addEventListener('click', decide)
// This code takes the value of the text box, turns it into a number and assigns it to our variable.
function decide () {
  age = document.getElementById('your-age').value
  age = parseInt(age)
  // The code goes through if and else statements, so that if the variable of age is in a certain number range, the code will suggest the rating of movie that is best.
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
