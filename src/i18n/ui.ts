import type { Locale } from "./locales";

const messages = {
  en: {
    skip: "Skip to main content", home: "Home", about: "About", events: "Events",
    accessibility: "Accessibility", terms: "Terms", privacy: "Privacy",
    conduct: "Code of Conduct", language: "Language", theme: "Theme",
    system: "System", light: "Light", black: "Black", superBlack: "Super Black",
    amoled: "AMOLED Black", dynamic: "Dynamic Color", footer: "Independent project. Not an official IWAG website.",
    eyebrow: "IWAG V2 · Independent re-engineering", title: "A clearer, lighter way to explore event information.",
    intro: "A new foundation focused on readable content, predictable navigation, accessibility, and low-end device performance.",
    status: "Development preview", statusText: "The V2 foundation is being built. Event details and official policies are not published here.",
    explore: "Explore the project", learn: "Read the accessibility approach",
    noticeTitle: "Independent project notice", notice: "This is an independent educational recreation. It is not affiliated with, endorsed by, or an official website of IWAG or its organizers.",
    notPublished: "This information has not been published in this preview.",
    legalDraft: "This page is a structural placeholder. No legal terms or privacy commitments are being represented as approved policy.",
    level: "Accessibility target", levelText: "WCAG 2.2 Level A is the stated target. This preview is not a conformance claim or completed accessibility audit."
  },
  id: {
    skip: "Lewati ke konten utama", home: "Beranda", about: "Tentang", events: "Acara",
    accessibility: "Aksesibilitas", terms: "Ketentuan", privacy: "Privasi",
    conduct: "Kode Etik", language: "Bahasa", theme: "Tema",
    system: "Sistem", light: "Terang", black: "Hitam", superBlack: "Super Hitam",
    amoled: "Hitam AMOLED", dynamic: "Warna Dinamis", footer: "Proyek independen. Bukan situs web resmi IWAG.",
    eyebrow: "IWAG V2 · Rekayasa ulang independen", title: "Cara yang lebih jelas dan ringan untuk menjelajahi informasi acara.",
    intro: "Fondasi baru yang berfokus pada konten mudah dibaca, navigasi konsisten, aksesibilitas, dan kinerja perangkat kelas bawah.",
    status: "Pratinjau pengembangan", statusText: "Fondasi V2 sedang dibangun. Detail acara dan kebijakan resmi belum diterbitkan di sini.",
    explore: "Jelajahi proyek", learn: "Baca pendekatan aksesibilitas",
    noticeTitle: "Pemberitahuan proyek independen", notice: "Ini adalah rekreasi edukatif independen. Proyek ini tidak berafiliasi, didukung, atau menjadi situs resmi IWAG maupun penyelenggaranya.",
    notPublished: "Informasi ini belum diterbitkan dalam pratinjau ini.",
    legalDraft: "Halaman ini hanya kerangka struktur. Tidak ada ketentuan hukum atau komitmen privasi yang dinyatakan sebagai kebijakan yang telah disetujui.",
    level: "Target aksesibilitas", levelText: "WCAG 2.2 Level A adalah target yang ditetapkan. Pratinjau ini bukan klaim kesesuaian atau audit aksesibilitas yang telah selesai."
  },
  "en-sg": {
    skip: "Skip to main content", home: "Home", about: "About", events: "Events",
    accessibility: "Accessibility", terms: "Terms", privacy: "Privacy",
    conduct: "Code of Conduct", language: "Language", theme: "Theme",
    system: "System", light: "Light", black: "Black", superBlack: "Super Black",
    amoled: "AMOLED Black", dynamic: "Dynamic Colour", footer: "Independent project. Not an official IWAG website.",
    eyebrow: "IWAG V2 · Independent re-engineering", title: "A clearer, lighter way to explore event information.",
    intro: "A new foundation focused on readable content, predictable navigation, accessibility, and low-end device performance.",
    status: "Development preview", statusText: "The V2 foundation is being built. Event details and official policies are not published here.",
    explore: "Explore the project", learn: "Read the accessibility approach",
    noticeTitle: "Independent project notice", notice: "This is an independent educational recreation. It is not affiliated with, endorsed by, or an official website of IWAG or its organisers.",
    notPublished: "This information has not been published in this preview.",
    legalDraft: "This page is a structural placeholder. No legal terms or privacy commitments are being represented as approved policy.",
    level: "Accessibility target", levelText: "WCAG 2.2 Level A is the stated target. This preview is not a conformance claim or completed accessibility audit."
  },
  "ms-my": {
    skip: "Langkau ke kandungan utama", home: "Laman utama", about: "Perihal", events: "Acara",
    accessibility: "Kebolehcapaian", terms: "Terma", privacy: "Privasi",
    conduct: "Kod Tatakelakuan", language: "Bahasa", theme: "Tema",
    system: "Sistem", light: "Cerah", black: "Hitam", superBlack: "Super Hitam",
    amoled: "Hitam AMOLED", dynamic: "Warna Dinamik", footer: "Projek bebas. Bukan laman web rasmi IWAG.",
    eyebrow: "IWAG V2 · Kejuruteraan semula bebas", title: "Cara yang lebih jelas dan ringan untuk meneroka maklumat acara.",
    intro: "Asas baharu yang menumpukan kandungan mudah dibaca, navigasi konsisten, kebolehcapaian dan prestasi peranti berspesifikasi rendah.",
    status: "Pratonton pembangunan", statusText: "Asas V2 sedang dibangunkan. Butiran acara dan dasar rasmi belum diterbitkan di sini.",
    explore: "Terokai projek", learn: "Baca pendekatan kebolehcapaian",
    noticeTitle: "Notis projek bebas", notice: "Ini ialah rekreasi pendidikan yang bebas. Projek ini tidak bergabung, disokong atau menjadi laman web rasmi IWAG atau penganjurnya.",
    notPublished: "Maklumat ini belum diterbitkan dalam pratonton ini.",
    legalDraft: "Halaman ini ialah rangka struktur sahaja. Tiada terma undang-undang atau komitmen privasi yang diwakili sebagai dasar yang telah diluluskan.",
    level: "Sasaran kebolehcapaian", levelText: "WCAG 2.2 Tahap A ialah sasaran yang dinyatakan. Pratonton ini bukan tuntutan pematuhan atau audit kebolehcapaian yang telah selesai."
  }
} as const;

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.en;
}
