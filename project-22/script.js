// when a user click on the submit button, we want to save the input name

// select the button first, do that by using query selector
// select the button using query selector

const btnE1 = document.querySelector("button");
// we want the reference of the input and the list(ul)
const inputE1 = document.querySelector("input");
const listE1 = document.querySelector("ul");
// now we have the reference of all the element we need

// we want to do something when the button is clicked,lets use eventlistener
btnE1.addEventListener("click", () => {
  // we've used arrow func, in here we want to get the value from the input
  // we want to get the input value
  const inputValue = inputE1.value;
  // storing the inputE1 value to a variable

  // next thing we want is to store those input values in a list manner one by one
  //   listE1.innerHTML = `<li>${inputValue}</li>`;

  // we can provide the html that we want to insert, since those values are getting stored inside a variable, lets use backticks
  // inside backticks, wee're using $ and {input variable name }

  // so basically, on the click of the button, we're taking the input data and storing them into a variable first
  // then next step, we're storing those input elements in a list order

  /* here, we've used innerHTML in line no 20 and that makes the values replace the earlier value, when a new input is given, inspite of getting shown at the adjacent place, it replaces the earlier element
    BUt we want the more than one input elements to get stored adjacentwise and not rreplace each other. 
    For that, we'll not use innerHTMl, we'll use insertAdjacentHTML

    */

  listE1.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);
  // its syntax is little diff, where you want to store input elements- before end and then we put the list thing
});
