/* Your custom app logic goes here */

function openRecipe() {
    const recipe = document.getElementById("recipe").value

    window.location.href = "/recipe/"+recipe;
}