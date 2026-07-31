
const cats = [
    {
        name: "Pepper",
        breed: "Domestic Short hair",
        age: 1,
        adopted: false
    },
{
        name: "Big Boy",
        breed: "Domestic Short Hair",
        age:  4,
        adopted: false
    }

];


const catContainer = document.getElementById("catContainer");

const catForm = document.querySelector("#catForm");

const catNameInput = document.getElementById("catName");
const catBreedInput = document.getElementById("catBreed");
const catAgeInput = document.getElementById("catAge");


function displayCats (){//loopin through each cat

//temp container to hold cat info before adding to page

const catFragment = document.createDocumentFragment();


    for(let i = 0; i < cats.length; i++){
        
        const cat = cats[i];
    
    const catInfo = document.createElement("div");//creating a new div to hoold da cat info
    const catName = document.createElement("h3");//creating a heading elment for cat name
    catName.textContent = cat.name;

    const catBreed = document.createElement("p");//creating paragraph for cat breed
    catBreed.textContent = "Breed: " + cat.breed;

    const catAge = document.createElement("p");//creating paragraph element for cat age
    catAge.textContent ="Age: " + cat.age;

    
    const catStatus = document.createElement("p");//creating paragraph element for cat adoption status
    catStatus.textContent = "Available";

    //creating adopt button for cats
    const adoptButton = document.createElement("button");

    adoptButton.textContent ="Adopt me!";



    adoptButton.addEventListener("click", function(){

const adopted = confirm("Are you sure you would like to adopt this cat?")

        if(!adopted){
            return;
        }

    cat.adopted = true;
    catStatus.textContent = "Adopted!! <3"
    adoptButton.textContent = "Adopted";

    //disabling button after the cat has been adopted
    adoptButton.disabled = true;

    catInfo.style.opacity ="0.5";


    //making a parentnode to move from the adopt button to the cat info container
    const parentContainer = adoptButton.parentNode;

    //changing the style container when cat is adopted
    parentContainer.style.backgroundColor ="#ffe9ec";

});

    //Adding the cat details into the cat information container
    catInfo.appendChild(catName);
    catInfo.appendChild(catBreed);
    catInfo.appendChild(catAge);
    catInfo.appendChild(catStatus);
    catInfo.appendChild(adoptButton);





//Adding the cat information to webpage
    catFragment.appendChild(catInfo);
    

}

//adding all the cats to the page at once
catContainer.appendChild(catFragment);

}



//add new cats from the form!
function addCat(event){
    event.preventDefault();

    const newCatName = catNameInput.value;
    const newCatBreed = catBreedInput.value;
    const newCatAge = catAgeInput.value;


    if(newCatName ==="" || newCatBreed === "" || newCatAge === ""){
        alert("Please add all the information for the cat.");
        return;
    }
    const newCat ={
        name: newCatName,
        breed: newCatBreed,
        age: newCatAge,
        adopted: false
    };
    cats.push(newCat);
    catForm.reset();

    catContainer.innerHTML = "";
    displayCats();
}


catForm.addEventListener("submit", addCat);

displayCats();