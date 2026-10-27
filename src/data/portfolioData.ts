export interface Project {
  id: string;
  title: string;
  tag?: string;
  descriptionVi: string;
  descriptionEn: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export interface CommunityItem {
  id: string;
  name: string;
  stat?: string;
  roleVi: string;
  roleEn: string;
  descVi: string;
  descEn: string;
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
}

export interface CertItem {
  title: string;
  issuer: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  status: "Accepted" | "Under Review" | "Withdrawn";
  statusVi: string;
  github?: string;
  noteVi?: string;
  noteEn?: string;
}

export const portfolioData = {
  profile: {
    tagVi: "SOFTWARE ENGINEERING · APPLIED AI",
    tagEn: "SOFTWARE ENGINEERING · APPLIED AI",
    name: "Trịnh Hoàng Tú",
    nameEn: "Trinh Hoang Tu",
    rolePlainVi: "Software Engineer (Backend, in Training)",
    rolePlainEn: "Software Engineer (Backend, in Training)",
    company: "Grab",
    secondRolePlainVi: "AI Infra & Cloud Solutions Engineer",
    secondRolePlainEn: "AI Infra & Cloud Solutions Engineer",
    secondCompany: "Next Step Technology Solutions",
    locationVi: "Việt Nam · TP. Hồ Chí Minh",
    locationEn: "Vietnam · Ho Chi Minh City",
    taglineVi: "Hướng tới Software Engineering và Applied AI — backend, CV, hệ thống thực tế",
    taglineEn: "Building toward Software Engineering and Applied AI — backend, CV, real systems",
    avatar: "/images/portrait.jpg",
    email: "tht.csec2005@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/thtcsec",
      github: "https://github.com/thtcsec",
      facebook: "https://www.facebook.com/thtcsec",
      email: "mailto:tht.csec2005@gmail.com"
    },
    about: {
      subVi: "Backend Development · Applied AI · Cybersecurity",
      subEn: "Backend Development · Applied AI · Cybersecurity",
      paragraphsVi: [
        "Hướng tới Software Engineering và Applied AI. Hiện là Software Engineer (Backend, in Training) tại Grab; từng là AI Engineer tại VETC — Computer Vision cho ITS.",
        "Sinh viên năm cuối ngành An toàn thông tin tại HUFLIT (GPA tích lũy 3.52/4.0, 138 tín chỉ). Cựu học viên chương trình Global Innovation tại Tsinghua & Extended TA; Admitted Scholar VinUniversity AI (Cohort 1, hoãn đến 2027).",
        "Đồng tác giả 3 bài đã chấp nhận (CSoNet, SOICT, IEEE RIVF 2026) và 1 bài đang phản biện (ICAI-2026). VNICT 2026 đã rút trước khi xuất bản — được kế thừa bởi CSoNet.",
        "Đại sứ Agora, cựu Đại sứ Sinh viên Google Mùa 1 (Top 200), thành viên GDG HCMC. Side-project cloud trong hệ OrangeCloud."
      ],
      paragraphsEn: [
        "Building toward Software Engineering and Applied AI. Software Engineer (Backend, in Training) at Grab; former AI Engineer at VETC — Computer Vision for ITS.",
        "Final-year Cybersecurity student at HUFLIT (cumulative GPA 3.52/4.0, 138 credits). Alumnus of Tsinghua’s Global Innovation Program & Extended TA; VinUniversity AI Admitted Scholar (Cohort 1, deferred to 2027).",
        "Co-author of 3 accepted papers (CSoNet, SOICT, IEEE RIVF 2026) and 1 under review (ICAI-2026). A VNICT 2026 manuscript was withdrawn before publication and extended as the CSoNet paper.",
        "Agora Ambassador, ex-Google Student Ambassador Season 1 (Top 200), GDG HCMC member. Cloud side projects in the OrangeCloud ecosystem."
      ],
      stats: [
        {
          num: "12+",
          labelVi: "Dự án",
          labelEn: "Projects"
        },
        {
          num: "3",
          labelVi: "Bài đã chấp nhận",
          labelEn: "Accepted papers"
        },
        {
          num: "10+",
          labelVi: "Giải & hoạt động",
          labelEn: "Awards & activities"
        },
        {
          num: "3.52",
          labelVi: "GPA tích lũy",
          labelEn: "Cumulative GPA"
        }
      ]
    }
  },

  projects: [
    {
      id: "vetc-traffic-density",
      title: "VETC AI Traffic Density",
      tag: "Work",
      descriptionVi: "Giám sát mật độ giao thông realtime trên GIS cho VETC (40+ camera HCMC). YOLOv11 + SAHI + BoT-SORT → Redis Streams; bản đồ G/Y/R trên Leaflet.",
      descriptionEn: "Real-time GIS corridor monitoring for VETC (40+ HCMC cameras). YOLOv11 + SAHI + BoT-SORT over Redis Streams; live G/Y/R Leaflet map.",
      tags: ["Python", "YOLOv11", "BoT-SORT", "Redis", "Leaflet"]
    },
    {
      id: "orangecloud-insights",
      title: "OrangeCloud Insights",
      tag: "Side Project",
      descriptionVi: "Nền tảng tổng hợp tin tức công nghệ tự động trên Cloudflare Serverless (Workers, D1, Vectorize).",
      descriptionEn: "Serverless tech intelligence platform built on Cloudflare (Workers, D1, Vectorize).",
      tags: ["Next.js", "Cloudflare Workers", "D1", "Vectorize"],
      demo: "https://blog.orangecloud.vn",
      github: "https://github.com/thtcsec"
    },
    {
      id: "multi-cloud-soar",
      title: "Multi-Cloud Serverless SOAR",
      tag: "Project",
      descriptionVi: "Hệ thống tự động hóa phản ứng sự cố an ninh mạng trên nền tảng AWS & GCP.",
      descriptionEn: "Security orchestration and incident response automation on AWS & GCP.",
      tags: ["AWS", "GCP", "Python", "Terraform"],
      demo: "",
      github: "https://github.com/thtcsec/AWS-Serverless-SOAR"
    },
    {
      id: "sdn-its-resilience-ai",
      title: "SDN-ITS Resilience AI",
      tag: "Research",
      descriptionVi: "Đề tài nghiên cứu khả năng phục hồi mạng V2X dựa trên kiến trúc SDN và mô hình học sâu.",
      descriptionEn: "Research project on V2X network resilience using SDN and deep learning anomaly detection.",
      tags: ["PyTorch", "Python", "Ryu SDN", "Docker"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "securecoating-vision",
      title: "SecureCoating-Vision",
      tag: "Research",
      descriptionVi: "Kiểm tra lớp phủ điện cực fail-closed (Tsinghua MSE Track 4): YOLO-seg + cổng evidence PASS/REJECT/HOLD. Thermal/laser là adapter mô phỏng.",
      descriptionEn: "Fail-closed electrode coating inspection (Tsinghua MSE Track 4): YOLO-seg plus an evidence gate (PASS/REJECT/HOLD). Thermal/laser are simulated adapters.",
      tags: ["Python", "ONNX Runtime", "FastAPI", "OpenCV"],
      demo: "",
      github: "https://github.com/thtcsec/securecoating-vision"
    },
    {
      id: "enterpriserag",
      title: "EnterpriseRAG Platform",
      tag: "Project",
      descriptionVi: "Nền tảng RAG truy xuất tài liệu kết hợp tìm kiếm ngữ nghĩa (Qdrant) và từ khóa (OpenSearch).",
      descriptionEn: "Enterprise RAG platform combining dense semantic search (Qdrant) and BM25 (OpenSearch).",
      tags: ["FastAPI", "Python", "Qdrant", "OpenSearch", "Redis"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "quasar-quantum-routing",
      title: "QUASAR Logistics Engine",
      tag: "Hackathon",
      descriptionVi: "Mô hình tối ưu hóa định tuyến vận tải kết hợp thuật toán cổ điển và điện toán lượng tử (QC4SG Finalist).",
      descriptionEn: "Logistics routing optimization combining classical algorithms and quantum computing (QC4SG Finalist).",
      tags: ["Python", "Qiskit", "OR-Tools", "FastAPI"],
      demo: "",
      github: "https://github.com/Muhammad-Rafif-Irfan/QUASAR"
    },
    {
      id: "baoan-auto-zalo-mini-app",
      title: "Bảo An Auto SaaS",
      tag: "App",
      descriptionVi: "Zalo Mini App quản lý vận hành, đơn hàng và báo giá cho garage ô tô.",
      descriptionEn: "Zalo Mini App for auto garage operations, order management, and quotes.",
      tags: ["Zalo Mini App", "React", "TypeScript", "Supabase"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "ctsmartcam",
      title: "CTSmartCam Surveillance",
      tag: "Edge AI",
      descriptionVi: "Hệ thống camera nhận diện biển số xe (LPR) và phân tích mật độ phương tiện giao thông.",
      descriptionEn: "Smart camera system for license plate recognition (LPR) and traffic analytics.",
      tags: ["ASP.NET Core", "YOLOv11", "pgvector", "Redis"],
      demo: "",
      github: "https://github.com/thtcsec"
    },
    {
      id: "silentpipe",
      title: "SilentPipe Android Player",
      tag: "Android",
      descriptionVi: "Ứng dụng phát media Android mã nguồn mở, hỗ trợ phát nền và tải nghe offline.",
      descriptionEn: "Open-source Android media player with background playback and offline audio.",
      tags: ["Kotlin", "Java", "Android Media3"],
      demo: "https://thtcsec.github.io/silentpipe",
      github: "https://github.com/thtcsec/SilentPipe"
    }
  ] as Project[],

  publications: [
    {
      id: "csonet-2026",
      title: "Network-Aware Event Sequence Modeling for User-Behavior and System Log Anomaly Detection",
      venue: "CSoNet 2026 · Springer LNCS",
      status: "Accepted",
      statusVi: "Đã chấp nhận",
      github: "https://github.com/thtcsec/log-anomaly-tcn-transformer",
      noteVi: "Kế thừa bản thảo VNICT 2026 đã rút trước khi xuất bản. Drain3 + GraphWalk; không trộn claim với SOICT.",
      noteEn: "Extends a VNICT 2026 manuscript withdrawn before publication. Drain3 + GraphWalk; not the SOICT paper."
    },
    {
      id: "soict-2026",
      title: "Campus Log Anomaly Detection under Proxy Labels: Validity Limits of Archive Splits and Masked TCN–Transformers",
      venue: "SOICT 2026 · Springer CCIS",
      status: "Accepted",
      statusVi: "Đã chấp nhận",
      github: "https://github.com/thtcsec/soict2026-llm-log-rca",
      noteVi: "Parser tùy chỉnh, không Drain3; không LLM/RCA. Nhãn proxy, không ground truth SOC.",
      noteEn: "Custom parser, not Drain3; no LLM/RCA. Proxy labels, not SOC ground truth."
    },
    {
      id: "rivf-2026",
      title: "Same Flows, Opposite Verdicts: Feature Reconstruction in Cross-Dataset Intrusion Detection",
      venue: "IEEE RIVF 2026 · IEEE Xplore",
      status: "Accepted",
      statusVi: "Đã chấp nhận",
      github: "https://github.com/thtcsec/rivf2026-federated-edge/tree/rivf2026-camera-ready",
      noteVi: "FedAvg là thiết lập đánh giá, không phải nguyên nhân đảo dấu ROC-AUC.",
      noteEn: "FedAvg is the evaluation setting, not the cause of the ROC-AUC sign flip."
    },
    {
      id: "icai-2026",
      title: "An AI-Native Event-Driven Edge–Cloud Architecture for Autonomous Network Security in Campus Infrastructure",
      venue: "ICAI-2026",
      status: "Under Review",
      statusVi: "Đang phản biện",
      github: "https://github.com/thtcsec/icai-fai2026",
      noteVi: "Artifact mã nguồn; bản thảo PDF chỉ trên CMT.",
      noteEn: "Code artifact only; manuscript PDF stays on CMT."
    },
    {
      id: "vnict-2026",
      title: "Application of TCN and Transformer Networks for Log Anomaly Detection in Large-Scale Enterprise and Industrial Networks",
      venue: "VNICT 2026",
      status: "Withdrawn",
      statusVi: "Đã rút",
      noteVi: "Rút trước khi xuất bản. Bản mở rộng là CSoNet 2026.",
      noteEn: "Withdrawn before publication. Extended as the CSoNet 2026 paper."
    }
  ] as PublicationItem[],

  community: [
    {
      id: "agora",
      name: "Agora Ambassador",
      stat: "Agora",
      roleVi: "Đại sứ Agora (Agora Ambassador)",
      roleEn: "Official Agora Ambassador",
      descVi: "Kết nối cộng đồng lập trình viên và chia sẻ về công nghệ Real-Time Engagement & WebRTC.",
      descEn: "Engaging with developers and sharing Real-Time Engagement (RTE) and WebRTC technologies.",
      link: "https://www.agora.io/en/community/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    },
    {
      id: "gsa",
      name: "Google Student Ambassador",
      stat: "Google",
      roleVi: "Cựu Đại sứ Sinh viên Google Mùa 1 (Top 200)",
      roleEn: "Ex-Google Student Ambassador Season 1 (Top 200)",
      descVi: "Đại diện HUFLIT trong Top 200 Đại sứ Sinh viên Google Mùa 1, lan tỏa công nghệ đến sinh viên.",
      descEn: "Represented HUFLIT in the Top 200 Google Student Ambassadors Season 1.",
      link: "https://www.google.com/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    },
    {
      id: "gdg",
      name: "Google Developer Groups (GDG HCMC)",
      stat: "GDG",
      roleVi: "Thành viên GDG HCMC",
      roleEn: "Member · GDG HCMC",
      descVi: "Tham gia các buổi workshop về Google Cloud, AI và giao lưu cùng cộng đồng lập trình viên.",
      descEn: "Participating in Google Cloud and AI workshops with the developer community.",
      link: "https://gdg.community.dev/u/tu44/",
      linkTextVi: "Tham gia group→",
      linkTextEn: "Join group→"
    },
    {
      id: "vinuni",
      name: "VinUniversity AI Practical Talent",
      stat: "VinUni",
      roleVi: "Admitted Scholar (Cohort 1, hoãn đến 2027)",
      roleEn: "Admitted Scholar (Cohort 1, deferred to 2027)",
      descVi: "Trúng tuyển chương trình Đào tạo Nhân tài AI Thực chiến Cohort 1; enrollment được giữ chỗ đến 2027.",
      descEn: "Admitted to the AI Practical Talent program, Cohort 1; enrollment reserved until 2027.",
      link: "https://vinuni.edu.vn/",
      linkTextVi: "Tìm hiểu thêm→",
      linkTextEn: "Learn more→"
    }
  ] as CommunityItem[],

  career: [
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "Software Engineer (Backend, in Training)",
      roleEn: "Software Engineer (Backend, in Training)",
      companyVi: "Grab",
      companyEn: "Grab",
      descVi: "Tham gia phát triển backend microservices và API.",
      descEn: "Contributing to backend microservices and API work."
    },
    {
      period: "Aug – Sep 2026",
      isCurrent: false,
      roleVi: "AI Engineer",
      roleEn: "AI Engineer",
      companyVi: "VETC",
      companyEn: "VETC",
      descVi: "Computer Vision cho camera giao thông: mật độ realtime, GIS hành lang, microservices ITS.",
      descEn: "Computer Vision for traffic cameras: real-time density, corridor GIS, ITS microservices."
    },
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "AI Infra & Cloud Solutions Engineer",
      roleEn: "AI Infra & Cloud Solutions Engineer",
      companyVi: "Next Step Technology Solutions",
      companyEn: "Next Step Technology Solutions",
      descVi: "Pipeline serverless trên Cloudflare (Workers AI, RAG, D1/R2/Vectorize).",
      descEn: "Serverless pipelines on Cloudflare (Workers AI, RAG, D1/R2/Vectorize)."
    },
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "Global Innovation Program · Extended TA",
      roleEn: "Global Innovation Program · Extended TA",
      companyVi: "Tsinghua University",
      companyEn: "Tsinghua University",
      descVi: "Cựu học viên chương trình Global Innovation / AI & Innovation Digital Economy. Academic supervision — GS. Kris Singh, Tsinghua MSE / SRII.",
      descEn: "Alumnus of the Global Innovation Program / AI & Innovation Digital Economy. Academic supervision — Prof. Kris Singh, Tsinghua MSE / SRII."
    },
    {
      period: "2023 – 2027",
      isCurrent: true,
      roleVi: "Sinh viên ngành An toàn thông tin",
      roleEn: "Cybersecurity Student (B.S.)",
      companyVi: "HUFLIT",
      companyEn: "HUFLIT",
      descVi: "Cử nhân An toàn thông tin. GPA tích lũy 3.52/4.0 · 138 tín chỉ.",
      descEn: "Bachelor of Cybersecurity. Cumulative GPA 3.52/4.0 · 138 credits."
    }
  ] as CareerItem[],

  skills: {
    groups: [
      {
        nameVi: "Cloud & Security",
        nameEn: "Cloud & Security",
        skills: ["Cloudflare", "AWS", "Google Cloud", "Zero Trust", "WAF", "CDN", "Docker", "Linux", "Wireshark", "Burp Suite"]
      },
      {
        nameVi: "AI & Data",
        nameEn: "AI & Data",
        skills: ["PyTorch", "TensorRT", "OpenCV", "YOLOv11", "Qdrant", "PostgreSQL", "pgvector", "Redis"]
      },
      {
        nameVi: "Backend & Web",
        nameEn: "Backend & Web",
        skills: ["Java", "Python", "TypeScript", "C#", "FastAPI", "ASP.NET Core", "React", "Next.js"]
      },
      {
        nameVi: "DevOps & Tools",
        nameEn: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Terraform", "Postman"]
      }
    ],
    certs: [
      {
        title: "Excellence Award — Global AI + Materials Innovation Application Competition (Track 4)",
        issuer: "Tsinghua University MSE"
      },
      {
        title: "Global Innovation Program — AI & Innovation Digital Economy",
        issuer: "Tsinghua University"
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
        title: "Introduction to Critical Infrastructure Protection (ICIP)",
        issuer: "OPSWAT Academy"
      }
    ] as CertItem[]
  }
};
