function solution(polynomial) {
  var answer = "";
  console.log(polynomial.split("+"));
  let x_value = 0;
  let number_value = 0;
  polynomial.split(" + ").forEach((data) => {
    if (data.includes("x")) {
      const xArr = data.split("x");

      if (xArr[0] === "") {
        x_value += 1;
      }

      if (xArr[0] !== "") {
        x_value += Number(xArr[0]);
      }
    }

    if (!data.includes("x")) {
      number_value += Number(data);
    }
  });
  console.log(x_value);
  console.log(number_value);

  if (x_value !== 0 && number_value !== 0) {
    if (x_value === 1) {
      return `x + ${number_value}`;
    }

    return `${x_value}x + ${number_value}`;
  }

  if (x_value !== 0 && number_value === 0) {
    if (x_value === 1) {
      return "x";
    }

    return `${x_value}x`;
  }

  if (x_value === 0 && number_value !== 0) {
    return `${number_value}`;
  }

  if (x_value === 0 && number_value === 0) {
    return "0";
  }
}
