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
        var groupsResult = [];
        groups.forEach((group) => {
            if (group.members.includes(user.username)) {
                var prefix = group.name.split("-", 3)[2];
                var suffix = group.name.includes("APP-IN")
                    ? " (Installed)"
                    : " (Software Center)";
                var updatedName = prefix + suffix;
                groupsResult.push(updatedName);
            }
        });
        result.push({
            ...user,
            applications: groupsResult,
        });
    });
    return result;
}
