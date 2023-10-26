/**
 * Groups can be used to distribute windows application to users.
 * If a user is member of a group the application would be installed automatically on the computer or published in software center where the user can install the application.
 * The group name uses a namn standard that includes the name of the application and an intent(if the application is installed or published in software center)
 */
export const groups = [
  { name: "APP-IN-Microsoft Word", members: ["A01", "A03"] },
  { name: "APP-SC-Microsoft Word", members: ["A02"] },
  { name: "APP-IN-Adobe Photoshop", members: ["A02"] },
  { name: "APP-SC-Adobe Photoshop", members: [] },
];
