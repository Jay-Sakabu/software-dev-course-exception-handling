/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running
*/

// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================

//  Including Prompt for testing purposes
// https://stackoverflow.com/questions/65472329/why-my-javascript-is-showing-reference-error-prompt-is-not-defined
const prompt = require("prompt-sync")({sigint: true});

let animals = [];
let fees = [];
function addAnimal(name, fee) {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee (Adoption fee must be Greater than or equal to 0!");
    }
    animals.push(name);
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = prompt("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            let animal = prompt("Enter the animal's name: "); 
            let fee;
            do
            {
                let feeInput = prompt("Enter the adoption fee: ").trim();
                fee = Number(feeInput)
            } while(isNaN(fee)); // Change to "do-while" to ensure that fee is evaluated and always a number
            

            try {
                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            let animal = prompt("Enter the animal's name to find its adoption fee: ");

            try {
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        throw new Error("Unexpected error:", err.message); //Throw error instead of console logging, to ensure loop breaks on error
    }
}

// ============================================
// 🧩 Problems to Solve
// ============================================

/*
🔹 Invalid Input Errors:
- What if the user enters a negative fee?
- What if the animal name is blank?
- What if an animal isn't found?

🔹 Code Flow Problems:
- What happens when an exception is thrown?
- Does the rest of the program continue?

🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/
