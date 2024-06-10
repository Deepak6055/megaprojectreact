import { Client, Account } from "appwrite";

// Define credentials
const VITE_APPWRITE_URL = "https://cloud.appwrite.io/v1";
const VITE_APPWRITE_PROJECT_ID = "6660331300016e61081d";
const VITE_APPWRITE_DATABASE_ID = "666034440003e458ce05";
const VITE_APPWRITE_COLLECTION_ID = "66603465000142987be5";
const VITE_APPWRITE_BUCKET_ID = "6660369b00293f2a177b";

// Initialize the Appwrite client with credentials
const client = new Client()
    .setEndpoint(VITE_APPWRITE_URL)
    .setProject(VITE_APPWRITE_PROJECT_ID);

// Initialize the Appwrite account object
const account = new Account(client);

// Function to create a dummy account
async function createDummyAccount() {
    try {
        const email = "dummy@example.com";
        const password = "dummyPassword";

        // Call create() method to create a new account
        const createdAccount = await account.create(email, password);
        console.log("Dummy account created successfully!");
        console.log(createdAccount); // Print the created account details
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to check if credentials are valid
async function checkCredentials() {
    try {
        // Call get() method to get the account details
        const result = await account.get();
        console.log("Credentials are valid!");
        console.log(result); // Print the account details
    } catch (error) {
        console.error("Error:", error);
        console.error("Credentials are invalid.");
    }
}

// Call the function to create a dummy account
createDummyAccount()
    .then(() => {
        // Once the dummy account is created, call the function to check credentials
        checkCredentials();
    });
