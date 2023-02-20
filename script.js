/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

async function carList() {
  try {
    let response = await fetch("./cars.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let result = await response.json();
      console.log(result);

      result.forEach((element) => {
        let carCard = document.createElement("div");
        carCard.classList.add("carCard");

        let brandBox = document.createElement("h2");
        brandBox.textContent = element.brand;

        let modelBox = document.createElement("p");
        modelBox.textContent = element.models;

        carCard.append(brandBox, modelBox);
        document.querySelector("#output").append(carCard);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

carList();
