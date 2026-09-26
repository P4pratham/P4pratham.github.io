# Prathamesh Shelke — Senior Data Engineer Portfolio

> [!NOTE]
> 🚀 **Vibe Coded Notice**: This entire website was **Vibe Coded** with the assistance of **Antigravity AI** (Google DeepMind) and **Cursor AI**.

Welcome to the multi-dimensional portfolio repository for **Prathamesh Shelke**, Senior Data Engineer with **6+ Years of Experience** architecting enterprise data pipelines, Azure Databricks Lakehouses, PySpark workloads, and Snowflake cloud data warehouses.

---

## 🌟 Live Experiences

- 🍏 **Apple Liquid Glass UI**: [https://p4pratham.github.io/liquid/index.html](https://p4pratham.github.io/liquid/index.html)
- 🕷️ **Spider-Verse Multiverse UI**: [https://p4pratham.github.io/spiderverse%20portfolio/index.html](https://p4pratham.github.io/spiderverse%20portfolio/index.html)
- ⚡ **Classic Portfolio Mode**: [https://p4pratham.github.io/](https://p4pratham.github.io/)

---

## 🚀 Key Highlights & Expertise

- **6+ Years of Data Engineering Experience**: Specializing in high-throughput telecom ETL/ELT data pipelines, Medallion Architecture (Bronze &rarr; Silver &rarr; Gold), and large-scale cloud transformations (Three UK, Amdocs).
- **Core Technology Stack**:
  - **Big Data & Compute**: PySpark, Apache Spark Declarative Pipelines (SDP), SparkSQL, Delta Lake, Delta Live Tables (DLT).
  - **Cloud Platforms**: Azure Databricks, Azure Data Factory (ADF), Azure Blob Storage / ADLS Gen2, Snowflake DWH.
  - **Languages & Databases**: Python, SQL, Oracle PL/SQL, Bash.
  - **BI & Analytics Integration**: Adobe Analytics, Medallia, Salesforce extracts.

---

## 🎨 Multi-Dimensional Design Modes

### 1. 🍏 Apple Liquid Glass UI (`/liquid/`)
A state-of-the-art web interface inspired by Apple visionOS and modern liquid frosted glass aesthetics:
- **Fluid Canvas Engine**: Interactive background with real-time particle connections and liquid mouse-repulsion physics.
- **3D Specular Lighting Tilt Cards**: Reactive panel tilt and shine tracking that responds to cursor coordinates.
- **File-Based Blog Engine**: Dynamic technical writings section fetching raw `.txt` markdown files from `/liquid/content/` into an interactive frosted glass reader modal.
- **Config-Driven Metrics**: Dynamic stats counter fed directly from shared configuration.

### 2. 🕷️ Spider-Verse UI (`/spiderverse portfolio/`)
A comic-book-inspired, dynamic multiverse UI experience:
- **Multiverse Glitch Canvas**: Particle grid with spiderweb line connections and chromatic aberration effects.
- **Dimension Switcher**: Seamless interactive switching across alternate portfolio dimensions.
- **Custom Cursor & SFX**: Interactive spiderweb cursor trail and sound effects.

### 3. ⚡ Classic Mode (`/`)
A streamlined, high-performance portfolio mode focused on quick readability and accessibility.

---

## 📰 Blog Engine Architecture (`/liquid/`)

The blog system in the Apple Liquid Glass UI is built for zero bloat and effortless maintainability:

```
liquid/
├── index.html              # Main Liquid Glass UI entry point
├── styles.css              # Apple visionOS glassmorphism design system
├── script.js              # Interactive canvas, 3D tilt, modal reader & text parser
├── blogs.json              # Config catalog referencing articles, tags & cover images
├── content/                # Plain text / markdown content files for each blog post
│   ├── databricks-sdp-lakeflow.txt
│   └── azure-databricks-cost-optimization.txt
└── images/                 # Local media & cover images
```

### Adding a New Article
To publish a new technical writeup:
1. Add a text/markdown file in `liquid/content/my-article.txt`.
2. Add a simple JSON metadata record in `liquid/blogs.json`:
   ```json
   {
     "id": "my-article-slug",
     "title": "Your Technical Article Title",
     "date": "2026-09-26",
     "readTime": "5 min read",
     "coverImage": "https://images.unsplash.com/...",
     "summary": "Short card summary preview",
     "tags": ["Databricks", "PySpark"],
     "contentFile": "content/my-article.txt"
   }
   ```
3. Commit and push. The client-side parser in `script.js` fetches the `.txt` file asynchronously and formats headings, code blocks, lists, and links into the frosted glass reader modal.

---

## 🛠️ Local Development

To run and preview the portfolio locally:

```bash
# Clone the repository
git clone https://github.com/P4pratham/P4pratham.github.io.git
cd P4pratham.github.io

# Start a local HTTP server
python3 -m http.server 8000
```

Open `http://localhost:8000/liquid/index.html` in your web browser.

---

## 📜 License & Credits

- **Vibe Coded With**: [Antigravity AI](https://deepmind.google/technologies/gemini/) & [Cursor AI](https://cursor.com/)
- **Author**: [Prathamesh Shelke](https://www.linkedin.com/in/prathamesh-shelke-992488a9/)
- **Repository**: [P4pratham/P4pratham.github.io](https://github.com/P4pratham/P4pratham.github.io)
