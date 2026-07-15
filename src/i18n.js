export const i18n = {
  zh: {
    nav: {
      features: '功能',
      shortcuts: '快捷键',
      download: '下载',
      github: 'GitHub',
    },
    hero: {
      subtitle: '键鼠与数位板分离',
      description: '相当于在显示器前加了一面玻璃做笔记。<br />普通的数位笔不在笔记软件中操作时，会被操作系统当成鼠标。',
      download: '下载',
      learnMore: '了解更多',
    },
    features: {
      tag: '功能',
      title: '为什么不一样',
      items: [
        {
          title: '手写消息',
          desc: '在屏幕上涂鸦，粘贴到微信或抖音发送手写消息。小 GIF 会显示为表情包，适合 3 行以内约 50 字的快速留言。',
        },
        {
          title: '多种导出方式',
          desc: '支持有/无背景导出，格式包括 SVG、GIF、Xournal。一键快捷键直接复制到剪贴板。',
        },
        {
          title: '贝塞尔平滑',
          desc: '贝塞尔插值算法消除手部抖动，即使在大屏幕书写，笔迹依然自然流畅。',
        },
        {
          title: '磨砂玻璃背景',
          desc: '模糊背景凸显笔迹，同时仍可用键鼠操作其他应用。',
        },
        {
          title: '页面管理',
          desc: '浏览所有页面的缩略图，按 OCR 文本搜索，一键跳转，删除不需要的页面。',
        },
        {
          title: '跨平台',
          desc: 'Rust + Flutter 构建，原生性能。macOS 12+ 和 Windows 10+。Windows 需在数位板驱动中开启 Microsoft Ink。',
        },
      ],
    },
    showcase: {
      tag: '示例',
      title: '手写消息',
      desc: '涂鸦 → 复制 → 粘贴为表情包',
    },
    shortcuts: {
      tag: '快捷键',
      title: '键盘快捷键',
      desc: '一切尽在指尖',
      rows: [
        { func: '清屏', mac: '⌘ ⌃ C', win: 'Ctrl Alt C' },
        { func: '开启/关闭涂鸦', mac: '⌘ ⌃ V', win: 'Ctrl Alt V' },
        { func: '上一页 / 下一页', mac: '⌘ ⌃ J / K', win: 'Ctrl Alt J / K' },
        { func: '导出 SVG + GIF 到剪贴板', mac: '⌘ ⌃ G', win: 'Ctrl Alt G' },
        { func: '磨砂玻璃开关', mac: '⌘ ⌃ B', win: 'Ctrl Alt B' },
        { func: '打开设置', mac: '⌘ ⌃ ,' },
        { func: '退出', mac: '—', win: 'Ctrl Alt Q' },
      ],
    },
    download: {
      tag: '下载',
      title: '下载 Glaspen2',
      desc: '支持 macOS 和 Windows',
      downloadLabel: '下载',
      macOS: 'macOS',
      windows: 'Windows',
      requirements: 'macOS 12+ · Apple Silicon & Intel · Windows 10+',
    },
    footer: {
      releases: '版本发布',
      builtWith: 'Rust、Flutter 与 Astro 构建',
    },
  },

  en: {
    nav: {
      features: 'Features',
      shortcuts: 'Shortcuts',
      download: 'Download',
      github: 'GitHub',
    },
    hero: {
      subtitle: 'Separate the pen from the mouse',
      description: 'Like writing on a glass overlay in front of your monitor.<br />A regular stylus is treated as a mouse — this app removes that behavior.',
      download: 'Download',
      learnMore: 'Learn more',
    },
    features: {
      tag: 'Features',
      title: 'What makes Glaspen2 different',
      items: [
        {
          title: 'Handwritten Messages',
          desc: 'Doodle on screen, paste into WeChat or Douyin to send handwritten messages. Small GIFs display as stickers — perfect for quick notes up to ~50 characters.',
        },
        {
          title: 'Export Any Way',
          desc: 'Export with or without background, in SVG, GIF, or Xournal format. Copy directly to clipboard with a single shortcut.',
        },
        {
          title: 'Bezier Smoothing',
          desc: 'Reduces hand tremor with bezier interpolation. Even on large screens, your handwriting stays natural and smooth.',
        },
        {
          title: 'Frosted Glass',
          desc: 'Blur the background to focus on your annotations. Mouse and keyboard still work with other apps through the blur.',
        },
        {
          title: 'Page Management',
          desc: 'Browse thumbnails of all pages, search by OCR text, navigate instantly, and delete unwanted pages.',
        },
        {
          title: 'macOS + Windows',
          desc: 'Built with Rust and Flutter for native performance. Windows requires Microsoft Ink enabled in tablet driver settings.',
        },
      ],
    },
    showcase: {
      tag: 'Showcase',
      title: 'Handwritten Messages',
      desc: 'Doodle → Copy → Paste as sticker',
    },
    shortcuts: {
      tag: 'Shortcuts',
      title: 'Keyboard Shortcuts',
      desc: 'Everything at your fingertips',
      rows: [
        { func: 'Clear screen', mac: '⌘ ⌃ C', win: 'Ctrl Alt C' },
        { func: 'Toggle drawing', mac: '⌘ ⌃ V', win: 'Ctrl Alt V' },
        { func: 'Previous / Next page', mac: '⌘ ⌃ J / K', win: 'Ctrl Alt J / K' },
        { func: 'Export SVG + GIF to clipboard', mac: '⌘ ⌃ G', win: 'Ctrl Alt G' },
        { func: 'Frosted glass toggle', mac: '⌘ ⌃ B', win: 'Ctrl Alt B' },
        { func: 'Open settings', mac: '⌘ ⌃ ,' },
        { func: 'Quit', mac: '—', win: 'Ctrl Alt Q' },
      ],
    },
    download: {
      tag: 'Download',
      title: 'Get Glaspen2',
      desc: 'Available for macOS and Windows',
      downloadLabel: 'Download for',
      macOS: 'macOS',
      windows: 'Windows',
      requirements: 'macOS 12+ · Apple Silicon & Intel · Windows 10+',
    },
    footer: {
      releases: 'Releases',
      builtWith: 'Built with Rust, Flutter, and Astro',
    },
  },
};
