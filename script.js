console.log("Script running...")
// Task 1: Intro section
// Select the location button
let location2 = 
  document.querySelector("#location")
console.log(location2)

// Select the empty p tag under the button
let p =
  document.querySelector("#locationText")
console.log(p)

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
location2.addEventListener("click", function (event){
  p.textContent = "1300 Boynton ave (moving soon!)"
})


// Task 2: Our Values section
// Select the h3 with S under "Our Values"

let h3 = 
  document.querySelector("#score1")
console.log(h3)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"

h3.addEventListener("click", function (event){
  p.textContent = "Self Awareness"
})


// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this
let c = 
  document.querySelector("#score2")
console.log(c)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"
c.addEventListener("click", function (event){
  c.textContent = "Consistency"
})



// Task 3: Uniform section
// Select the joggers image
let image = 
  document.querySelector("#joggers")
console.log(image)

// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp

image.addEventListener("mouseout", function (event){
  image.src = "joggers-back.webp"
})


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp
h3.addEventListener("click", function (event){
  p.textContent = ("Self Awareness")
})



// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)

let o = document.querySelector("#score3")
console.log(o)
o.addEventListener("click", function (event){
  o.textContent = ("Ownership")
})

let r = document.querySelector("#score4")
console.log(r)
r.addEventListener("click", function (event){
  rtextContent = ("Resilience")
})

let e = document.querySelector("#score5")
console.log(e)
e.addEventListener("click", function (event){
  e.textContent = ("excellence")
})
// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)



let image2 = document.querySelector("#sweatshirt")
console.log(image2)
image2.addEventListener("mouseon", function (event){
  image2.textContent = ("sweater-back.webp")
})

image2.addEventListener("mouseoff", function (event){
  image2.textContent = ("sweater-front.webp")
})