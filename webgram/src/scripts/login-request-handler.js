const bcrypt = require('bcryptjs');

export async function validateLoginRequest(email, password) {
    console.log(email);
    console.log(password);
    const user = await getUserByEmail(email);
    console.log(bcrypt.hashSync(password, 10));
    console.log(user);
    if (!user) {
        return null;
    }
    console.log(user.password);
    if (await bcrypt.compareSync(password, user.password)) {
        return user.id;
    } else {
        return null;
    }
}

async function getUserByEmail(email) {
    const res = await fetch("https://6356af7b9243cf412f8b2fba.mockapi.io/users", {
        method: "GET",
    })
    const users = await res.json();
    return users.find(user => user.email === email);
}