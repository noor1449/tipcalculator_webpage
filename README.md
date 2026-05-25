## Instant-Update Tip Calculator

A  lightweight, and responsive web application that calculates tips, grand totals, and splits costs dynamically in real-time. No "Calculate" button required,the math updates the exact millisecond you type.

## Features

Real-Time Calculations: Updates instantly as we type via JavaScript `oninput` event listeners.
Built-in Safety Guards:Prevents `NaN` (Not a Number) errors or `Infinity` glitches when fields are left empty or cleared.
Error Validation:Displays helpful error messages instantly if negative values are typed.
Smart Per-Person Split:Automatically splits the entire grand total among the group, safely defaulting to 1 person behind the scenes if the field is left blank to avoid broken math.
Clean Formatting:All financial results are automatically rounded and displayed to 2 decimal places (e.g., `12.50`).

## Project Structure

```text
├── index.html   # Structure of the calculator page
├── style.css    # Custom UI and layout styling
└── file.js      # Core logical engine handling validation & math
└── README.md    # A readme file containing minor working of webpage
└── ANSWERS.md   # Containing some logical Answers for assessment