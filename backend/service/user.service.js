import { users } from "../mockup/user.mockup.js";
import { groups } from "../mockup/groups.mockup.js";
import { application } from "express";

export async function getUsers() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return users;
}

export function getSummedAge() {
    const summedAge = users.reduce((accumulator, user) => {
        //Age can be a number or "unknown"
        if (Number.isInteger(user.age)) {
            return (accumulator += user.age);
        }
        return accumulator;
    }, 0);

    return { result: `Summed age is ${summedAge}` };
}

export function getUsersIncludingApplications() {
    var result = [];
    users.forEach((user) => {
        const userApplications = [];
        groups.forEach((group) => {
            if (group.members.includes(user.username)) {
                const applicationName = group.name.split("-").pop();
                const applicationStatus = group.name.includes("IN")
                    ? "(Installed)"
                    : "(Software center)";
                userApplications.push(
                    applicationName + " " + applicationStatus
                );
            }
        });
        result.push({
            ...user,
            applications:
                userApplications /* ["Microsoft Word (Installed)", "Adobe Photoshop (Software center)"] */,
        });
    });
    return result;
}
