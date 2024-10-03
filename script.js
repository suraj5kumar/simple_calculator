// Targeting result screen
let result = window.document.getElementById("result")

// Targeting all buttons
let buttons = document.querySelectorAll(".number")

// Taking a variable to store values on clicking the buttons
let resultValue = ""

// Using for of loop to iterating through the buttons
for (let item of buttons) {
  // Adding eventlistner on each button on clicking to get it's innerText
  item.addEventListener("click", (e) => {
    let text = e.target.innerText

    // Using conditions to perform desired operations
    if (text === "C") {
      resultValue = ""
      result.value = resultValue
    }

    else if (text === "=") {
      // Using condition statement if someone presses the equals button without any value
      if (resultValue === "") {
        result.value = resultValue
      }
      else {
        try {
          // Since in javascript "%" is treated as modulus so searching the value that comes before "%"
          // and dividing it from 100 so that it can be evaluated as percentage
          resultValue = resultValue.replace(/(\d+)%/g, (p1, p) => {
            return p / 100
          })

          // Using eval function to evaluate the values
          resultValue = eval(resultValue)
          result.value = resultValue
        }
        catch {
          result.value = "Error"
        }
      }
    }

    // We have used X in place of multiply so replacing it with * so that it could be evaluated
    else if (text === "X") {
      resultValue += "*"
      result.value = resultValue
    }

    // Deleting the last entered value on clicking backspace
    // As there is no text in that button so using empty string to check the condition
    else if (text === "") {
      resultValue = resultValue.slice(0, -1)
      result.value = resultValue
    }

    else {
      resultValue += text
      result.value = resultValue
    }
  })
}
