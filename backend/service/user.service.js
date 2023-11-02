import { users } from "../mockup/user.mockup.js";

export async function getUsers() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return users;
}

export function getSummedAge() {
    const summedAge = users.reduce((accumulator, user) => {
        //Age can be a number or "unknown"
        if (Number.isInteger(user.age)) {
            return accumulator + user.age;
        }
        return accumulator;
    }, 0);

    return { result: `Summed age is ${summedAge}` };
}

export function getUsersIncludingApplications() {
    var result = [];
    users.forEach((user) => {
        result.push({
            ...user,
            applications: [
                "Microsoft Word (Installed)",
                "Adobe Photoshop (Software center)",
            ],
        });
    });
    return result;
}
