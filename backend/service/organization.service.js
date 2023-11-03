import * as organizationUtils from "../utils/organization.utils.js";

export async function getOrganizationData() {
    const organizationData = [
        organizationUtils.getOrganizationNames(),
        organizationUtils.getOrganizationLocations(),
        organizationUtils.getOrganizationManagers(),
    ];

    const [organizationNames, organizationLocations, organizationManagers] =
        await Promise.all(organizationData);

    return organizationUtils.concatenateOrganizationalData(
        organizationNames,
        organizationLocations,
        organizationManagers
    );
}
