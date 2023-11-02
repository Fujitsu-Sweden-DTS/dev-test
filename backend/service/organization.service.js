import * as organizationUtils from "../utils/organization.utils.js";

export async function getOrganizationData() {
    // Fetch data from source
    const organizationNames = organizationUtils.getOrganizationNames();

    const organizationLocations = organizationUtils.getOrganizationLocations();

    const organizationManagers = organizationUtils.getOrganizationManagers();

    const [
        organizationNamesResolve,
        organizationLocationsResovle,
        organizationManagersResolve,
    ] = await Promise.all([
        organizationNames,
        organizationLocations,
        organizationManagers,
    ]);

    // Concatenate organizational data into a tidy collection
    return organizationUtils.concatenateOrganizationalData(
        organizationNamesResolve,
        organizationLocationsResovle,
        organizationManagersResolve
    );
}
