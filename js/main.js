var elList = document.querySelector(".js-list");

for (let i = 0; i < pokemons.length; i++) {
   // <====Element create ====>
  var newItem = document.createElement("li");
  var newImg = document.createElement("img");
  var newSpan = document.createElement("span");
  var newHeading = document.createElement("h3");
  var newText = document.createElement("p");
  
  newImg.textContent = `${pokemons[i].img}`;
  newSpan.textContent = `${pokemons[i].id}`;
  newHeading.textContent = `${pokemons[i].type}`;
  newText.textContent = `${pokemons[i].candy}`;
  
  newImg.src = `${pokemons[i].img}`
 
   // <===Style to give====>
  newItem.style.display = "flex";
  newItem.style.flexDirection = "column";
  newItem.style.textAlign = "center";
  newItem.style.alignItems = "center";
  newItem.style.marginBottom = "30px";
  newItem.style.width = "270px";
  newItem.style.borderRadius = "20px";
  newItem.style.padding = "40px 10px";
  newItem.style.backgroundColor = "rgb(37, 223, 223)";
  newItem.style.position = "relative";
  newItem.setAttribute("class", "item");
  
  newImg.style.width = "168px";
  newImg.style.height = "168px";
  newImg.style.transition = "all 0.5s ease";
  
  newSpan.style.position = "absolute";
  newSpan.style.top = "10px";
  newSpan.style.left = "20px";
  newSpan.style.fontWeight = "bolder";

   // <====AppendChild====>
  newImg.setAttribute("class", "images"); 
  newItem.setAttribute("class", "item");

  // <====AppendChild do====>
  newItem.appendChild(newSpan);
  newItem.appendChild(newImg); 
  newItem.appendChild(newHeading);
  newItem.appendChild(newText);
  elList.appendChild(newItem);
}
