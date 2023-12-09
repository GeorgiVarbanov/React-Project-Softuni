import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/users"

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });
    
    return result;
}

export const register = (email, password, username, profilePicture) => request.post(`${baseUrl}/register`, {
    email,
    password,
    username,
    profilePicture,
});

export const logout = () => request.get(`${baseUrl}/logout`);
