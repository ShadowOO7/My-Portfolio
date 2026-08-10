const projectsData = [
  {
    id: 1,
    title: "VSCE-EL: Visually-Driven Multimodal Entity Linking",
    description: "M.Tech thesis. Five-stage pipeline over 90K+ entities — hybrid retrieval (R@50=100% on Wikidiverse), fine-tuned BGE cross-encoder reranker, QLoRA-adapted Qwen2-7B for final selection. Top-1: 94.75% WikiMEL, 93.38% Richpedia, 93.12% Wikidiverse.",
    technologies: ["LLaMA-3", "LLaVA", "Qwen2-7B", "QLoRA", "CLIP-ViT", "PyTorch", "HuggingFace PEFT"],
    githubLink: "https://github.com/ShadowOO7/Unified-MEL",
  },
  {
    id: 2,
    title: "AskMyDoc — RAG System for Research Papers",
    description: "Production-grade RAG pipeline combining BM25 keyword search with dense vector retrieval + SBERT reranking. Citation-grounded generation, evaluated with RAGAS on 100+ QA pairs at >85% faithfulness — no hallucinated answers, returns 'I don't know' when unsupported.",
    technologies: ["LangChain", "ChromaDB", "SBERT", "BM25", "RAGAS"],
    githubLink: "https://github.com/ShadowOO7/AskMyDoc-RAG-System-for-Research-Papers",
  },
  {
    id: 3,
    title: "Real-Time Face Mask Detection & Alert System",
    description: "OpenCV DNN + MobileNetV2 transfer learning, 95-97% accuracy at 20-25 FPS on CPU. Screenshots + email alerts on violation. Published in IJSREM.",
    technologies: ["OpenCV DNN", "MobileNetV2", "Transfer Learning", "Python"],
    githubLink: "https://github.com/ShadowOO7/Real-Time-Face-Mask-Detector-With-E-mail-Alert-",
  },
  {
    id: 4,
    title: "Real-Time Trip Planning Assistant",
    description: "Collaborative travel planner, MERN stack, live group itineraries via Socket.IO.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    githubLink: "https://github.com/ShadowOO7/Real-Time-Trip-Planning-Assistant",
  },
  {
    id: 5,
    title: "Personal Finance Assistant",
    description: "Full-stack finance tracker, PDF receipt parsing, income/expense visualization.",
    technologies: ["React", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/ShadowOO7/Personal-Finance-Tracker",
  },
];
