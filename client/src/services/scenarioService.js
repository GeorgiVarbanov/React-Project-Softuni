import * as requests from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/scenarios";


export const create = async (gameData) => {
    const result = await requests.post(baseUrl, gameData);

    return result;
}

export const getAll = async () => {
    const result = await requests.get(baseUrl);

    return result;
}

export const getById = async (scenarioId) => {
    const result = await requests.get(`${baseUrl}/${scenarioId}`);
    return result;
}

export const remove = async (scenarioId) => requests.remove(`${baseUrl}/${scenarioId}`);

export const edit = async (scenarioId, scenarioData) => {
    const result = await requests.put(`${baseUrl}/${scenarioId}`, scenarioData);

    return result;
}