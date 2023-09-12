// function grade(score) {
//   score = Math.round(score);
//   if (score >= 80 && score <= 100) {
//     console.log("You got A");
//   } else if (score >= 70 && score <= 79) {
//     console.log("You got B");
//   } else if (score >= 60 && score <= 69) {
//     console.log("You got C");
//   } else if (score >= 50 && score <= 59) {
//     console.log("You got D");
//   } else if (score < 50 && score >= 0) {
//     console.log("You got F");
//   } else {
//     console.log("error: Score must be between 0 and 100.");
//   }
// }

// grade(80);
// grade(79);
// grade(69);
// grade(60.5);
// grade(59);
// grade(49);
// grade(110);
// grade(-10);

function grade(score) {
  score = Math.round(score);
  if (score < 0 || score > 100) {
    console.log("Error: Score must not be less than 0 or more than 100");
  } else if (score >= 80) {
    console.log("You got A");
  } else if (score >= 70) {
    console.log("You got B");
  } else if (score >= 60) {
    console.log("You got C");
  } else if (score >= 50) {
    console.log("You got D");
  } else {
    console.log("You got F");
  }
}

grade(95);
grade(80);
grade(74);
grade(61);
grade(50);
grade(49.5);
grade(23);

grade(101);
grade(-10);
