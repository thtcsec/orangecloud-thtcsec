export interface Project {
  id: string;
  title: string;
  star: string;
  descriptionVi: string;
  descriptionEn: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export interface CommunityItem {
  id: string;
  name: string;
  stat: string;
  roleVi: string;
  roleEn: string;
  descVi: string;
  descEn: string;
  awardsVi?: string[];
  awardsEn?: string[];
  link?: string;
  linkTextVi?: string;
  linkTextEn?: string;
}

export interface CareerItem {
  period: string;
  isCurrent?: boolean;
  roleVi: string;
  roleEn: string;
  companyVi: string;
  companyEn: string;
  descVi: string;
  descEn: string;
  awardsVi?: string[];
  awardsEn?: string[];
}

export interface CertItem {
  title: string;
  issuer: string;
  link?: string;
}

export const portfolioData = {
  profile: {
    tagVi: "BACKEND · AI & COMPUTER VISION · CYBERSECURITY",
    tagEn: "BACKEND · AI & COMPUTER VISION · CYBERSECURITY",
    name: "Trịnh Hoàng Tú",
    nameEn: "Trinh Hoang Tu",
    rolePlainVi: "Software Engineer (Backend) Intern",
    rolePlainEn: "Software Engineer (Backend) Intern",
    company: "Grab",
    secondRolePlainVi: "AI Engineer",
    secondRolePlainEn: "AI Engineer",
    secondCompany: "VETC",
    locationVi: "Việt Nam · TP. Hồ Chí Minh",
    locationEn: "Vietnam · Ho Chi Minh City",
    taglineVi: "Scalable Microservices · Computer Vision cho ITS · Cloud Resilience · DevSecOps",
    taglineEn: "Scalable Microservices · Computer Vision for ITS · Cloud Resilience · DevSecOps",
    avatar: "/images/portrait.jpg",
    email: "tht.csec2005@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/thtcsec",
      github: "https://github.com/thtcsec",
      facebook: "https://www.facebook.com/thtcsec",
      email: "mailto:tht.csec2005@gmail.com"
    },
    about: {
      subVi: "Backend Engineer · Applied AI · Cybersecurity",
      subEn: "Backend Engineer · Applied AI · Cybersecurity",
      paragraphsVi: [
        "Software Engineer (Backend) Intern tại Grab và AI Engineer tại VETC — tập trung backend microservices và Computer Vision cho hệ thống giao thông thông minh (ITS).",
        "Sinh viên năm cuối ngành An toàn thông tin tại HUFLIT (GPA 3.50/4.0), hoàn thành chương trình Global Innovation tại Tsinghua University (GS. Kris Singh).",
        "Tác giả / đồng tác giả 7 bài báo nghiên cứu khoa học (CSONET, SOICT, IEEE RIVF, ICAI-FAI, VNICT) về AIOps, log anomaly detection và an ninh mạng SDN.",
        "Đại sứ Agora, cựu Đại sứ Sinh viên Google Mùa 1 (Top 200), thành viên GDG HCMC và đồng hành xây dựng các dự án cloud tại OrangeCloud."
      ],
      paragraphsEn: [
        "Software Engineer (Backend) Intern at Grab and AI Engineer at VETC — focusing on scalable backend microservices and Computer Vision for ITS.",
        "Final-year Cybersecurity student at HUFLIT (GPA 3.50/4.0) and completed the Global Innovation Program at Tsinghua University (supervised by Prof. Kris Singh).",
        "Author / co-author of 7 research papers (CSONET, SOICT, IEEE RIVF, ICAI-FAI, VNICT) on AIOps, log anomaly detection, and SDN security.",
        "Agora Ambassador, ex-Google Student Ambassador Season 1 (Top 200), GDG HCMC member, and OrangeCloud cloud projects collaborator."
      ],
      stats: [
        {
          num: "12+",
          labelVi: "Dự án hoàn thành",
          labelEn: "Projects Built"
        },
        {
          num: "7+",
          labelVi: "Công bố & Nghiên cứu",
          labelEn: "Research Papers"
        },
        {
          num: "10+",
          labelVi: "Giải thưởng & Hackathon",
          labelEn: "Awards & Honors"
        },
        {
          num: "3.50",
          labelVi: "GPA · Tsinghua Scholar",
          labelEn: "GPA · Tsinghua Scholar"
        }
      ]
    }
  },

  projects: [
    {
      id: "orangecloud-insights",
      title: "OrangeCloud Insights",
      star: "★ Side Project",
      descriptionVi: "Nền tảng tổng hợp tin tức công nghệ tự động trên Cloudflare Serverless — crawl RSS 5 phút, OpenAI tóm tắt, Workers AI tạo vector và Cloudflare Vectorize tìm kiếm ngữ nghĩa.",
      descriptionEn: "Serverless tech intelligence side-project on Cloudflare — 5m RSS crawl, OpenAI summarization, Workers AI embeddings, and Vectorize semantic search.",
      tags: ["Next.js 15", "Cloudflare Pages", "Workers AI", "D1", "R2", "Vectorize"],
      demo: "https://blog.orangecloud.vn",
      github: "https://github.com/thtcsec"
    },
    {
      id: "multi-cloud-soar",
      title: "Multi-Cloud Serverless SOAR",
      star: "★ Production",
      descriptionVi: "Hệ thống điều phối phản ứng sự cố an ninh mạng tự động đa đám mây (AWS & GCP) — EventBridge, Eventarc, Step Functions, Cloud Workflows, cô lập tài nguyên và phân tích malware.",
      descriptionEn: "Multi-cloud automated Security Orchestration, Automation and Response on AWS & GCP — EventBridge, Step Functions, Cloud Workflows, IAM isolation, and forensics.",
      tags: ["AWS", "GCP", "Terraform", "Python", "Step Functions", "Cloud Run"],
      demo: "",
      github: "https://github.com/thtcsec/AWS-Serverless-SOAR"
    },
    {
      id: "sdn-its-resilience-ai",
      title: "SDN-ITS Resilience AI",
      star: "★ 97.3%",
      descriptionVi: "Framework nghiên cứu khả năng phục hồi mạng V2X dựa trên SDN — mô hình Hybrid TCN-GRU phát hiện bất thường, lượng tử hóa INT8 0.174MB, độ trễ 9.9ms (Đề tài Tsinghua IEDE).",
      descriptionEn: "Research framework for V2X network resilience — Hybrid TCN-GRU anomaly detection with 97.33% accuracy, 0.174MB INT8 quantization, 9.9ms latency (Tsinghua IEDE).",
      tags: ["PyTorch", "Python", "Ryu SDN", "Mininet-WiFi", "Docker", "ONNX"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "securecoating-vision",
      title: "SecureCoating-Vision",
      star: "★ Realtime",
      descriptionVi: "Hệ thống thị giác máy tính kết hợp đa cảm biến (RGB + hồng ngoại LWIR + laser 3D) kiểm định khuyết tật bề mặt lớp phủ — tăng tốc TensorRT FP16/INT8 đạt độ trễ <=35ms.",
      descriptionEn: "Multi-source fusion vision inspection system combining 2D RGB, LWIR Thermal, and 3D Laser Profilometer data accelerated via TensorRT (Tsinghua AI+Materials).",
      tags: ["Python", "TensorRT", "FastAPI", "OpenCV", "PyTorch", "Docker"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "enterpriserag",
      title: "EnterpriseRAG Platform",
      star: "★ MVP",
      descriptionVi: "Nền tảng RAG doanh nghiệp truy xuất lai: Qdrant dense + OpenSearch BM25, CrossEncoder reranking, phân quyền truy cập tài liệu chi tiết (ACL) và Redis semantic cache.",
      descriptionEn: "Enterprise hybrid RAG platform combining Qdrant dense search, OpenSearch BM25, CrossEncoder reranking, and document-level ACL access control.",
      tags: ["FastAPI", "Python", "Qdrant", "OpenSearch", "Redis", "Docker"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "quasar-quantum-routing",
      title: "QUASAR Logistics Engine",
      star: "★ Finalist",
      descriptionVi: "Hệ thống tối ưu hóa định tuyến vận tải lai ghép cổ điển - lượng tử: Google OR-Tools kết hợp thuật toán QAOA trên QPU IBM 127-qubit (QC4SG 2026 Finalist).",
      descriptionEn: "Classical-quantum hybrid logistics engine pairing Google OR-Tools with 127-qubit IBM Quantum QAOA execution (QC4SG 2026 Finalist).",
      tags: ["Python", "Qiskit", "IBM Quantum", "OR-Tools", "FastAPI"],
      demo: "",
      github: "https://github.com/Muhammad-Rafif-Irfan/QUASAR"
    },
    {
      id: "baoan-auto-zalo-mini-app",
      title: "Bảo An Auto SaaS",
      star: "★ Production",
      descriptionVi: "Zalo Mini App SaaS quản lý chuỗi garage ô tô — phân quyền 5 cấp (RBAC), engine in hóa đơn & báo giá PDF động, Supabase cloud sync kèm offline fallback.",
      descriptionEn: "Zalo Mini App SaaS for auto garage operations — 5-tier RBAC, dynamic PDF printing engine, and Supabase PostgreSQL cloud sync.",
      tags: ["Zalo Mini App", "React", "TypeScript", "Zustand", "Supabase"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "ctsmartcam",
      title: "CTSmartCam Surveillance",
      star: "★ Edge AI",
      descriptionVi: "Hệ sinh thái camera giám sát thông minh cho Cần Thơ — kiến trúc xử lý sự kiện, nhận diện biển số xe (LPR), định danh khuôn mặt pgvector và dashboard CMS.",
      descriptionEn: "Intelligent surveillance ecosystem for Can Tho — event-driven AI pipeline, license plate recognition (LPR), driver face embeddings, and CMS dashboard.",
      tags: ["ASP.NET Core", "SignalR", "YOLOv11", "pgvector", "Redis"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "silentpipe",
      title: "SilentPipe Android Player",
      star: "★ Privacy",
      descriptionVi: "Trình phát media Android không quảng cáo, tôn trọng quyền riêng tư — hỗ trợ phát chạy nền, tải offline, equalizer 10-band tùy chỉnh và chia sẻ phát từ YouTube/TikTok.",
      descriptionEn: "Privacy-first Android media player with no ads, background playback, custom 10-band equalizer, and offline download support.",
      tags: ["Kotlin", "Java", "Android Media3", "Chaquopy", "NewPipe"],
      demo: "https://thtcsec.github.io/silentpipe",
      github: "https://github.com/thtcsec/SilentPipe"
    },
    {
      id: "pentest-lab",
      title: "Realistic Pentest Lab",
      star: "★ One-Click",
      descriptionVi: "Môi trường thực hành Penetration Testing thực tế từ Web, Active Directory đến Cloud — cài đặt 1-click qua Docker, tập trung vào phân tích nguyên nhân và phòng thủ.",
      descriptionEn: "Realistic Penetration Testing home lab covering Web, Active Directory, and Cloud with one-click Docker setup.",
      tags: ["Docker", "Active Directory", "Python", "Linux", "Security"],
      demo: "https://hoangtu.dev/pentestlab",
      github: "https://github.com/thtcsec"
    }
  ] as Project[],

  community: [
    {
      id: "agora",
      name: "Agora Ambassador",
      stat: "Global RTE",
      roleVi: "Đại sứ Công nghệ Agora · Developer Community",
      roleEn: "Official Agora Ambassador · Developer Community",
      descVi: "Đại sứ chính thức của Agora tại Việt Nam — kết nối cộng đồng lập trình viên và chia sẻ công nghệ tương tác thời gian thực (Real-Time Engagement & WebRTC).",
      descEn: "Officially selected Agora Ambassador — engaging with developers and advocating Real-Time Engagement (RTE) and WebRTC technologies.",
      awardsVi: ["Đại diện cộng đồng developer trẻ Việt Nam"],
      awardsEn: ["Representative for young Vietnam developer ecosystem"],
      link: "https://www.agora.io/en/community/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    },
    {
      id: "gsa",
      name: "Google Student Ambassador",
      stat: "Top 200 Mùa 1",
      roleVi: "Cựu Đại sứ Sinh viên Google Mùa 1 (Top 200)",
      roleEn: "Ex-Google Student Ambassador Season 1 (Top 200)",
      descVi: "Đại diện trường HUFLIT và lọt vào Top 200 Đại sứ Sinh viên Google Mùa 1 — lan tỏa công nghệ Google và kết nối sinh viên công nghệ.",
      descEn: "Represented HUFLIT in the Top 200 Google Student Ambassadors Season 1 — advocating Google developer technologies.",
      awardsVi: ["Top 200 Đại sứ Sinh viên Google Mùa 1"],
      awardsEn: ["Top 200 Google Student Ambassador Season 1"],
      link: "https://www.google.com/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    },
    {
      id: "gdg",
      name: "Google Developer Groups (GDG HCMC)",
      stat: "5K+ members",
      roleVi: "Thành viên tích cực · GDG HCMC",
      roleEn: "Active Member · GDG HCMC",
      descVi: "Thành viên tích cực GDG HCMC — tham gia chia sẻ công nghệ Google Cloud, Firebase và đạt giải Nhì tại GDGOC SGU 2026 với dự án ThreatLens AI Copilot.",
      descEn: "Active member of GDG HCMC — participating in Google Cloud/AI workshops and awarded 2nd Runner Up at GDGOC SGU 2026 for ThreatLens AI Copilot.",
      awardsVi: ["Second Runner Up — GDGOC SGU 2026 (ThreatLens AI Copilot)"],
      awardsEn: ["Second Runner Up — GDGOC SGU 2026 (ThreatLens AI Copilot)"],
      link: "https://gdg.community.dev/u/tu44/",
      linkTextVi: "Tham gia group→",
      linkTextEn: "Join group→"
    },
    {
      id: "tsinghua",
      name: "Tsinghua University IEDE",
      stat: "Global Scholar",
      roleVi: "Học viên Đổi mới sáng tạo · School of Software",
      roleEn: "Innovation Scholar · School of Software",
      descVi: "Hoàn thành chương trình Global Innovation tại Tsinghua University dưới sự hướng dẫn của GS. Kris Singh (CEO tại SRII, cựu lãnh đạo IBM/Intel).",
      descEn: "Completed Global Innovation Program at Tsinghua University supervised by Prof. Kris Singh (CEO at SRII, Ex-IBM/Intel).",
      awardsVi: ["Hoàn thành xuất sắc chương trình với đề tài SDN Resilience & Computer Vision"],
      awardsEn: ["Graduated with distinguished projects in SDN Resilience & Computer Vision"],
      link: "https://www.tsinghua.edu.cn/en/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    }
  ] as CommunityItem[],

  career: [
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "Software Engineer (Backend) Intern",
      roleEn: "Software Engineer (Backend) Intern",
      companyVi: "Grab",
      companyEn: "Grab",
      descVi: "Thiết kế và phát triển backend microservices hiệu năng cao, mở rộng kiến trúc cloud-native và xây dựng APIs phục vụ hệ thống khu vực của Grab.",
      descEn: "Designing and developing high-performance, scalable backend microservices and cloud-native APIs within Grab regional engineering teams.",
      awardsVi: ["Java", "Docker", "Kubernetes", "Microservices", "REST APIs"],
      awardsEn: ["Java", "Docker", "Kubernetes", "Microservices", "REST APIs"]
    },
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "AI Engineer",
      roleEn: "AI Engineer",
      companyVi: "VETC",
      companyEn: "VETC",
      descVi: "Phát triển các pipeline Computer Vision phân tích video camera giao thông, đo lường mật độ phương tiện và giám sát thời gian thực cho hệ thống giao thông thông minh (ITS).",
      descEn: "Developing Computer Vision pipelines for traffic camera analytics, real-time vehicle density detection, and road surveillance for ITS.",
      awardsVi: ["Python", "Computer Vision", "Traffic Analytics", "IoT Sensors", "Deep Learning"],
      awardsEn: ["Python", "Computer Vision", "Traffic Analytics", "IoT Sensors", "Deep Learning"]
    },
    {
      period: "2026 – nay",
      roleVi: "AI Infra & Cloud Solutions Engineer",
      roleEn: "AI Infra & Cloud Solutions Engineer",
      companyVi: "Next Step Tech & OrangeCloud Side-Projects",
      companyEn: "Next Step Tech & OrangeCloud Side-Projects",
      descVi: "Nghiên cứu kiến trúc Serverless trên Cloudflare (Workers, D1, R2, Vectorize), xây dựng EnterpriseRAG và đồng hành phát triển các side-project trên domain OrangeCloud.",
      descEn: "Prototyping serverless architectures on Cloudflare (Workers, D1, R2, Vectorize), building EnterpriseRAG, and collaborating on personal side-projects at OrangeCloud.",
      awardsVi: ["Cloudflare Workers", "D1", "R2", "Vectorize", "RAG", "Redis Streams"],
      awardsEn: ["Cloudflare Workers", "D1", "R2", "Vectorize", "RAG", "Redis Streams"]
    },
    {
      period: "2025 – 2026",
      roleVi: "Research Scholar & Developer",
      roleEn: "Research Scholar & Developer",
      companyVi: "Tsinghua University IEDE & HUFLIT",
      companyEn: "Tsinghua University IEDE & HUFLIT",
      descVi: "Nghiên cứu AIOps, phân tích log và SDN resilience dưới sự hướng dẫn của GS. Kris Singh. Tác giả / đồng tác giả 7 công trình khoa học (CSONET, SOICT, IEEE RIVF, ICAI-FAI, VNICT).",
      descEn: "Research on AIOps, log anomaly detection, and SDN resilience supervised by Prof. Kris Singh. Author/co-author of 7 research papers.",
      awardsVi: ["Finalist — QC4SG Quantum Hackathon 2026", "Á quân 2 — MongoDB Mini Hackathon 2026", "Top 10 — VinUni Datathon 2026"],
      awardsEn: ["Finalist — QC4SG Quantum Hackathon 2026", "2nd Place — MongoDB Mini Hackathon 2026", "Top 10 — VinUni Datathon 2026"]
    },
    {
      period: "2023 – 2027",
      isCurrent: true,
      roleVi: "Sinh viên An toàn thông tin (B.S. Cybersecurity)",
      roleEn: "Cybersecurity Undergraduate (B.S.)",
      companyVi: "HUFLIT",
      companyEn: "HUFLIT",
      descVi: "Tích lũy 131/135 tín chỉ, GPA 3.50/4.0. Trọng tâm: Backend Engineering, An toàn mạng, Kiến trúc đám mây và Trí tuệ nhân tạo.",
      descEn: "Completed 131/135 credits, GPA 3.50/4.0. Focus on backend engineering, network security, cloud architecture, and applied AI.",
      awardsVi: ["Sinh viên xuất sắc toàn diện 2023-2024 & 2024-2025", "Học bổng Google Digital Talent Scholarship (Google x NIC)"],
      awardsEn: ["Excellent Student Award 2023-2024 & 2024-2025", "Google Digital Talent Scholarship Recipient"]
    }
  ] as CareerItem[],

  skills: {
    groups: [
      {
        nameVi: "Cloud & Security",
        nameEn: "Cloud & Security",
        skills: ["AWS", "Google Cloud", "Cloudflare", "Workers", "Zero Trust", "WAF", "CDN", "D1", "R2", "KV", "Vectorize", "Terraform", "Kali Linux", "Burp Suite", "Suricata", "Wireshark", "Active Directory", "Docker"]
      },
      {
        nameVi: "AI & Data Systems",
        nameEn: "AI & Data Systems",
        skills: ["PyTorch", "TensorRT", "OpenCV", "YOLOv11", "Qdrant", "OpenSearch", "pgvector", "Redis", "Workers AI", "IBM Qiskit", "Drain3", "Transformers"]
      },
      {
        nameVi: "Development",
        nameEn: "Development",
        skills: ["Java", "Python", "TypeScript", "C#", "ASP.NET Core", "React", "Next.js", "FastAPI", "Zalo Mini App", "SignalR", "PostgreSQL", "Supabase"]
      },
      {
        nameVi: "Systems & DevOps",
        nameEn: "Systems & DevOps",
        skills: ["Kubernetes", "Docker", "Mininet-WiFi", "Ryu SDN", "Linux", "Git", "GitHub Actions", "Nginx", "Postman", "Snowflake"]
      }
    ],
    certs: [
      {
        title: "Global Program on Innovation and Entrepreneurship",
        issuer: "Tsinghua University (Supervised by Prof. Kris Singh)"
      },
      {
        title: "Google Cloud Computing Foundation",
        issuer: "Google Cloud"
      },
      {
        title: "Google AI Certification",
        issuer: "Google"
      },
      {
        title: "AWS Security Fundamentals",
        issuer: "Amazon Web Services (AWS)"
      },
      {
        title: "Certified Threat Intelligence Governance Analyst (CTIGA)",
        issuer: "Red Team Leaders"
      },
      {
        title: "Certified Cybersecurity Educator Professional (CCEP)",
        issuer: "Red Team Leaders"
      },
      {
        title: "Introduction to Critical Infrastructure Protection (ICIP)",
        issuer: "OPSWAT Academy"
      },
      {
        title: "Serverless & AI/ML Learning Badges",
        issuer: "Hack2skill"
      }
    ] as CertItem[]
  }
};
