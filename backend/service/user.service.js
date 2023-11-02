import { users } from "../mockup/user.mockup.js";
import { groups } from "../mockup/groups.mockup.js";

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
        const userApps = groups
            .filter((group) => group.members.includes(user.username))
            .map((group) => {
                const appName = group.name.split("-").pop();
                const appStatus = group.name.includes("IN")
                    ? "Installed"
                    : "Software center";
                return `${appName} (${appStatus})`;
            });
        result.push({
            ...user,
            applications: userApps,
        });
    });

    return result;
}
