import sendRequest from "./send-request";
const BASE_URL = '/api/recipes';

export async function recipesIndexRequest() {
    return sendRequest(BASE_URL);
}

export async function createRecipeRequest(recipeData) {
    return sendRequest(BASE_URL, "POST", recipeData)
}

export async function getRecipeRequest(recipeId) {
    return sendRequest(`${BASE_URL}/${recipeId}`)
}

export async function deleteRecipeRequest(recipeId) {
    return sendRequest(`${BASE_URL}/${recipeId}`, "DELETE")
}

export async function updateRecipeRequest(recipeId, recipeData) {
    return sendRequest(`${BASE_URL}/${recipeId}`, "PUT", recipeData)
}