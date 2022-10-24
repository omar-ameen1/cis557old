import getUserByName from "./get-user-by-name";

export default async function getUserPostsByName(name) {
    const user = await getUserByName(name);
    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users/" + user[0].id + "/posts", {
        method: "GET",
    })
    return await res.json();
}