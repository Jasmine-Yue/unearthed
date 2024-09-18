const renderGift = async () => {
  
    const giftContent = document.getElementById("gift-content");

  // parse the ID as an int from the URL.
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch(`/gifts`);
  const data = await response.json();

  // check if data is not null. If so, find the gift in the gift data that has the same ID as the requested ID.
  if (data) {
    let gift;
    gift = data.find((gift) => gift.id === requestedID);

    if (gift) {
      const imageEl = document.querySelector("#image");

      //console.log("src:", `url(${gift.image})`);

      imageEl.src = `${gift.image}`;

      const nameEl = document.querySelector("#name");
      nameEl.textContent = gift.name;

      const submittedByEl = document.querySelector("#submittedBy");
      submittedByEl.textContent = gift.submittedBy;

      const submittedOnEl = document.querySelector("#submittedOn");
      submittedOnEl.textContent = gift.submittedOn;

      const pricePointEl = document.querySelector("#pricePoint");
      pricePointEl.textContent = gift.pricePoint;

      const audienceEl = document.querySelector("#audience");
      audienceEl.textContent = gift.audience;

      const descriptionEl = document.querySelector("#description");
      descriptionEl.textContent = gift.description;
    }
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Gifts Available 😞";
    giftContent.appendChild(message);
  }
};

renderGift();
