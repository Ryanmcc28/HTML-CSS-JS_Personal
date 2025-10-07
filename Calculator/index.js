let numOrder = "";

function press1() {
  numOrder += "1";
  document.getElementById("Screen").textContent = numOrder;
}

function press2() {
  numOrder += "2";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press3() {
  numOrder += "3";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press4() {
  numOrder += "4";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press5() {
  numOrder += "5";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press6() {
  numOrder += "6";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press7() {
  numOrder += "7";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press8() {
  numOrder += "8";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function press9() {
  numOrder += "9";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function Press0() {
  numOrder += "0";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function pressP() {
  numOrder += "+";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function pressM() {
  numOrder += "-";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function pressT() {
  numOrder += "x";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function pressD() {
  numOrder += "%";
  console.log(numOrder);
  document.getElementById("Screen").textContent = numOrder;
}

function pressC() {
  numOrder = "";
  console.log(numOrder);
  document.getElementById("Screen").textContent = "Enter Numbers";
}

function pressE() {
  let tempNum = "";

  if (numOrder == "") {
    document.getElementById("Screen").textContent = "Please enter numbers";
  } else {
    try {
      for (let index = 0; index < numOrder.length; index++) {
        let element = numOrder[index];
        switch (element) {
          case "x":
            tempNum += "*";
            break;
          case "%":
            tempNum += "/";
            break;
          default:
            tempNum += element;
        }
      }
      document.getElementById("Screen").textContent = eval(tempNum);
    } catch (error) {
      numOrder = "";
      document.getElementById("Screen").textContent = "Error";
    }

    numOrder = "";
  }
}
