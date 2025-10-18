// // object de-structure
// let course = {
//     courseName: "Mathematics Behind ML",
//     price: "999",
//     courseInstructor: "C S Sastry"
// }

// let {courseInstructor: CI} = course
// console.log(CI)

// APIs
// Step 1: Store the API URL in a variable
const apiURL = "https://api.github.com/users/parthib105";

// Wrap everything in an async function
async function fetchGitHubProfile() {
  try {
    // Step 2: Fetch the data and wait for the response
    const response = await fetch(apiURL);

    // Step 3: Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Step 4: Convert response into JSON
    const data = await response.json();

    // Step 5: Print the data
    console.log("✅ GitHub Profile Data:");
    console.log(data);

    // Access specific values
    console.log("Name:", data.name);
    console.log("Username:", data.login);
    console.log("Public Repos:", data.public_repos);
  } catch (error) {
    console.error("❌ Error fetching GitHub data:", error);
  }
}

// Call the async function
fetchGitHubProfile();

