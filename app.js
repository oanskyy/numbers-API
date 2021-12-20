// http://numbersapi.com/

// 1. Get all the DOM elements we need and store them into a variable
const factBox = document.querySelector("p")
const numberInput = document.querySelector("input")
const factButton = document.querySelector("button")

// 2. Functions
factButton.addEventListener("click", getNumber)

// 3. When we click that BTN, what do we want to do?

// --> we want to grab the value of the input, and provide it to that function for fetching the DATA.
// How can we find out the value of the input
// const number = numberInput.value
function getNumber() {
	// Grab the input and convert it to a NUMBER from string
	const number = numberInput.value
	// this number is actually a string so we need to convert it to a number
	const numberFact = parseInt(number)
	getFact(numberFact)
}

// 4. API call | async/await
// 4.1
async function getFact(number) {
	// this function now return a promise due to adding 'async'
	// write all the asynchronous code...
	console.log(" Processing... |  ", number)
	const numbersURL = "http://numbersapi.com/"
	const response = await fetch(`${numbersURL}${number}`, {
		method: "GET",
		headers: {
			"x-requested-with": "text/plain"
		}
	})
	// because we are fetching text we need to specify our headers
	console.log(response)

	const data = await response.text()
	console.log(data)

	// Set the innerHTML to the value of that data
	factBox.innerText = data
}
