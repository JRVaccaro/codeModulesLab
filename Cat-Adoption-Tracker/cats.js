
 export const cats = [
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

export function displayCats(){
    for(let i = 0; i < cats.length; i++){
        console.log(cats[i].name);
        console.log(cats[i.breed]);
        console.log(cats[i.age]);
    }
}