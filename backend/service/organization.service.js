import * as organizationUtils from "../utils/organization.utils.js";

export async function getOrganizationData() {
    // Fetch data from source
    /* const organizationNames = await organizationUtils.getOrganizationNames();

  const organizationLocations = await organizationUtils.getOrganizationLocations();

  const organizationManagers = await organizationUtils.getOrganizationManagers(); */

    const [organizationNames, organizationLocations, organizationManagers] =
        await Promise.all([
            organizationUtils.getOrganizationNames(),
            organizationUtils.getOrganizationLocations(),
            organizationUtils.getOrganizationManagers(),
        ]);

    // Concatenate organizational data into a tidy collection
    return organizationUtils.concatenateOrganizationalData(
        organizationNames,
        organizationLocations,
        organizationManagers
    );
}
