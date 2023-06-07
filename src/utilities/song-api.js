import sendRequest from "./send-request";
const BASE_URL = '/api/songs';

export async function songsIndexRequest() {
    return sendRequest(BASE_URL);
}

export async function createSongRequest(songData) {
    return sendRequest(BASE_URL, "POST", songData)
}

export async function getSongRequest(songId) {
    return sendRequest(`${BASE_URL}/${songId}`)
}

export async function deleteSongRequest(songId) {
    return sendRequest(`${BASE_URL}/${songId}`, "DELETE")
}

export async function updateSongRequest(songId, songData) {
    return sendRequest(`${BASE_URL}/${songId}`, "PUT", songData)
}