function limitLines(description, maxLines = 3) {
    // Create a temporary DOM element to parse the HTML
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = description; // Parse HTML string
    let textContent = tempDiv.innerText || tempDiv.textContent; // Extract text without tags
    
    // Split content into lines
    let lines = textContent.split(/\n|\r/).filter(line => line.trim() !== ""); 

    // Join the first `maxLines` lines
    return lines.slice(0, maxLines).join(" ");
}

// Example response from API
let description = `<p> 
    <p>This is the first paragraph inside the div.</p>
    <p>This is the second paragraph with some additional text.</p>
    <p>The third paragraph contains more information and details.</p>
    <p>The fourth paragraph contains more information and details.</p>
</p>`;

let limitedText = limitLines(description, 3);
console.log(limitedText); // Output: First 3 lines only
