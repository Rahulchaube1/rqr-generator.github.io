// Handle form submission to generate QR code
function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    const text = document.getElementById("inptxt").value.trim();
    const size = parseInt(document.getElementById("qrsize").value.trim(), 10);
    const foregroundColor = document.getElementById("foregroundColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;
    const errorCorrection = document.getElementById("errorCorrection").value;

    // Validate the input fields
    if (!text) {
        return alert("Please enter some text or a URL to generate a QR code.");
    }

    if (isNaN(size) || size < 100) {
        return alert("Please enter a valid size (at least 100).");
    }

    // Generate QR code URL with the user-provided values
    const qrsrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=${size}x${size}&color=${foregroundColor.slice(1)}&bgcolor=${backgroundColor.slice(1)}&ecc=${errorCorrection}`;

    // Update QR code image with the generated URL
    const qrimg = document.getElementById("qrimg");
    qrimg.src = qrsrc;

    // Display QR code container and download button
    document.querySelector(".qr-code-container").style.display = "block";
    document.getElementById("download-btn").style.display = "inline-block";
}

// Function to download the QR code as a PNG image
function downloadQR() {
    const qrimg = document.getElementById("qrimg");

    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = qrimg.src;
    link.download = 'qr-code.png'; // Set the filename for the download

    // Programmatically click the link to trigger the download
    link.click();
}
