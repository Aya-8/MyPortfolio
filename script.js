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
    { label: "Role", value: "ゲームエンジニア" },
    { label: "School", value: "〇〇大学 / 学部・学科・学年を入力" },
    { label: "GitHub", value: "GitHub URL を追加" },
    { label: "Email", value: "連絡先メールアドレスを追加" }
  ]
};

const projects = [
  {
    title: "なつみんげ～",
    phase: "1年",
    roles: ["グラフィッカ"],
    description: "1年生の時に参加した作品で、グラフィック制作を担当しました。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "なつみんげ～ のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "会津大学の1年生に向けたワンボタンゲーム",
    phase: "1年",
    roles: ["グラフィック", "プログラミング"],
    description: "会津大学の1年生に向けたワンボタンゲームで、グラフィックとプログラミングを担当した作品です。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "会津大学の1年生に向けたワンボタンゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "プルプルプリンのゲーム",
    phase: "課プロ2年 夏",
    roles: ["企画", "プログラミング"],
    description: "課プロ2年夏に制作した作品で、企画とプログラミングを担当しました。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "プルプルプリンのゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "Access to your 5 Girls❤❤❤❤❤",
    phase: "夏みんげ～",
    roles: ["担当詳細を追記予定"],
    description: "アピール作品として掲載。担当範囲や工夫した点を追記すると、面接時により伝わりやすくなります。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "Access to your 5 Girls のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "昔の労働体験ゲーム(煮塾ゲーム)",
    phase: "課プロ2年 冬",
    roles: ["担当詳細を追記予定"],
    description: "課プロ2年冬の代表作として掲載。担当内容や制作背景を追記できるように余白を持たせています。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "昔の労働体験ゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "起き上がりこぼしゲーム",
    phase: "課プロ1年 冬",
    roles: ["モデリング", "イラスト", "ステージ作成"],
    description: "課プロ1年冬に制作した作品で、モデリング、イラスト、ステージ作成を担当しました。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "起き上がりこぼしゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "すごろくゲーム",
    phase: "制作作品",
    roles: ["モデリング", "ミニゲーム制作"],
    description: "すごろくゲームで、モデリングとミニゲーム制作を担当しました。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "すごろくゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  },
  {
    title: "チョコ旅",
    phase: "制作作品",
    roles: ["グラフィッカ"],
    description: "チョコ旅では、グラフィッカとしてビジュアル制作に関わりました。",
    categories: ["games"],
    thumbnailImage: "",
    thumbnailAlt: "チョコ旅 のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    showVideo: true
  }
];

const skillGroups = {
  primaryLanguages: [
    { name: "C", note: "2Y" },
    { name: "C#", note: "2Y" }
  ],
  classroomLanguages: [
    { name: "Java" },
    { name: "HTML" },
    { name: "CSS" }
  ],
  applications: [
    { name: "Unity", note: "2Y" },
    { name: "Blender", note: "2Y" },
    { name: "Procreate", note: "4Y" },
    { name: "GitHub", note: "2Y" }
  ]
};

const education = [
  { date: "2024", title: "私立●●高校 女子部 卒業", body: "" },
  { date: "2021", title: "私立●●高校 女子部 入学", body: "" }
];

const categoryLabels = {
  games: "Games",
  models: "3D Models",
  illustrations: "Illustration",
  hlsl: "HLSL"
};

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

function createVideoBlock(project, showPlaceholder = false) {
  const embedUrl = toEmbedUrl(project.youtube);

  if (!embedUrl) {
    if (!showPlaceholder) {
      return null;
    }

    const placeholder = document.createElement("div");
    placeholder.className = "video-placeholder";
    placeholder.textContent = "Add a YouTube link to show the play video here.";
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

function createImageFrame(src, alt, frameClassName, imageClassName) {
  const frame = document.createElement("div");
  frame.className = frameClassName;

  const image = document.createElement("img");
  image.className = imageClassName;
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";

  frame.append(image);
  return frame;
}

function createProjectCard(project, options = {}) {
  const card = document.createElement("article");
  card.className = "work-card";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "work-trigger";
  trigger.setAttribute("aria-haspopup", "dialog");

  const thumbnail = document.createElement("div");
  thumbnail.className = "work-thumbnail";
  const hasThumbnailImage = Boolean(project.thumbnailImage);

  const periodBadge = document.createElement("span");
  periodBadge.className = "thumbnail-period";
  periodBadge.textContent = project.phase;
  thumbnail.append(periodBadge);

  if (hasThumbnailImage) {
    thumbnail.classList.add("has-image");
    thumbnail.append(
      createImageFrame(
        project.thumbnailImage,
        project.thumbnailAlt || `${project.title} のサムネイル`,
        "thumbnail-image-frame",
        "thumbnail-image"
      )
    );
  }

  const textLayer = document.createElement("div");
  textLayer.className = "thumbnail-text";

  const title = document.createElement("h3");
  title.className = "thumbnail-title";
  title.textContent = project.title;

  const caption = document.createElement("p");
  caption.className = "thumbnail-caption";
  caption.textContent = project.roles.join(" / ");

  textLayer.append(title, caption);
  thumbnail.append(textLayer);

  const meta = document.createElement("div");
  meta.className = "work-card-meta";

  const openText = document.createElement("span");
  openText.className = "work-open-text";
  openText.textContent = "Open Details";

  meta.append(openText);

  if (project.playUrl) {
    meta.append(createPill("Playable", "work-status-pill"));
  }

  trigger.append(thumbnail, meta);
  trigger.addEventListener("click", () => {
    openProjectModal(project, trigger);
  });

  card.append(trigger);
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
  wrapper.textContent = entry.note ? `${entry.name} / ${entry.note}` : entry.name;
  return wrapper;
}

function renderProfile() {
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-summary").textContent = profile.summary;
  document.getElementById("about-copy").textContent = profile.about;

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
  const containers = {
    games: document.getElementById("games-grid"),
    models: document.getElementById("models-grid"),
    illustrations: document.getElementById("illustrations-grid")
  };

  projects.forEach((project) => {
    project.categories.forEach((category) => {
      const container = containers[category];
      if (!container) {
        return;
      }

      container.append(createProjectCard(project));
    });
  });
}

function createModalMetaItem(label, value) {
  const item = document.createElement("div");
  item.className = "project-modal-meta-item";

  const labelElement = document.createElement("p");
  labelElement.className = "project-modal-meta-label";
  labelElement.textContent = label;

  const valueElement = document.createElement("p");
  valueElement.className = "project-modal-meta-value";
  valueElement.textContent = value;

  item.append(labelElement, valueElement);
  return item;
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal");
  const phase = document.getElementById("project-modal-phase");
  const title = document.getElementById("project-modal-title");
  const role = document.getElementById("project-modal-role");
  const tags = document.getElementById("project-modal-tags");
  const meta = document.getElementById("project-modal-meta");
  const description = document.getElementById("project-modal-description");
  const media = document.getElementById("project-modal-media");
  const actions = document.getElementById("project-modal-actions");
  let lastTrigger = null;

  function closeProjectModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  function openProjectModal(project, trigger) {
    lastTrigger = trigger;
    phase.textContent = project.phase;
    title.textContent = project.title;
    role.textContent = `Role: ${project.roles.join(" / ")}`;
    description.textContent = project.description;

    tags.replaceChildren();
    project.roles.forEach((tag) => {
      tags.append(createPill(tag, "project-tag"));
    });

    meta.replaceChildren(
      createModalMetaItem("Period", project.phase),
      createModalMetaItem("Category", project.categories.map((category) => categoryLabels[category]).join(" / ")),
      createModalMetaItem("Role", project.roles.join(" / ")),
      createModalMetaItem("Published", project.playUrl ? project.playPlatform || "External" : "Not Set")
    );

    media.replaceChildren();
    if (project.thumbnailImage) {
      media.append(
        createImageFrame(
          project.thumbnailImage,
          project.thumbnailAlt || `${project.title} のサムネイル`,
          "project-modal-image-frame",
          "project-modal-image"
        )
      );
    }

    if (project.showVideo) {
      const video = createVideoBlock(project, true);
      if (video) {
        media.append(video);
      }
    }

    actions.replaceChildren();
    if (project.playUrl) {
      const playLink = document.createElement("a");
      playLink.className = "project-link";
      playLink.href = project.playUrl;
      playLink.target = "_blank";
      playLink.rel = "noreferrer";
      playLink.textContent = project.playLabel || "Play Game";
      actions.append(playLink);
    }

    if (project.youtube) {
      const link = document.createElement("a");
      link.className = `project-link${project.playUrl ? " project-link-secondary" : ""}`;
      link.href = project.youtube;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "Watch Video";
      actions.append(link);
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
  }

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeProjectModal();
    }
  });

  return openProjectModal;
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

function setupSectionNavigation() {
  const sectionIds = ["about", "games", "models", "illustrations", "hlsl", "skills", "history"];
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

  function setActiveSection(activeId = "") {
    links.forEach((link) => {
      const isActive = link.dataset.sectionLink === activeId;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  anchorLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.replace("#", "") || "";

      if (sectionIds.includes(targetId)) {
        setActiveSection(targetId);
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.replace("#", "");

    if (sectionIds.includes(hashId)) {
      setActiveSection(hashId);
      return;
    }

    setActiveSection("");
  });

  const initialHash = window.location.hash.replace("#", "");
  if (sectionIds.includes(initialHash)) {
    setActiveSection(initialHash);
  } else {
    setActiveSection("");
  }
}

function setupIndexMenu() {
  const toggle = document.getElementById("index-menu-toggle");
  const layer = document.getElementById("index-menu-layer");

  if (!toggle || !layer) {
    return;
  }

  function setMenuOpen(isOpen) {
    layer.hidden = !isOpen;
    document.body.classList.toggle("index-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(layer.hidden);
  });

  layer.querySelectorAll("[data-close-index]").forEach((element) => {
    element.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  layer.querySelectorAll("[data-index-link]").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !layer.hidden) {
      setMenuOpen(false);
    }
  });
}

const openProjectModal = setupProjectModal();

renderProfile();
renderProjects();
renderSkills();
renderHistory();
setupReveal();
setupSectionNavigation();
setupIndexMenu();
