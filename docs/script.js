function analyze() {
  const input = document.getElementById("csvInput").value.trim();
  const lines = input.split("\n");

  if (lines.length < 2) {
    alert("Invalid CSV data");
    return;
  }

  let marks = [];

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length === 2) {
      const mark = parseInt(parts[1]);
      if (!isNaN(mark)) {
        marks.push(mark);
      }
    }
  }

  if (marks.length === 0) {
    alert("No valid marks found");
    return;
  }

  const total = marks.length;
  const sum = marks.reduce((a, b) => a + b, 0);
  const avg = (sum / total).toFixed(2);
  const max = Math.max(...marks);
  const min = Math.min(...marks);

  document.getElementById("total").textContent = total;
  document.getElementById("avg").textContent = avg;
  document.getElementById("max").textContent = max;
  document.getElementById("min").textContent = min;
}
