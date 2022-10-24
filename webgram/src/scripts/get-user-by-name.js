export default async function getUserByName(name) {
const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users?name=" + name, {
        method: "GET",
    })
    return await res.json();
}