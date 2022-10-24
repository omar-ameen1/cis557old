const bcrypt = require('bcryptjs');

export async function registerUser(email, username, password) {
    console.log(email);
    console.log(username);
    console.log(password);

    if (await getUserByEmail(email)) {
        return null;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);

    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            username: username,
            password: hashedPassword
        })
    });

    return res.status === 201;
}

async function getUserByEmail(email) {
    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users", {
        method: "GET",
    })
    const users = await res.json();
    return users.find(user => user.email === email);
}