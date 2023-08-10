// Get the table elements
const tableHead = document.querySelector("#report-top");
const tableBody = document.querySelector("#pagingBody");

// Add "Conversion Rate" column to the table header
const conversionRateHeaderCell = document.createElement("th");
conversionRateHeaderCell.textContent = "Conversion Rate";
tableHead.querySelector("tr").appendChild(conversionRateHeaderCell);

// Loop through each row in the table body and calculate conversion rate
const rows = tableBody.querySelectorAll("tr");
rows.forEach(row => {
    // Get values for calculations
    const clicksCell = row.querySelector(".ar:nth-child(9)");
    const conversionsCell = row.querySelector(".ar:nth-child(10)");
    
    const clicks = parseFloat(clicksCell.textContent.replace(/[^0-9.-]+/g, ""));
    const conversions = parseFloat(conversionsCell.textContent.replace(/[^0-9.-]+/g, ""));
    
    // Calculate conversion rate
    const conversionRate = (conversions / clicks) * 100;
    
    // Create a new cell for conversion rate
    const conversionRateCell = document.createElement("td");
    conversionRateCell.textContent = `${conversionRate.toFixed(2)}%`;

    // Apply CSS styling to the cell
    conversionRateCell.style.textAlign = "right"; // Align numbers to the far right

    // Apply background color only to the Conversion Rate cell
    conversionRateCell.style.backgroundColor = "#f0f8ea"; // Light green background color

    // Loop through other cells in the row and apply white background color
    row.querySelectorAll("td").forEach(cell => {
        if (cell !== conversionRateCell) {
            cell.style.backgroundColor = "white";
        }
    });
    
    // Append the new cell to the row
    row.appendChild(conversionRateCell);
});
