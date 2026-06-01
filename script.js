function insert_Row() {
    const table = document.getElementById("sampleTable");

    const row = table.insertRow(0);

    row.insertCell(0).textContent = "New Cell1";
    row.insertCell(1).textContent = "New Cell2";
}