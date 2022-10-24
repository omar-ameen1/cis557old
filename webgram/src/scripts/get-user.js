export async function getUser(id) {
    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users/" + id, {
        method: "GET",
    })
    return await res.json();
}