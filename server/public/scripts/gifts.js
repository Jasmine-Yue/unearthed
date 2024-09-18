// Now, let's retrieve the data from the /gifts endpoint and display the data on the website.

const renderGifts = async () => {
  // In the body of the renderGifts() function, use fetch() to retrieve the gift data at the /gifts endpoint, then parse the response as a JSON.
  const response = await fetch("/gifts");
  const data = await response.json();

  //Create a variable called mainContent that points to the element with the ID main-content.
  const mainContent = document.querySelector("#main-content");

  if (data) {
    //use map() to add an HTML card to the DOM for each gift in the data
    data.map((gift) => {
      // For each gift, create a div with the class name card.
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      mainContent.appendChild(cardEl);

      //Create another div with the class name top-container.
      const topContainer = document.createElement("div");
      topContainer.className = "top-container";
      cardEl.appendChild(topContainer);

      //Create another div with the class name bottom-container.
      const bottomContainer = document.createElement("div");
      bottomContainer.className = "bottom-container";
      cardEl.appendChild(bottomContainer);

      //Set the background image of the top-container element to the gift's image.
      topContainer.style.backgroundImage = `url(${gift.image})`; //`url(${gift.image})`; //gift.image;
      topContainer.style.backgroundSize = "cover"; // Ensures the image covers the entire container
      topContainer.style.backgroundPosition = "center"; // Centers the image within the container
      topContainer.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
      // Create an h3 element, and set its text content to the gift's name. Then, append it to the bottom-container element.
      const cardText = document.createElement("h3");
      cardText.textContent = gift.name;
      bottomContainer.appendChild(cardText);
      //Create a p element, and set its text content to the gift's price. Then, append it to the bottom-container element.
      const cardPrice = document.createElement("p");
      cardPrice.textContent = gift.pricePoint;
      bottomContainer.appendChild(cardPrice);
      // Create another p element, and set its text content to the gift's audience.
      //Then, append it to the bottom-container element.
      const cardAudience = document.createElement("p");
      cardAudience.textContent = gift.audience;
      bottomContainer.appendChild(cardAudience);

      //Create an a element, and set its text content to Read More >. Set the href of the link to /gifts/gift.id.
      // Set the role to button.
      //Then, append it to the bottom-container element.
      const cardLink = document.createElement("a");
      cardLink.textContent = "Read More >";
      cardLink.href = `/gifts/${gift.id}`;
      cardLink.role = "button";
      bottomContainer.appendChild(cardLink);
      //Append the top-container and bottom-container elements to the card.
    });
  } else {
    //adds an h2 element with the text No Gifts Available 😞 to mainContent.
    const noContentEl = document.createElement("h2");
    noContentEl.textContent = "No Gifts Available";
    mainContent.appendChild(noContentEl);
  }
};
//At the end of the file (outside of the renderGifts() function definition), call the renderGifts() function.

//reate a variable called requestedURL that extracts the portion of the URL after the /.
let requestedURL = window.location.href.split("/").slice(3).join("/");

console.log("current:", window.location.href);
console.log("split:", window.location.href.split("/"));
console.log("requestUrl:", requestedURL);

if (requestedUrl) {
  console.log("404");
  window.location.href = "../404.html";
} else {
  console.log(" not 404");
  renderGifts();
}
