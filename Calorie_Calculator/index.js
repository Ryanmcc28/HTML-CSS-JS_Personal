function findWeight(weight, height, age, sex, active) {
  console.log(weight);
  console.log(height);
  console.log(age);
  console.log(sex);
  let mult;

  switch (active) {
    default:
      mult = 1.2;
      break;
    case "lightly_active":
      mult = 1.375;
      break;
    case "moderately_active":
      mult = 1.55;
      break;
    case "very_active":
      mult = 1.725;
      break;
    case "super_active":
      mult = 1.9;
      break;
  }

  switch (sex) {
    case "male":
      console.log(12);
      return (10 * weight + 6.25 * height - 5 * age + 5) * mult;
    default:
      return (10 * weight + 6.25 * height - 5 * age + 161) * mult;
  }
}

function press() {
  let userSex = document.getElementById("gender").value;
  let userWeight = document.getElementById("weight").value;
  let userHeight = document.getElementById("height").value;
  let userAge = document.getElementById("age").value;
  let userActivity = document.getElementById("activity").value;

  let cals = findWeight(
    Number(userWeight),
    Number(userHeight),
    Number(userAge),
    userSex,
    userActivity
  );

  document.getElementById("result").textContent = `${cals.toFixed(0)} Calories`;
  console.log(cals);
}
