function searchFlights() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let departure = document.getElementById("departure").value;
    let travellers = document.getElementById("travellers").value;
    
    alert(`Searching flights from ${from} to ${to} on ${departure} for ${travellers}`);
}
