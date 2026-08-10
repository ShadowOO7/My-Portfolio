import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <p>
          I'm an M.Tech (AI/ML) researcher at IIIT Allahabad, focused on LLMs, retrieval-augmented systems, and multimodal entity linking. My thesis work, VSCE-EL, links visual mentions to 90K+ knowledge-base entities using a five-stage pipeline (CLIP retrieval, cross-encoder reranking, QLoRA-tuned LLM selection) hitting 94.75% Top-1 accuracy on WikiMEL.
        </p>
        <p>
          I've also built AskMyDoc, a hybrid BM25 + dense-retrieval RAG system with citation-grounded generation (85%+ RAGAS faithfulness), and a real-time face-mask detection system published in IJSREM. I'm an Amazon ML Summer School 2025 selectee, mentored by Amazon research scientists on applied ML at scale.
        </p>
        <p>
          Stack: PyTorch, HuggingFace (Transformers/PEFT), LangChain, LoRA/QLoRA, FAISS/ChromaDB, Python. I care about systems that are grounded, efficient, and actually work outside a notebook.
        </p>
      </div>
    </section>
  );
}

export default About;
