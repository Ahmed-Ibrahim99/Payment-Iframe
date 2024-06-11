document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("payment-container");
    if (container) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://Ahmed-Ibrahim99.github.io/payment-iframe/payment.html"; // The URL of the iframe content
        iframe.width = "100%";
        iframe.height = "400px"; // Adjust the height as needed
        iframe.style.border = "none";
        container.appendChild(iframe);
    }
});
