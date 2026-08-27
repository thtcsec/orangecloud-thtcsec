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

export const portfolioData = {
  profile: {
    tagVi: "SOFTWARE ENGINEERING · BACKEND & AI",
    tagEn: "SOFTWARE ENGINEERING · BACKEND & AI",
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
    taglineVi: "Backend microservices · Computer Vision cho ITS · DevSecOps",
    taglineEn: "Backend microservices · Computer Vision for ITS · DevSecOps",
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
        "Software Engineer (Backend) Intern tại Grab và AI Engineer tại VETC — làm việc với backend microservices và Computer Vision cho hệ thống giao thông (ITS).",
        "Sinh viên năm cuối ngành An toàn thông tin tại HUFLIT (GPA 3.50/4.0), hoàn thành chương trình Global Innovation tại Tsinghua University.",
        "Đồng tác giả 7 bài báo nghiên cứu khoa học (CSONET, SOICT, IEEE RIVF, ICAI-FAI, VNICT) về AIOps, log anomaly detection và an ninh mạng SDN.",
        "Đại sứ Agora, cựu Đại sứ Sinh viên Google Mùa 1 (Top 200), thành viên GDG HCMC và tham gia các side-project cloud tại OrangeCloud."
      ],
      paragraphsEn: [
        "Software Engineer (Backend) Intern at Grab and AI Engineer at VETC — working on backend microservices and Computer Vision for ITS.",
        "Final-year Cybersecurity student at HUFLIT (GPA 3.50/4.0), completed the Global Innovation Program at Tsinghua University.",
        "Co-author of 7 research papers (CSONET, SOICT, IEEE RIVF, ICAI-FAI, VNICT) on AIOps, log anomaly detection, and SDN security.",
        "Agora Ambassador, ex-Google Student Ambassador Season 1 (Top 200), GDG HCMC member, and OrangeCloud cloud projects contributor."
      ],
      stats: [
        {
          num: "12+",
          labelVi: "Dự án thực tế",
          labelEn: "Projects Built"
        },
        {
          num: "7",
          labelVi: "Bài báo nghiên cứu",
          labelEn: "Research Papers"
        },
        {
          num: "10+",
          labelVi: "Giải thưởng & Hoạt động",
          labelEn: "Awards & Activities"
        },
        {
          num: "3.50",
          labelVi: "GPA (HUFLIT)",
          labelEn: "GPA (HUFLIT)"
        }
      ]
    }
  },

  projects: [
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
      descriptionVi: "Hệ thống Computer Vision kiểm tra khuyết tật bề mặt lớp phủ kết hợp dữ liệu đa cảm biến.",
      descriptionEn: "Computer Vision system for surface defect inspection fusing multi-sensor data.",
      tags: ["Python", "TensorRT", "FastAPI", "OpenCV"],
      demo: "",
      github: "https://github.com/thtcsec"
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
    },
    {
      id: "pentest-lab",
      title: "Realistic Pentest Lab",
      tag: "Security",
      descriptionVi: "Môi trường lab thực hành an ninh mạng, Web và Active Directory triển khai qua Docker.",
      descriptionEn: "Hands-on cybersecurity practice lab for Web and Active Directory with Docker.",
      tags: ["Docker", "Linux", "Active Directory", "Security"],
      demo: "https://hoangtu.dev/pentestlab",
      github: "https://github.com/thtcsec"
    }
  ] as Project[],

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
      id: "tsinghua",
      name: "Tsinghua University IEDE",
      stat: "Tsinghua",
      roleVi: "Học viên chương trình Global Innovation",
      roleEn: "Global Innovation Program Participant",
      descVi: "Hoàn thành khóa học Global Innovation tại Tsinghua University dưới sự hướng dẫn của GS. Kris Singh.",
      descEn: "Completed the Global Innovation Program at Tsinghua University supervised by Prof. Kris Singh.",
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
      descVi: "Tham gia phát triển backend microservices và xây dựng các API phục vụ hệ thống.",
      descEn: "Contributing to backend microservices development and API design."
    },
    {
      period: "2026 – nay",
      isCurrent: true,
      roleVi: "AI Engineer",
      roleEn: "AI Engineer",
      companyVi: "VETC",
      companyEn: "VETC",
      descVi: "Phát triển mô hình Computer Vision phân tích luồng video camera giao thông (ITS).",
      descEn: "Developing Computer Vision models for traffic camera video analytics (ITS)."
    },
    {
      period: "2026 – nay",
      roleVi: "Software Engineer",
      roleEn: "Software Engineer",
      companyVi: "Next Step Tech",
      companyEn: "Next Step Tech",
      descVi: "Phát triển các ứng dụng web và giải pháp cloud serverless.",
      descEn: "Developing web applications and serverless cloud solutions."
    },
    {
      period: "2025 – 2026",
      roleVi: "Nghiên cứu sinh viên (Student Researcher)",
      roleEn: "Student Researcher",
      companyVi: "HUFLIT & Tsinghua IEDE",
      companyEn: "HUFLIT & Tsinghua IEDE",
      descVi: "Tham gia nghiên cứu AIOps, phân tích log và đồng tác giả 7 bài báo khoa học.",
      descEn: "Research on AIOps and log anomaly detection; co-author of 7 research papers."
    },
    {
      period: "2023 – 2027",
      isCurrent: true,
      roleVi: "Sinh viên ngành An toàn thông tin",
      roleEn: "Cybersecurity Student (B.S.)",
      companyVi: "HUFLIT",
      companyEn: "HUFLIT",
      descVi: "Chương trình Cử nhân An toàn thông tin (GPA 3.50/4.0).",
      descEn: "Bachelor of Science in Cybersecurity (GPA 3.50/4.0)."
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
        title: "Global Program on Innovation and Entrepreneurship",
        issuer: "Tsinghua University (GS. Kris Singh)"
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
