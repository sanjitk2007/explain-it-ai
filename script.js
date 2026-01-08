async function send() {
    const question = document.getElementById("question").value;
    const level = document.getElementById("level").value;
  
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
  
    const button = document.getElementById("explainBtn");
    const loading = document.getElementById("loading");
    const output = document.getElementById("output");
  
    // UI: start loading
    button.disabled = true;
    loading.style.display = "block";
    output.innerText = "";
  
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, level })
      });
  
      const data = await res.json();
      output.innerText = data.answer;
    } catch (error) {
      output.innerText = "Something went wrong. Please try again.";
    }
  
    // UI: stop loading
    loading.style.display = "none";
    button.disabled = false;
  }
  