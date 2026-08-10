import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: "AI / ML / GenAI",
    skills: ["PyTorch", "HuggingFace Transformers", "PEFT", "LoRA", "QLoRA", "LangChain", "Sentence-Transformers", "CLIP", "LLMs", "RAG", "Multimodal Systems", "Agentic AI"],
  },
  {
    category: "Vector & Search",
    skills: ["FAISS", "ChromaDB", "BM25", "Embedding Models", "Semantic Search"],
  },
  {
    category: "Programming & Data",
    skills: ["Python", "C++", "SQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux", "Google Colab", "Hugging Face Hub", "Weights & Biases", "Kaggle"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-groups">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skills-pills">
              {group.skills.map((skill, j) => (
                <span key={j} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
