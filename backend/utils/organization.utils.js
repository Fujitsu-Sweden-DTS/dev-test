/**
 * Utility functions to get organizational data.
 * No need to modify this to solve the slow organizations task.
 */

import {
    organizationLocations,
    organizationManagers,
    organizationNames,
} from "../mockup/organizations.mockup.js";

export async function getOrganizationNames() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return organizationNames;
}

export async function getOrganizationLocations() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return organizationLocations;
}

export async function getOrganizationManagers() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return organizationManagers;
}

export function concatenateOrganizationalData(
    organizationNames,
    organizationLocations,
    organizationManagers
) {
    let result = [];
    for (let orgName of organizationNames) {
        let orgLoc = organizationLocations.find(
            (orgLoc) => orgLoc.id == orgName.id
        );
        let orgMan = organizationManagers.find(
            (orgMan) => orgMan.id == orgName.id
        );
        result.push({
            id: orgName.id,
            name: orgName.name,
            location: orgLoc.location,
            manager: orgMan.manager,
        });
    }
    return result;
}
