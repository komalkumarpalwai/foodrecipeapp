let btn = document.getElementById("btn");
let searchbox = document.querySelector(".searchbox");
let recipe = document.querySelector(".recipe-container");

const fetchRecipes = async (query) => {
  
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipe.innerHTML = '';

    if (response.meals) {
        response.meals.forEach(meal => {
            const recipediv = document.createElement('div');
            recipediv.classList.add('recipe');
            recipediv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strArea}</p>
                <p>${meal.strCategory}</p>`;
            recipe.appendChild(recipediv);
        });
    } else {
        // If no meals found, display a message
        recipe.innerHTML = '<p>No recipes found</p>';
    }
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("btn clicked");
    const searchinput = searchbox.value.trim();
    if (searchinput.length === 0) {
       
        recipe.innerHTML = '<div class="recipe"><h3>Enter a recipe name to search</h3></div>';
    } else {
     
        fetchRecipes(searchinput);
    }
});
