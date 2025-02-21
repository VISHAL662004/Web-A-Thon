// Bookings
function searchFlights() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let departure = document.getElementById("departure").value;
    let travellers = document.getElementById("travellers").value;
    
    alert(`Searching flights from ${from} to ${to} on ${departure} for ${travellers}`);
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all open answers
            faqItems.forEach(i => i.classList.remove("active"));

            // Toggle current item
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
