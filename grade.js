function grade(score) {
  score = Math.round(score);
  if (score >= 80 && score <= 100) {
    console.log("You got A");
  } else if (score >= 70 && score <= 79) {
    console.log("You got B");
  } else if (score >= 60 && score <= 69) {
    console.log("You got C");
  } else if (score >= 50 && score <= 59) {
    console.log("You got D");
  } else if (score < 50 && score >= 0) {
    console.log("You got F");
  } else {
    console.log("error: Score must be between 0 and 100.");
  }
}

grade(80);
grade(79);
grade(69);
grade(60.5);
grade(59);
grade(49);
grade(110);
grade(-10);
