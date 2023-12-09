import * as requests from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (scenarioId, text) => {
    const result = await requests.post(baseUrl, { scenarioId, text });

    return result;
}

export const getAllComments = async (scenarioId) => {
    const query = new URLSearchParams({
        where: `scenarioId="${scenarioId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await requests.get(`${baseUrl}?${query}`);

    return result;
}