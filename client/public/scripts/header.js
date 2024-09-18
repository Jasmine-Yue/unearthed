const header = document.querySelector("header");

/*step1:header-container */
//Create a div element with a class name header-container.
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

//Append the header-container element to the header element.
header.appendChild(headerContainer);

/*step2:headerleft */

//Create a div element with a class name header-left.
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

//3.2Append the left and right header div elements to the div with the class name header-container.
headerContainer.appendChild(headerLeft);

//Create an img element and assign its source to logo.png.
const headerLogo = document.createElement("img");
headerLogo.src = "../logo.png"; //'/logo.png'
headerLeft.appendChild(headerLogo);

//Create a h1 element and set its text content to UnEarthed.
const title = document.createElement("h1");
title.textContent = "UnEarthed";
headerLeft.appendChild(title);

//Append the logo and the title to the div with the class name header-left.

/*step3:header right */
//3.1 Create a div element with a class name header-right.
const headerRight = document.createElement("div");
headerRight.className = "header-right";

//3.2Append the left and right header div elements to the div with the class name header-container.
headerContainer.appendChild(headerRight);

/*step4:home */
//4.1 Create a button element and set its text content to Home. Register a click event listener to the button that redirects the window to the root page.
const buttonHome = document.createElement("button");
buttonHome.textContent = "Home";
buttonHome.addEventListener("click", () => {
  window.location.href = "/";
});

//4.2 Append the button to the div with the class name header-right.
headerRight.appendChild(buttonHome);
