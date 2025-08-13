// JSON 

// const { createElement } = require("react");


fetch("data.json") //Fetching data form json file.
    .then (response => response.json()) //Creating a response & seeing if it can be read.
    .then (product => { //If the file is read, the data can be used.
        const container = document.getElementById('json_container'); //Creation of a container to display the cars.

        product.forEach(cars => { //For each car in the json file, it will..

            const card = document.createElement('div'); //Create the div element
            card.classList.add('car_products_container'); //Add the class 'car_products' for styling.
            //Below the code inserts the data in the following order along with the referenced element type.
            card.innerHTML = `
                <img src="${cars.picture}" alt="img of car"></img>
                <h5><span>${cars.car_name}</span></h5> 
                <p>${cars.price}</p>
                <p>${cars.est_MPG_CityHwy}</p>
            `;
            container.appendChild(card); //Then this is all 
        });
    });


    // "car_name": "car2",
    // "price": "$10,000",
    // "est_MPG_CityHwy": "21/24",
    // "features": "...",
    // "condition": "new"