const DOG_URL = "https://dog.ceo/api/breeds/image/random"

const doggos = document.getElementById("dogs-target")

function addNewDoggo(){
    const promise = fetch(DOG_URL)

    promise
    .then(function(response){
        const processingPromise = response.text();
        return processingPromise;
    })
    .then(function(processedReponse){
        const dogObject = JSON.parse(processedReponse);
        const img = document.createElement("img");

        img.src = dogObject.message;
        img.alt = "Cute Doggo";
        doggos.appendChild(img)
    });
}

document.getElementById("dog_button").addEventListener("click", addNewDoggo);