// nodes
let form = document.querySelector("form");

// event
document.addEventListener("DOMContentLoaded", function () {
  get_range();
});
form.addEventListener("submit", check);
document.querySelector("#try").addEventListener("click", function () {
  location.reload();
});

// function

let low, high, value, input, count;
function get_range() {
  low = Math.floor(Math.random() * 101);
  high = low + 10;
  value = Math.floor(Math.random() * (high - low + 1)) + low;
  document.querySelector("#tr").innerHTML = `<td>${low}</td>
                <td>${high}</td>`;
  // console.log(low, high, value);
  count = 3;
}

function check(e) {
  input = e.target[0].value;
  let result = validate(input);
  if (result == 0 || result == -1) {
    count = count - 1;
    if (count == 0) {
      if (confirm("Game Over. 0 attempt left. Try Again?")) {
        get_range();
      } else {
        document.querySelector("input").disabled = true;
      }
      console.log(count);
    } else {
      if (result == 0) {
        alert("Higher! Attempts remaining: " + count);
        console.log(count);
      } else if (result == -1) {
        alert("Lower! Attempts remaining: " + count);
        console.log(count);
      }
    }
  } else if (result == 1) {
    alert("You won!");
    get_range();
  } else {
    console.log("bla");
  }
  e.preventDefault();
}

function validate(input) {
  if (input == value) {
    return 1;
  } else if (input < value) {
    return 0;
  } else if (input > value) {
    return -1;
  }
}
