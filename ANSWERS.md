###  link to run page:
https://noor1449.github.io/tipcalculator_webpage/index.html
OR
https://6a148ee11fc19be887e2d93b--super-creponne-dc2a59.netlify.app/
### 1. How to Run
To run this project on a fresh machine, these steps are followed:
1. Make a folder/directory in vscode named tip calculator.
2. Ensured that `index.html`, `style.css`, `file.js`, `READMe.md.js`and `ANSWERS.md` are all stored in the exact same directory.
3. Simply double-click `index.html` or open it using any modern web browser (e.g., Google Chrome,etc) to run the application entirely locally. No installation commands or local development servers are required.

IMPORTANT POINTS:I modified this code many times in vscode and the modified commits were shown on git(the software i installed) but its not ahowing here.
### 2. Stack & Design Choices
1. Frontend Stack Choice: I chose a vanilla web stack consisting of pure HTML5, CSS3, and modern JavaScript (ES6+). Since this is a lightweight, single-screen utility app without complex state management or external API endpoints, relying on heavy frameworks like React or Vue would add unnecessary bundle size and build complexity. Plain JavaScript easily handles dynamic DOM manipulation with extreme efficiency.
2. Visual/Interaction Decision 1 (Instant Live Feedback): I completely omitted a traditional "Calculate" button in favor of attaching `oninput` event listeners directly to the input fields. This decision impacts the main calculation engine. It optimizes user flow by providing immediate, real-time feedback as the user types, mimicking a native mobile application feeling.
3. Visual/Interaction Decision 2 (Dynamic Error Subtext):Instead of utilizing browser-default tooltips or disruptive window alert popups, I placed a dedicated `<p>` error element right below the inputs. When an invalid configuration occurs (like zero people or a negative bill), the calculations immediately halt, and clean red text gracefully appears inside the layout. This ensures the screen layout is never severely disrupted while keeping the user informed.



### 3. Responsive \& Accessibility
1. 360px Phone vs. 1440px Laptop Behavior:On a 1440px wide desktop browser, the app layout displays as a clean, centered card container layout with fixed bounds to maintain visual structure. On a narrow 360px wide phone, the core container dynamically shrinks to fit 100% of the viewport width, and the input fields expand to fill the available screen space so they remain easily tappable. 
2. Accessibility Consideration Handled: I implemented custom semantic markup via HTML `<label>` elements explicitly linked to their corresponding input fields\[cite: 13]. \[cite\_start]This structural choice aids screen readers in communicating context to visually impaired individuals. Additionally, using standard input types allows native mobile devices to automatically open numeric keypads.

### 4. AI Usage
1. Tool Used: Gemini (Google)
2. Prompts Asked: I asked the AI how to solve a `NaN` math bug occurring during negative input sequences, how to smoothly refactor the app to completely remove the manual submission button for instant updates, and how to format a structured template for the final project README.
3. AI Output Provided: The AI supplied modified JavaScript input handler scripts that separated structural logic, introduced defensive type conversion, and initialized empty string resets.
4. Specific Tweaks Made to AI Output: The initial code structure provided by the AI automatically forced a hard validation failure message the exact moment a user backspaced or cleared out a field entirely. I intentionally modified this behavior by injecting an explicit empty-string clause (`if (billInput === "")`) into the control flow. This tweak ensures that clearing a field seamlessly resets the calculated display dashboard cleanly back to `0.00` rather than flashing distracting validation error warnings while the user is actively editing data.

### 5. Honest Gap \& Rounding Policy
1. Rounding Policy: I implemented a strict mathematical policy using JavaScript's built-in `.toFixed(2)` method to format monetary outputs. When splits result in extended decimal chains (e.g., a three-way split creating infinite fractional cents), the app rounds to the nearest standard cent. While rounding to the nearest cent can theoretically result in a microscopic 1-cent discrepancy for the overall group, it remains the standard, most readable presentation structure for consumers interacting with financial interfaces.
2. Honest Gap (Unpolished Area): If given another day to polish this submission, I would implement preset shortcut buttons for tip percentages (such as 10%, 15%, and 20%) alongside a dedicated global app reset buttonWhile the custom field works perfectly for all edge cases, adding clickable quick-select preset tiles would greatly increase convenience for everyday users trying to rapidly calculate typical restaurant tips.
