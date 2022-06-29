
var elSelect = document.querySelector(".js-select");
var elList = document.querySelector(".js-list");
let pokemonOption = []
function ixchamlash(array, node) {
  elSelect.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    for (let e of array[i].type) {     
      pokemonOption.push(e)     
    }
  

    // <====Element create ====>
    var newItem = document.createElement("li");
    var newBox = document.createElement("div");
    var newImg = document.createElement("img");
    var newSpan = document.createElement("span");
    var newHeading = document.createElement("h3");
    var newHeight = document.createElement("strong");
    var newWeight = document.createElement("strong");
    var newTime = document.createElement("time");
    var newText = document.createElement("p");
    // var newText1 = document.createElement("p");

    newImg.textContent = `${array[i].img}`;
    newSpan.textContent = `${array[i].id}`;
    newHeading.textContent = `${array[i].name}`;
    newText.textContent = `${array[i].candy}`;

    newTime.textContent = `${array[i].spawn_time}`;
    newHeight.textContent = `${array[i].height}`;
    newWeight.textContent = `${array[i].weight}`;

    newImg.src = `${array[i].img}`


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

    newBox.style.display = "flex"
    newWeight.style.marginLeft = "30px"

    newTime.style.padding = "7px 15px"
    newTime.style.backgroundColor = "rgb(43, 134, 127)"
    newTime.style.color = "#fff"
    newTime.style.borderRadius = "6px";
    newTime.style.marginTop = "20px"
    newTime.style.marginRight = "98px"


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
    newBox.appendChild(newHeight);
    newBox.appendChild(newWeight);
    newItem.appendChild(newBox);
    newItem.appendChild(newTime);
    node.appendChild(newItem);
  }

  let tywpe = new Set(pokemonOption);

  for (let i of tywpe) {
    var newOption = document.createElement("option");

    newOption.textContent = i
    newOption.setAttribute("value", i)
    elSelect.appendChild(newOption)
  }
}

ixchamlash(pokemons, elList)

var result = [];
elSelect.addEventListener("change", function () {
  result = [];
  elList.innerHTML = ""
  let selectVal = elSelect.value;
  pokemons.forEach(poke => {
    if (poke.type.includes(selectVal)) {
      result.push(poke)
    }
  });
  ixchamlash([...new Set(result)], elList)
})
