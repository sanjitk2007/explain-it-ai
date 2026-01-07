export default function handler(req, res) {
    const { question, level } = req.body;
  
    let explanation = "";
  
    if (level === "Elementary") {
      explanation = `This is a simple explanation of "${question}". Imagine explaining it to a young student.`;
    } else if (level === "Middle School") {
      explanation = `This is a clearer and slightly more detailed explanation of "${question}" with examples.`;
    } else {
      explanation = `This is a more detailed explanation of "${question}" using accurate terminology.`;
    }
  
    res.status(200).json({ answer: explanation });
  }
  