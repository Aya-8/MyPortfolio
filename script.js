const profile = {
  name: "YOUR NAME",
  title: "ゲームエンジニア",
  tagline: "グラフィック、モデリング、プログラミングを横断してゲーム制作に取り組むゲームエンジニア志望。",
  summary:
    "Unity を中心に、グラフィック制作・モデリング・イラスト・企画・プログラミングまで幅広く担当してきました。見た目の魅力と遊びやすさの両方を意識しながら、チーム制作でも個人制作でも手を動かせることが強みです。",
  about:
    "ゲームエンジニアとして、企画から実装、ビジュアル制作まで作品に必要な工程へ柔軟に関わってきました。プログラムだけでなく、モデルやイラスト、ステージ制作などにも対応できるため、ゲーム体験を総合的に形にできることをアピールポイントとしています。",
  strengths: ["プログラミング", "グラフィック", "モデリング", "企画", "Unity制作"],
  info: [
    { label: "志望職種", value: "ゲームエンジニア" },
    { label: "所属", value: "〇〇大学 / 学部・学科・学年を入力" },
    { label: "GitHub", value: "GitHub URL を追加" },
    { label: "メール", value: "連絡先メールアドレスを追加" }
  ]
};

const projects = [
  {
    title: "なつみんげ～",
    phase: "1年",
    roles: ["グラフィッカ"],
    description: "1年生の時に参加した作品で、グラフィック制作を担当しました。",
    featured: false,
    youtube: "",
    badge: "Work"
  },
  {
    title: "お酒のゲーム",
    phase: "課プロ1年 夏",
    roles: ["モデリング"],
    description: "課プロ1年夏に制作した作品で、モデリングを担当しました。",
    featured: false,
    youtube: "",
    badge: "Work"
  },
  {
    title: "会津大学の1年生に向けたワンボタンゲーム",
    phase: "1年 / 注目作品",
    roles: ["グラフィック", "プログラミング"],
    description: "会津大学の1年生に向けたワンボタンゲームで、グラフィックとプログラミングを担当した作品です。",
    featured: true,
    youtube: "",
    badge: "Featured"
  },
  {
    title: "プルプルプリンのゲーム",
    phase: "課プロ2年 夏 / 注目作品",
    roles: ["企画", "プログラミング"],
    description: "課プロ2年夏に制作した作品で、企画とプログラミングを担当しました。",
    featured: true,
    youtube: "",
    badge: "Featured"
  },
  {
    title: "Access to your 5 Girls❤❤❤❤❤",
    phase: "夏みんげ～ / 注目作品",
    roles: ["担当詳細を追記予定"],
    description: "アピール作品として掲載。担当範囲や工夫した点を追記すると、面接時により伝わりやすくなります。",
    featured: true,
    youtube: "",
    badge: "Featured"
  },
  {
    title: "昔の労働体験ゲーム(煮塾ゲーム)",
    phase: "課プロ2年 冬 / 注目作品",
    roles: ["担当詳細を追記予定"],
    description: "課プロ2年冬の代表作として掲載。担当内容や制作背景を追記できるように余白を持たせています。",
    featured: true,
    youtube: "",
    badge: "Featured"
  },
  {
    title: "起き上がりこぼしゲーム",
    phase: "課プロ1年 冬",
    roles: ["モデリング", "イラスト", "ステージ作成"],
    description: "課プロ1年冬に制作した作品で、モデリング、イラスト、ステージ作成を担当しました。",
    featured: false,
    youtube: "",
    badge: "Work"
  },
  {
    title: "すごろくゲーム",
    phase: "制作作品",
    roles: ["モデリング", "ミニゲーム制作"],
    description: "すごろくゲームで、モデリングとミニゲーム制作を担当しました。",
    featured: false,
    youtube: "",
    badge: "Work"
  },
  {
    title: "チョコ旅",
    phase: "制作作品",
    roles: ["グラフィッカ"],
    description: "チョコ旅では、グラフィッカとしてビジュアル制作に関わりました。",
    featured: false,
    youtube: "",
    badge: "Work"
  }
];

const skillGroups = {
  primaryLanguages: [
    { name: "C", note: "2年" },
    { name: "C#", note: "2年" }
  ],
  classroomLanguages: [
    { name: "Java", note: "授業で使用" },
    { name: "HTML", note: "授業で使用" },
    { name: "CSS", note: "授業で使用" }
  ],
  applications: [
    { name: "Unity", note: "2年" },
    { name: "Blender", note: "2年" },
    { name: "Procreate", note: "4年" },
    { name: "GitHub", note: "2年" }
  ]
};

const education = [
  { date: "2024", title: "私立●●高校 女子部 卒業", body: "" },
  { date: "2021", title: "私立●●高校 女子部 入学", body: "" }
];

const events = [
  { date: "2026/01", title: "ミニミニ博物館", body: "福島県立博物館" },
  { date: "2025/12", title: "コミックマーケット107", body: "自主制作ゲームを展示・頒布" },
  { date: "2025/10", title: "〇〇大学 文化祭 展示", body: "" },
  { date: "2025/07", title: "レトロ横丁", body: "喜多方市で行われる祭での体験型展示" },
  { date: "2024/12", title: "コミックマーケット105", body: "自主制作ゲームを展示・頒布" },
  { date: "2024/10", title: "〇〇大学 文化祭 展示", body: "" },
  { date: "2024/07", title: "レトロ横丁", body: "喜多方市で行われる祭での体験型展示" }
];

function toEmbedUrl(url) {
  if (!url) {
    return "";
  }

  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch (error) {
    return "";
  }

  return "";
}

function createMetricCard(value, label) {
  const wrapper = document.createElement("article");
  wrapper.className = "metric-card";

  const valueElement = document.createElement("div");
  valueElement.className = "metric-value";
  valueElement.textContent = value;

  const labelElement = document.createElement("div");
  labelElement.className = "metric-label";
  labelElement.textContent = label;

  wrapper.append(valueElement, labelElement);
  return wrapper;
}

function createInfoItem(label, value) {
  const item = document.createElement("div");
  item.className = "info-item";

  const labelElement = document.createElement("p");
  labelElement.className = "info-label";
  labelElement.textContent = label;

  const valueElement = document.createElement("p");
  valueElement.className = "info-value";
  valueElement.textContent = value;

  item.append(labelElement, valueElement);
  return item;
}

function createPill(text, className) {
  const pill = document.createElement("span");
  pill.className = className;
  pill.textContent = text;
  return pill;
}

function createVideoBlock(project) {
  const embedUrl = toEmbedUrl(project.youtube);

  if (!embedUrl) {
    const placeholder = document.createElement("div");
    placeholder.className = "video-placeholder";
    placeholder.textContent = "YouTube の共有リンクを追加すると、ここにプレイ動画が表示されます。";
    return placeholder;
  }

  const frame = document.createElement("div");
  frame.className = "video-frame";

  const iframe = document.createElement("iframe");
  iframe.src = embedUrl;
  iframe.title = `${project.title} プレイ動画`;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  frame.append(iframe);
  return frame;
}

function createProjectCard(project, featured = false) {
  const card = document.createElement("article");
  card.className = featured ? "project-card featured" : "project-card";

  const head = document.createElement("div");
  head.className = "project-head";

  const phase = document.createElement("p");
  phase.className = "project-phase";
  phase.textContent = project.phase;

  const badge = document.createElement("span");
  badge.className = "project-badge";
  badge.textContent = project.badge;

  head.append(phase, badge);

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;

  const role = document.createElement("p");
  role.className = "project-role";
  role.textContent = `担当: ${project.roles.join(" / ")}`;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "project-tags";
  project.roles.forEach((tag) => {
    tags.append(createPill(tag, "project-tag"));
  });

  const video = createVideoBlock(project);

  card.append(head, title, role, description, tags, video);

  if (project.youtube) {
    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.youtube;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "YouTube で見る";
    card.append(link);
  }

  return card;
}

function createTimelineItem(entry) {
  const item = document.createElement("article");
  item.className = "timeline-item";

  const date = document.createElement("p");
  date.className = "timeline-date";
  date.textContent = entry.date;

  const title = document.createElement("h3");
  title.className = "timeline-title";
  title.textContent = entry.title;

  item.append(date, title);

  if (entry.body) {
    const body = document.createElement("p");
    body.className = "timeline-body";
    body.textContent = entry.body;
    item.append(body);
  }

  return item;
}

function createSkillPill(entry) {
  const wrapper = document.createElement("div");
  wrapper.className = "skill-pill";
  wrapper.textContent = `${entry.name} / ${entry.note}`;
  return wrapper;
}

function renderProfile() {
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-summary").textContent = profile.summary;
  document.getElementById("about-copy").textContent = profile.about;

  const metrics = document.getElementById("hero-metrics");
  metrics.append(
    createMetricCard(projects.length, "作品数"),
    createMetricCard(projects.filter((project) => project.featured).length, "注目作品"),
    createMetricCard(events.length, "展示歴"),
    createMetricCard(skillGroups.applications.length, "主要ツール")
  );

  const strengthContainer = document.getElementById("core-strengths");
  profile.strengths.forEach((strength) => {
    strengthContainer.append(createPill(strength, "pill"));
  });

  const basicInfo = document.getElementById("basic-info");
  profile.info.forEach((entry) => {
    basicInfo.append(createInfoItem(entry.label, entry.value));
  });
}

function renderProjects() {
  const featuredContainer = document.getElementById("featured-projects");
  const allContainer = document.getElementById("all-projects");

  projects
    .filter((project) => project.featured)
    .forEach((project) => {
      featuredContainer.append(createProjectCard(project, true));
    });

  projects.forEach((project) => {
    allContainer.append(createProjectCard(project));
  });
}

function renderSkills() {
  const primaryLanguages = document.getElementById("primary-languages");
  const classroomLanguages = document.getElementById("classroom-languages");
  const applications = document.getElementById("applications");

  skillGroups.primaryLanguages.forEach((entry) => {
    primaryLanguages.append(createSkillPill(entry));
  });

  skillGroups.classroomLanguages.forEach((entry) => {
    classroomLanguages.append(createSkillPill(entry));
  });

  skillGroups.applications.forEach((entry) => {
    applications.append(createSkillPill(entry));
  });
}

function renderHistory() {
  const educationContainer = document.getElementById("education-timeline");
  const eventContainer = document.getElementById("event-timeline");

  education.forEach((entry) => {
    educationContainer.append(createTimelineItem(entry));
  });

  events.forEach((entry) => {
    eventContainer.append(createTimelineItem(entry));
  });
}

function setupReveal() {
  document.body.classList.add("js-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

renderProfile();
renderProjects();
renderSkills();
renderHistory();
setupReveal();
