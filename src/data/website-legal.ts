export type WebsitePolicy = {
  title: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
};

const empty = (title: string, summary: string): WebsitePolicy => ({ title, summary, sections: [] });

export const websiteLegalPolicies: Record<string, { en: WebsitePolicy; id: WebsitePolicy }> = {
  coc: {
    en: empty("Website Code of Conduct", "Draft standards for respectful use of this independent information website and any future digital spaces directly operated by this project."),
    id: empty("Kode Etik Situs", "Draf standar perilaku untuk penggunaan situs informasi independen ini dan ruang digital masa depan yang secara langsung dioperasikan proyek ini.")
  },
  ruleset: {
    en: {
      title: "Website Ruleset",
      summary: "Permitted and prohibited use of this independent informational website; it does not regulate event attendance or venue conduct.",
      sections: [
        { heading: "1. Scope", body: ["This draft applies only to access to and use of this independent informational website and technical services directly operated for it. It does not govern IWAG event attendance, tickets, badges, venue access, hotel facilities, dealers, performers, staff, or volunteers."] },
        { heading: "2. Permitted use", body: ["Visitors may read pages, follow links, and share ordinary page URLs for lawful purposes. Automated access must remain proportionate, respect published technical restrictions, and must not impair availability or bypass access controls."] },
        { heading: "3. Prohibited use", body: ["Do not attempt unauthorised access, interfere with service availability, deploy malware, probe systems beyond an expressly authorised test scope, impersonate the project or event organiser, harvest personal data, or reproduce protected third-party material without permission."] },
        { heading: "4. Enforcement boundary", body: ["No account-sanction or attendee-enforcement system is represented as operating. This draft grants no authority to exclude anyone from an IWAG event or venue. Any future website enforcement must have a verified operator, clear rules, proportionate action, recorded reasons, privacy safeguards, and a review route."] }
      ]
    },
    id: {
      title: "Aturan Penggunaan Situs",
      summary: "Penggunaan yang diperbolehkan dan dilarang pada situs informasi independen ini; aturan ini tidak mengatur kehadiran acara atau perilaku di venue.",
      sections: [
        { heading: "1. Cakupan", body: ["Draf ini hanya berlaku untuk akses dan penggunaan situs informasi independen ini serta layanan teknis yang secara langsung dioperasikan untuknya. Draf ini tidak mengatur kehadiran IWAG, tiket, badge, akses venue, fasilitas hotel, dealer, pengisi acara, staf, atau volunteer."] },
        { heading: "2. Penggunaan yang diperbolehkan", body: ["Pengunjung dapat membaca halaman, mengikuti tautan, dan membagikan URL halaman untuk tujuan yang sah. Akses otomatis harus tetap proporsional, menghormati pembatasan teknis yang dipublikasikan, dan tidak mengganggu ketersediaan atau melewati kontrol akses."] },
        { heading: "3. Penggunaan yang dilarang", body: ["Jangan mencoba akses tanpa izin, mengganggu ketersediaan layanan, menyebarkan malware, menguji sistem di luar lingkup pengujian yang secara tegas diizinkan, menyamar sebagai proyek atau penyelenggara acara, memanen data pribadi, atau menggandakan materi pihak ketiga yang dilindungi tanpa izin."] },
        { heading: "4. Batas penegakan", body: ["Tidak ada sistem sanksi akun atau penegakan terhadap peserta acara yang dinyatakan sedang beroperasi. Draf ini tidak memberi kewenangan untuk mengecualikan siapa pun dari acara IWAG atau venue. Penegakan situs di masa depan harus memiliki operator terverifikasi, aturan jelas, tindakan proporsional, alasan tercatat, perlindungan privasi, dan jalur peninjauan."] }
      ]
    }
  },
  terms: {
    en: empty("Website Terms", "Draft terms for this independent informational website only; not an event contract, ticket-sale term, or admission condition."),
    id: empty("Ketentuan Situs", "Draf ketentuan hanya untuk situs informasi independen ini; bukan kontrak acara, syarat penjualan tiket, atau ketentuan masuk.")
  },
  privacy: {
    en: empty("Website Privacy Notice", "A limited draft describing browser preferences and possible infrastructure request metadata; actual hosting, logs, controller identity, and retention still require verification."),
    id: empty("Pemberitahuan Privasi Situs", "Draf terbatas yang menjelaskan preferensi browser dan kemungkinan metadata permintaan infrastruktur; hosting, log, identitas pengendali, dan retensi aktual masih harus diverifikasi.")
  },
  cookies: {
    en: {
      title: "Cookie & Browser Storage Policy",
      summary: "Explains the distinction between cookies and local browser preferences used by the website; infrastructure logging remains subject to provider verification.",
      sections: [
        { heading: "1. Cookies and local storage are different", body: ["An HTTP cookie is sent according to its domain, path, expiry, and security attributes. Browser local storage is a separate client-side store and is not automatically sent with each request. A policy must not describe every local preference as a cookie."] },
        { heading: "2. Current preference storage", body: ["The reviewed interface stores display preferences locally under these keys: iwag-v2-theme, iwag-v2-accent, iwag-v2-text-scale, iwag-v2-text-spacing, iwag-v2-contrast, iwag-v2-motion, and iwag-v2-density. The reviewed preference script uses these values for display and accessibility settings."] },
        { heading: "3. Third-party and infrastructure technologies", body: ["No analytics tracker, behavioural advertising technology, remote font, or embedded social-media widget was identified in the reviewed application foundation. Hosting, CDN, DNS, security providers, and their server-side logs require separate live configuration and network verification."] },
        { heading: "4. User controls and future changes", body: ["Visitors can change preferences through the site controls where available or clear site data through their browser. Any future analytics, advertising, embedded service, or non-essential storage must be assessed and disclosed before activation, including any consent requirement that applies."] }
      ]
    },
    id: {
      title: "Kebijakan Cookie & Penyimpanan Browser",
      summary: "Menjelaskan perbedaan cookie dan preferensi lokal browser yang digunakan situs; pencatatan infrastruktur tetap memerlukan verifikasi penyedia.",
      sections: [
        { heading: "1. Cookie dan penyimpanan lokal berbeda", body: ["Cookie HTTP dikirim sesuai domain, path, masa berlaku, dan atribut keamanannya. Local storage browser adalah penyimpanan sisi-klien yang terpisah dan tidak otomatis dikirim pada setiap permintaan. Kebijakan tidak boleh menyebut setiap preferensi lokal sebagai cookie."] },
        { heading: "2. Penyimpanan preferensi saat ini", body: ["Antarmuka yang ditinjau menyimpan preferensi tampilan secara lokal dengan kunci: iwag-v2-theme, iwag-v2-accent, iwag-v2-text-scale, iwag-v2-text-spacing, iwag-v2-contrast, iwag-v2-motion, dan iwag-v2-density. Skrip preferensi yang ditinjau menggunakan nilai tersebut untuk pengaturan tampilan dan aksesibilitas."] },
        { heading: "3. Teknologi pihak ketiga dan infrastruktur", body: ["Tidak ditemukan pelacak analitik, teknologi iklan perilaku, font jarak jauh, atau widget media sosial tertanam pada fondasi aplikasi yang ditinjau. Hosting, CDN, DNS, penyedia keamanan, dan log sisi server memerlukan verifikasi konfigurasi langsung serta jaringan secara terpisah."] },
        { heading: "4. Kontrol pengguna dan perubahan mendatang", body: ["Pengunjung dapat mengubah preferensi melalui kontrol situs jika tersedia atau menghapus data situs melalui browser. Analitik, iklan, layanan tertanam, atau penyimpanan non-esensial di masa depan harus dinilai dan dijelaskan sebelum diaktifkan, termasuk persyaratan persetujuan yang berlaku."] }
      ]
    }
  },
  copyright: {
    en: {
      title: "Copyright & Intellectual Property",
      summary: "Clarifies that project code, third-party event marks, archived material, artwork, photographs, and fonts have distinct ownership and licence conditions.",
      sections: [
        { heading: "1. Separate rights and licences", body: ["The project’s own code and original documentation are governed by the licence and notices attached to those files. Third-party names, marks, artwork, photographs, written material, and other assets remain with their respective owners unless a specific licence or permission states otherwise."] },
        { heading: "2. No permission inferred from public access", body: ["A publicly accessible page or an archived copy is not, by itself, permission to reproduce, redistribute, modify, or commercially use its contents. Preserve attribution and comply with each asset’s actual licence. Do not assume the repository’s root licence automatically covers third-party archive material."] },
        { heading: "3. Requests and disputes", body: ["No dedicated rights-contact address has been verified for this preview. Do not submit confidential personal information through public issue trackers. A final notice must identify a monitored rights contact and a documented process before promising takedown or response times."] }
      ]
    },
    id: {
      title: "Hak Cipta & Kekayaan Intelektual",
      summary: "Menjelaskan bahwa kode proyek, merek acara pihak ketiga, materi arsip, karya seni, foto, dan font memiliki pemilik serta ketentuan lisensi yang berbeda.",
      sections: [
        { heading: "1. Hak dan lisensi yang terpisah", body: ["Kode dan dokumentasi asli proyek tunduk pada lisensi serta pemberitahuan yang melekat pada masing-masing berkas. Nama, merek, karya seni, foto, materi tertulis, dan aset pihak ketiga tetap menjadi milik pemiliknya kecuali lisensi atau izin tertentu menyatakan sebaliknya."] },
        { heading: "2. Akses publik bukan izin penggunaan", body: ["Halaman yang dapat diakses publik atau salinan arsip tidak dengan sendirinya memberi izin untuk menggandakan, mendistribusikan ulang, memodifikasi, atau menggunakan isinya secara komersial. Pertahankan atribusi dan patuhi lisensi aktual setiap aset. Jangan menganggap lisensi root repository otomatis mencakup materi arsip pihak ketiga."] },
        { heading: "3. Permintaan dan sengketa", body: ["Alamat kontak khusus hak cipta belum diverifikasi untuk pratinjau ini. Jangan mengirim informasi pribadi rahasia melalui issue tracker publik. Pemberitahuan final harus mengidentifikasi kontak hak cipta yang dipantau dan proses terdokumentasi sebelum menjanjikan penghapusan atau waktu respons."] }
      ]
    }
  },
  disclaimer: {
    en: {
      title: "Information Notice",
      summary: "Explains the independent, informational and time-limited nature of this preview and the limits of third-party links and unverified facts.",
      sections: [
        { heading: "1. Independent publication", body: ["This project is an independent informational reconstruction. It is not affiliated with, endorsed by, or authorised to speak for IWAG, its organiser, the hotel, vendors, or other named parties. Names and references are used to identify the subject of public information."] },
        { heading: "2. Accuracy and changes", body: ["Content is a dated snapshot of sources reviewed at the time stated. Event dates, venue arrangements, prices, participation status, travel information, and third-party services may change. Confirm material details with the responsible official source before relying on them."] },
        { heading: "3. No professional or emergency service", body: ["This preview does not provide legal, medical, immigration, financial, security, or emergency advice. It is not a ticketing, registration, booking, or event-admission service. Nothing here removes mandatory rights or liability that cannot lawfully be excluded."] },
        { heading: "4. External resources", body: ["External links are provided for reference. Their operators control their own content, availability, security, and privacy practices. A link does not imply endorsement or a partnership."] }
      ]
    },
    id: {
      title: "Pemberitahuan Informasi",
      summary: "Menjelaskan sifat pratinjau yang independen, informasional, dan terbatas waktu serta batas tautan pihak ketiga dan fakta yang belum diverifikasi.",
      sections: [
        { heading: "1. Publikasi independen", body: ["Proyek ini merupakan rekonstruksi informasi independen. Proyek ini tidak berafiliasi, tidak disahkan, dan tidak berwenang berbicara atas nama IWAG, penyelenggaranya, hotel, vendor, atau pihak lain yang disebutkan. Nama dan referensi digunakan untuk mengidentifikasi subjek informasi publik."] },
        { heading: "2. Akurasi dan perubahan", body: ["Konten merupakan snapshot bertanggal dari sumber yang ditinjau pada waktu yang disebutkan. Tanggal acara, pengaturan venue, harga, status partisipasi, informasi perjalanan, dan layanan pihak ketiga dapat berubah. Konfirmasikan detail penting melalui sumber resmi yang bertanggung jawab sebelum mengandalkannya."] },
        { heading: "3. Bukan layanan profesional atau darurat", body: ["Pratinjau ini tidak memberikan nasihat hukum, medis, imigrasi, keuangan, keamanan, atau layanan darurat. Ini bukan layanan tiket, pendaftaran, pemesanan, atau penerimaan peserta acara. Tidak ada bagian yang menghapus hak wajib atau tanggung jawab yang secara hukum tidak dapat dikesampingkan."] },
        { heading: "4. Sumber eksternal", body: ["Tautan eksternal disediakan sebagai referensi. Operator masing-masing mengendalikan konten, ketersediaan, keamanan, dan praktik privasinya. Tautan tidak berarti dukungan atau kemitraan."] }
      ]
    }
  },
  accessibility: {
    en: empty("Accessibility Statement", "Describes the website’s current accessibility design target and known unverified areas; it is not a conformance claim or a venue-accessibility statement."),
    id: empty("Pernyataan Aksesibilitas", "Menjelaskan target desain aksesibilitas situs dan area yang belum diverifikasi; bukan klaim kesesuaian atau pernyataan aksesibilitas venue.")
  },
  moderation: {
    en: {
      title: "Moderation & Reporting",
      summary: "States the current limits of website moderation and sets safeguards required before any interactive reporting or community feature is launched.",
      sections: [
        { heading: "1. Current status", body: ["The reviewed website is informational and does not provide user accounts, public comments, direct messages, user uploads, or a verified staffed reporting channel. This page is not an incident-report form. Do not send sensitive information through public repository issues or unrelated third-party channels."] },
        { heading: "2. Future reporting design", body: ["Before an interactive feature is launched, the operator must identify a monitored and accessible reporting route, the responsible reviewer, scope, evidence-handling rules, privacy notice, escalation criteria, and a realistic response commitment. No contact address or response-time promise is invented here."] },
        { heading: "3. Procedural safeguards", body: ["Any future restriction should identify the applicable website rule, relevant facts, reasons, duration where relevant, and available review route. Urgent interim measures should be distinguished from final findings. Material or permanent restrictions should receive independent human review where practicable, with conflict-of-interest safeguards and protection against retaliation."] },
        { heading: "4. No event authority", body: ["This draft does not authorise the website operator to ban anyone from an IWAG event, revoke an event pass, direct venue staff, or decide an organiser’s disciplinary case. Event reports and sanctions belong to the actual event organiser under its own adopted rules and processes."] }
      ]
    },
    id: {
      title: "Moderasi & Pelaporan",
      summary: "Menjelaskan batas moderasi situs saat ini dan menetapkan perlindungan yang diperlukan sebelum fitur pelaporan interaktif atau komunitas diluncurkan.",
      sections: [
        { heading: "1. Status saat ini", body: ["Situs yang ditinjau bersifat informasional dan tidak menyediakan akun pengguna, komentar publik, pesan langsung, unggahan pengguna, atau kanal pelaporan terpantau yang telah diverifikasi. Halaman ini bukan formulir laporan insiden. Jangan mengirim informasi sensitif melalui issue repository publik atau kanal pihak ketiga yang tidak terkait."] },
        { heading: "2. Desain pelaporan mendatang", body: ["Sebelum fitur interaktif diluncurkan, operator harus mengidentifikasi jalur laporan yang dipantau dan aksesibel, peninjau yang bertanggung jawab, cakupan, aturan penanganan bukti, pemberitahuan privasi, kriteria eskalasi, dan komitmen waktu respons yang realistis. Alamat kontak atau janji waktu respons tidak dikarang di sini."] },
        { heading: "3. Perlindungan prosedural", body: ["Setiap pembatasan di masa depan harus menyebut aturan situs yang berlaku, fakta relevan, alasan, durasi jika relevan, dan jalur peninjauan yang tersedia. Tindakan sementara mendesak harus dibedakan dari temuan final. Pembatasan material atau permanen sebaiknya memperoleh peninjauan manusia independen jika memungkinkan, dengan perlindungan konflik kepentingan dan anti-retaliasi."] },
        { heading: "4. Tidak ada kewenangan atas acara", body: ["Draf ini tidak memberi kewenangan kepada operator situs untuk melarang siapa pun dari acara IWAG, mencabut pass acara, mengarahkan staf venue, atau memutus perkara disipliner penyelenggara. Laporan dan sanksi acara menjadi kewenangan penyelenggara sebenarnya berdasarkan aturan dan proses yang diadopsinya sendiri."] }
      ]
    }
  },
  retention: {
    en: {
      title: "Data Retention",
      summary: "Separates browser-held display preferences from server-side request logs whose actual providers, retention periods, and deletion controls remain unverified.",
      sections: [
        { heading: "1. Browser preferences", body: ["The seven documented display-preference keys are stored in browser local storage on the visitor’s device. They remain until changed by the site or cleared through browser site-data controls. They are not a server-side attendee record."] },
        { heading: "2. Infrastructure records", body: ["Hosting, CDN, DNS, security, and other infrastructure providers may create request and security logs. The actual providers, fields, storage regions, retention periods, backup cycles, and deletion procedures have not been independently verified. Do not publish a fixed server-log retention period until provider settings and contracts are inspected."] },
        { heading: "3. Future collection", body: ["Any future form, account, registration, analytics, or reporting feature must have a purpose-specific retention schedule before launch. Keep records only for as long as necessary for the stated purpose or a documented legal requirement, then delete or anonymise them through a tested process."] },
        { heading: "4. Deletion and legal holds", body: ["Browser preferences can be cleared by the visitor through browser settings. Server-side deletion requests cannot currently be submitted through this preview because no verified privacy-request channel exists. A final operator must document deletion from active systems, backups, processors, and any lawful preservation hold."] }
      ]
    },
    id: {
      title: "Retensi Data",
      summary: "Memisahkan preferensi tampilan di browser dari log permintaan sisi server yang penyedia, masa retensi, dan kontrol penghapusannya belum diverifikasi.",
      sections: [
        { heading: "1. Preferensi browser", body: ["Tujuh kunci preferensi tampilan yang terdokumentasi disimpan pada local storage browser di perangkat pengunjung. Nilainya tetap ada sampai diubah melalui situs atau dihapus melalui kontrol data situs browser. Data tersebut bukan catatan peserta di server."] },
        { heading: "2. Catatan infrastruktur", body: ["Penyedia hosting, CDN, DNS, keamanan, dan infrastruktur lain dapat membuat log permintaan serta keamanan. Penyedia aktual, bidang data, lokasi penyimpanan, masa retensi, siklus cadangan, dan prosedur penghapusan belum diverifikasi secara independen. Jangan menerbitkan masa retensi log server yang pasti sebelum pengaturan penyedia dan kontrak diperiksa."] },
        { heading: "3. Pengumpulan di masa depan", body: ["Setiap formulir, akun, pendaftaran, analitik, atau fitur pelaporan di masa depan harus memiliki jadwal retensi spesifik tujuan sebelum diluncurkan. Simpan catatan hanya selama diperlukan untuk tujuan yang dinyatakan atau kewajiban hukum yang terdokumentasi, lalu hapus atau anonimisasi melalui proses yang diuji."] },
        { heading: "4. Penghapusan dan penahanan hukum", body: ["Preferensi browser dapat dihapus pengunjung melalui pengaturan browser. Permintaan penghapusan sisi server belum dapat diajukan melalui pratinjau ini karena belum ada kanal permintaan privasi yang terverifikasi. Operator final harus mendokumentasikan penghapusan dari sistem aktif, cadangan, prosesor, dan setiap penahanan yang diwajibkan hukum."] }
      ]
    }
  }
};
