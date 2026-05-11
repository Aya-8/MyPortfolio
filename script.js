const profile = {
  name: "芳賀満亜矢",
  furigana: "",
  title: "ゲームエンジニア",
  tagline: "サークルでのチーム制作や地域に根差したゲーム制作を通して、企画から実装まで横断して取り組むゲームエンジニア志望。",
  summary: "",
  about:
    "ゲームエンジニアとして、企画から実装、ビジュアル制作まで作品に必要な工程へ柔軟に関わってきました。プログラムだけでなく、モデルやイラスト、ステージ制作にも対応し、足りない要素を自分で補いながらゲーム全体を前に進められることが強みです。サークルでの共同制作だけでなく、地域に根差した展示向けゲーム制作にも取り組み、相手や場に合わせて体験を作ることを大切にしています。",
  strengths: ["横断的な制作力", "チーム制作", "地域向けゲーム制作", "自走力", "Unity制作"],
  contacts: [
    { label: "Email", value: "s1320062@u-aizu.ac.jp", href: "mailto:s1320062@u-aizu.ac.jp" },
    { label: "GitHub", value: "GitHub URL を追加", href: "" },
    { label: "YouTube", value: "YouTube URL を追加", href: "" }
  ]
};

const projects = [
  {
    title: "所持金ギリギリまで食べるぞ学食ゲーム",
    phase: "2024 8月～9月",
    roles: ["企画", "イラスト", "プログラミング"],
    technologies: ["Unity", "C#", "Procreate"],
    description:
      "新入生を対象に制作したワンボタンで遊べるゲームです。実際に会津大学の学食で食べられる食事を登場させ、値段も実際の学食に近い設定にしました。気軽に遊べる操作性を意識し、企画からプログラミング、イラストまで一人で制作しました。",
    categories: ["games"],
    thumbnailImage: "assets/thumbnails/gakushoku-thumbnail.png",
    thumbnailAlt: "所持金ギリギリまで食べるぞ学食ゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "https://youtu.be/_brd0CUjEHM",
    detailVideos: [
      {
        youtube: "https://youtu.be/og0FxZL2r90",
        title: "オリエンテーションゲーム ミニゲーム動画",
        poster: "assets/thumbnails/gakushoku-thumbnail.png",
        caption: "ミニゲーム動画"
      }
    ],
    showVideo: true
  },
  {
    title: "プルプルプリン",
    phase: "2026 6月～7月",
    roles: ["企画", "プログラミング"],
    technologies: ["Unity", "C#"],
    description:
      "喜多方で毎年夏に行われるレトロ横丁で体験型の展示を行ったゲームです。" +
      "レトロ横丁のレトロの要素から固めのカラメルプリンを連想しました。意識の芽生えたプリンとなり、食べられないようにスプーンから逃げるというストーリーです。" +
      "小さな子供でも楽しく遊べるように、GameOverなし、リザルトもスコアではなく、移動距離などに即したポジティブな言葉で表彰する形式にしています。実際の展示では、オリジナルコントローラーを用いて遊んでもらいました。",
    categories: ["games"],
    thumbnailImage: "assets/thumbnails/purupuru-purin-play.png",
    thumbnailAlt: "プルプルプリン のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "https://youtu.be/0Z_bYCMmzVI",
    detailImages: [
      {
        src: "assets/details/purupuru-purin-controller.jpg",
        alt: "プルプルプリンのオリジナルコントローラー接続写真",
        caption: "同じプロジェクトに参加する先輩に制作していただいたオリジナルコントローラー"
      }
    ],
    detailLinks: [
      {
        label: "Original Controller Video",
        url: "https://youtu.be/NRYm6qiJPUg"
      }
    ],
    showVideo: true
  },
  {
    title: "Access to your 5 Girls❤❤❤❤❤",
    phase: "2026 8月～10月",
    roles: ["プログラミング"],
    technologies: ["Unity", "C#"],
    description:
      "2025年の夏に、大学のサークルで7人チームを組んで制作した2Dノベルゲームです。ヒロインが5人いる恋愛シミュレーションノベルゲームで、複数の女の子たちと並列して連絡を取りながら、デートや交際を進めていきます。" +
      "私が担当した範囲は主に、システムメッセージの生成やメモ機能、LoveCheckerというゲーム内でヒロインたちの好感度を見られる機能の作成です。",
    categories: ["games"],
    thumbnailImage: "assets/thumbnails/access-5girls-thumbnail.png",
    thumbnailAlt: "Access to your 5 Girls のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "https://youtu.be/4JdJ72pae7A",
    detailLinks: [
      {
        label: "PandD Website",
        url: "https://pandd.sakura.ne.jp/"
      },
      {
        label: "PandD 2025 Winter",
        url: "https://pandd.sakura.ne.jp/game.html"
      }
    ],
    showVideo: true
  },
  {
    title: "昔の労働体験ゲーム(煮塾ゲーム)",
    phase: "2025 11月～2026 1月",
    roles: ["企画", "プログラミング"],
    technologies: ["Unity", "C#", "Blender", "Procreate"],
    description: "課プロ2年冬に制作した作品で、企画とプログラミングを担当しました。",
    categories: ["games"],
    thumbnailImage: "assets/thumbnails/old-craft-thumbnail.png",
    thumbnailAlt: "昔の労働体験ゲーム のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    detailImages: [
      {
        src: "assets/details/old-craft-controller.jpg",
        alt: "昔の労働体験ゲームのオリジナルコントローラー操作写真",
        caption: "Original controller setup"
      }
    ],
    showVideo: true
  },
  {
    title: "起き上がりこぼしゲーム",
    phase: "2024 11月～2026 1月",
    roles: ["モデリング", "イラスト"],
    technologies: ["Unity", "C#", "Blender", "Procreate"],
    description: "課プロ1年冬に制作した作品で、モデリングとイラストを担当しました。",
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
    technologies: ["Unity", "C#"],
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
    phase: "2026 2月～4月(継続開発中)",
    roles: ["プロジェクトマネージャー", "モデリング", "アニメーション"],
    technologies: ["Unity", "C#", "Blender"],
    description:
      "大学のサークルで8人チームを組み、開発しているアクションゲームです。チョコの特徴である「溶ける」や「他の食べ物をコーティングできる」といった要素を取り入れつつ、ポップな雰囲気のゲームにしました。プロジェクトマネージャーとして進行しながら、主にモデリングとキャラクターアニメーションを担当しました。",
    categories: ["games"],
    thumbnailImage: "assets/thumbnails/choco-tabi-character-thumbnail.png",
    thumbnailAlt: "チョコ旅 のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "https://youtu.be/Fz9tC0Q5S3Q",
    showVideo: true
  },
  {
    title: "チョコ旅 キャラクターモデル・アニメーション",
    phase: "2026 2月～4月(継続開発中)",
    roles: ["モデリング", "アニメーション"],
    technologies: ["Blender"],
    description:
      "チョコ旅で担当した3DCGのうち、キャラクターアニメーションをまとめた作品です。ゲーム本編で使用する動きが分かるように、アニメーションの見せ場を中心に掲載しています。",
    categories: ["models"],
    thumbnailImage: "assets/thumbnails/choco-tabi-character-thumbnail.png",
    thumbnailAlt: "チョコ旅 キャラクターモデル・アニメーション のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    detailVideos: [
      {
        src: "assets/details/choco-tabi-3dcg.mp4",
        title: "チョコ旅 キャラクターアニメーション 1",
        poster: "assets/thumbnails/choco-tabi-character-thumbnail.png",
        caption: "キャラクターアニメーション"
      },
      {
        src: "assets/details/choco-tabi-character-animation-2.mp4",
        title: "チョコ旅 キャラクターアニメーション 2",
        poster: "assets/thumbnails/choco-tabi-character-thumbnail.png",
        caption: "キャラクターアニメーション"
      }
    ],
    showPhase: false,
    showRole: false,
    modalMetaFields: ["tech"],
    showVideo: false
  },
  {
    title: "チョコ旅 シェーダー",
    phase: "2026 2月～4月(継続開発中)",
    roles: ["シェーダー"],
    technologies: ["Unity", "Shader Graph"],
    description:
      "チョコ旅で使用している、チョコが形状変化するときのシェーダーをまとめた作品です。ゲーム内での見え方が分かるように、形状変化の表現を説明する動画を掲載しています。",
    categories: ["models"],
    thumbnailImage: "assets/thumbnails/choco-tabi-shader-thumbnail.png",
    thumbnailAlt: "チョコ旅 シェーダー のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    detailVideos: [
      {
        src: "assets/details/choco-tabi-shader.mp4",
        title: "チョコ旅 シェーダー動画",
        poster: "assets/thumbnails/choco-tabi-shader-thumbnail.png",
        caption: "チョコの形状変化シェーダー"
      }
    ],
    showPhase: false,
    showRole: false,
    modalMetaFields: ["tech"],
    showVideo: false
  },
  {
    title: "煮塾ゲームのエフェクト",
    phase: "2025 11月～2026 1月",
    roles: ["エフェクト"],
    technologies: ["Unity"],
    description:
      "煮塾ゲームで使用したエフェクトをまとめた作品です。ゲーム内での見え方が分かるように、動画で掲載しています。",
    categories: ["models"],
    thumbnailImage: "assets/thumbnails/nijuku-effect-thumbnail.png",
    thumbnailAlt: "煮塾ゲームのエフェクト のサムネイル",
    playUrl: "",
    playLabel: "Play on Unityroom",
    playPlatform: "Unityroom",
    youtube: "",
    detailVideos: [
      {
        src: "assets/details/nijuku-effect.mp4",
        title: "煮塾ゲームのエフェクト動画",
        poster: "assets/thumbnails/nijuku-effect-thumbnail.png",
        caption: "煮塾ゲームのエフェクト"
      }
    ],
    showPhase: false,
    showRole: false,
    modalMetaFields: ["tech"],
    showVideo: false
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
  { date: "2021", title: "星野高校 入学", body: "" },
  { date: "2024", title: "星野高校 卒業", body: "" },
  { date: "2024", title: "会津大学 入学", body: "" }
];

const categoryLabels = {
  games: "Games",
  models: "3DCG",
  illustrations: "Illustration"
};

const events = [
  { date: "2024/07", title: "レトロ横丁", body: "喜多方市で行われる祭での体験型展示" },
  { date: "2024/10", title: "会津大学 文化祭 展示", body: "" },
  { date: "2024/12", title: "コミックマーケット105", body: "自主制作ゲームを展示・頒布" },
  { date: "2025/07", title: "レトロ横丁", body: "喜多方市で行われる祭での体験型展示" },
  { date: "2025/10", title: "会津大学 文化祭 展示", body: "" },
  { date: "2025/12", title: "コミックマーケット107", body: "自主制作ゲームを展示・頒布" },
  { date: "2026/01", title: "ミニミニ博物館", body: "福島県立博物館でのゲーム体験会" }
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

function createContactItem(entry) {
  const item = document.createElement("div");
  item.className = "contact-item";

  const label = document.createElement("p");
  label.className = "contact-label";
  label.textContent = entry.label;

  let valueElement;
  if (entry.href) {
    valueElement = document.createElement("a");
    valueElement.className = "contact-link";
    valueElement.href = entry.href;
    valueElement.target = entry.href.startsWith("mailto:") ? "_self" : "_blank";
    valueElement.rel = entry.href.startsWith("mailto:") ? "" : "noreferrer";
    valueElement.textContent = entry.value;
  } else {
    valueElement = document.createElement("p");
    valueElement.className = "contact-value";
    valueElement.textContent = entry.value;
  }

  item.append(label, valueElement);
  return item;
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

function createDetailVideoBlock(video) {
  const figure = document.createElement("figure");
  figure.className = "project-modal-figure";

  const frame = document.createElement("div");
  frame.className = "video-frame";

  const embedUrl = toEmbedUrl(video.youtube || "");

  if (embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.title = video.title || "Project video";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.append(iframe);
  } else {
    const player = document.createElement("video");
    player.src = video.src;
    player.controls = true;
    player.preload = "metadata";
    player.playsInline = true;
    player.title = video.title || "Project video";

    if (video.poster) {
      player.poster = video.poster;
    }

    frame.append(player);
  }

  figure.append(frame);

  if (video.caption) {
    const caption = document.createElement("figcaption");
    caption.className = "project-modal-image-caption";
    caption.textContent = video.caption;
    figure.append(caption);
  }

  return figure;
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

function createProjectActionLink(url, label, secondary = false) {
  const link = document.createElement("a");
  link.className = `project-link${secondary ? " project-link-secondary" : ""}`;
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function createDetailImageBlock(image) {
  const figure = document.createElement("figure");
  figure.className = "project-modal-figure";

  figure.append(
    createImageFrame(
      image.src,
      image.alt,
      "project-modal-image-frame",
      "project-modal-image"
    )
  );

  if (image.caption) {
    const caption = document.createElement("figcaption");
    caption.className = "project-modal-image-caption";
    caption.textContent = image.caption;
    figure.append(caption);
  }

  return figure;
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

  const status = document.createElement("div");
  status.className = "thumbnail-status";

  if (project.playUrl) {
    status.append(createPill("Playable", "work-status-pill"));
  }

  const hoverPanel = document.createElement("div");
  hoverPanel.className = "thumbnail-hover-panel";

  const hoverLabel = document.createElement("span");
  hoverLabel.className = "thumbnail-hover-label";
  hoverLabel.textContent = "詳細を開く";

  hoverPanel.append(hoverLabel);
  textLayer.append(title, caption);

  if (status.childElementCount > 0) {
    textLayer.append(status);
  }

  thumbnail.append(textLayer, hoverPanel);

  trigger.append(thumbnail);
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
  const nameElement = document.getElementById("profile-name");
  const taglineElement = document.getElementById("profile-tagline");
  const summaryElement = document.getElementById("profile-summary");

  const ruby = document.createElement("ruby");
  ruby.className = "profile-name-ruby";
  ruby.append(profile.name);

  if (profile.furigana) {
    const rt = document.createElement("rt");
    rt.textContent = profile.furigana;
    ruby.append(rt);
  }

  nameElement.replaceChildren(ruby);
  taglineElement.textContent = profile.tagline;
  summaryElement.textContent = profile.summary;
  summaryElement.hidden = !profile.summary;
}

function renderFooterContacts() {
  const footerContacts = document.getElementById("footer-contacts");

  profile.contacts.forEach((entry) => {
    footerContacts.append(createContactItem(entry));
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
    phase.hidden = project.showPhase === false || !project.phase;
    title.textContent = project.title;
    role.textContent = `Role: ${project.roles.join(" / ")}`;
    role.hidden = project.showRole === false || !(project.roles || []).length;
    description.textContent = project.description;

    tags.replaceChildren();
    project.roles.forEach((tag) => {
      tags.append(createPill(tag, "project-tag"));
    });
    tags.hidden = !(project.roles || []).length;

    const metaFields = project.modalMetaFields || ["period", "role", "tech"];
    const metaItems = [];

    if (metaFields.includes("period") && project.phase) {
      metaItems.push(createModalMetaItem("Period", project.phase));
    }

    if (metaFields.includes("role") && (project.roles || []).length) {
      metaItems.push(createModalMetaItem("Role", project.roles.join(" / ")));
    }

    if (metaFields.includes("tech") && (project.technologies || []).length) {
      metaItems.push(createModalMetaItem("Tech", (project.technologies || []).join(" / ")));
    }

    meta.replaceChildren(...metaItems);
    meta.hidden = metaItems.length === 0;

    media.replaceChildren();

    if (project.showVideo) {
      const video = createVideoBlock(project, true);
      if (video) {
        media.append(video);
      }
    }

    (project.detailImages || []).forEach((image) => {
      media.append(createDetailImageBlock(image));
    });

    (project.detailVideos || []).forEach((video) => {
      media.append(createDetailVideoBlock(video));
    });

    actions.replaceChildren();
    if (project.playUrl) {
      actions.append(createProjectActionLink(project.playUrl, project.playLabel || "Play Game"));
    }

    (project.detailLinks || []).forEach((link) => {
      actions.append(createProjectActionLink(link.url, link.label, true));
    });

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
  const sectionIds = ["games", "models", "skills", "history", "illustrations"];
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
renderFooterContacts();
setupReveal();
setupSectionNavigation();
setupIndexMenu();
