export default async function createPost(data, userid) {
    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users/" + userid + "/posts", {
        method: "POST",
        body: JSON.stringify(data)
    });
    return await res.json();
}