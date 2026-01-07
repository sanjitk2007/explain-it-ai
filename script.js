async function send() {
    const question = document.getElementById("question").value;
    const level = document.getElementById("level").value;
  
    const res = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, level })
    });
  
    const data = await res.json();
    document.getElementById("output").innerText = data.answer;
  }
  