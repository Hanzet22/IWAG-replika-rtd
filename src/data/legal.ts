export const legalPolicySlugs = ["coc","ruleset","terms","privacy","cookies","copyright","disclaimer","accessibility","moderation","retention"] as const;

export const legalPolicyLinks = [["coc","Code of Conduct","Kode Etik"],["ruleset","Website Ruleset","Aturan Penggunaan Situs"],["terms","Terms and Conditions","Syarat dan Ketentuan"],["privacy","Privacy Policy","Kebijakan Privasi"],["policy","Other Policies","Kebijakan Lainnya"],["cookies","Cookie & Browser Storage Policy","Kebijakan Cookie & Penyimpanan Browser"],["copyright","Copyright & Intellectual Property","Hak Cipta & Kekayaan Intelektual"],["disclaimer","Information Notice","Pemberitahuan Informasi"],["accessibility","Accessibility Statement","Pernyataan Aksesibilitas"],["moderation","Moderation & Reporting","Moderasi & Pelaporan"],["retention","Data Retention","Retensi Data"]] as const;

type Policy = { title: string; summary: string; sections: { heading: string; body: string[] }[] };

export const legalPolicies: Record<string, { en: Policy; id: Policy }> = {
  "coc": {
    "en": {
      "title": "Code of Conduct",
      "summary": "Standards for attendee conduct, safety, consent, shared spaces, fursuit use, reporting and event access.",
      "sections": [
        {
          "heading": "1. Purpose, scope and acceptance",
          "body": [
            "This Code applies to attendees, guests, staff, volunteers, contractors, exhibitors, panelists, performers, media representatives and other people participating in an IWAG event or an activity organised as part of it. It applies throughout event spaces, official off-site activities, event-related online channels and interactions connected to participation. A role-specific rule supplements this Code; it does not excuse compliance with it.",
            "Entry, participation or acceptance of an event role requires compliance with this Code, the applicable Terms and Conditions, venue requirements, safety directions and any clearly published activity-specific rules. Staff must communicate material rule changes and must not invent new financial or disciplinary penalties without an identified rule and a fair process."
          ]
        },
        {
          "heading": "2. Respect, harassment and discrimination",
          "body": [
            "Treat every person with dignity. Respect names, pronouns, personal boundaries, disability-related needs, cultural differences, privacy and a person's right to decline an interaction. Disagreement, criticism and good-faith discussion are permitted; targeted humiliation, threats, intimidation, stalking, unwanted repeated contact, coercion, discriminatory abuse, slurs used to intimidate, hate symbols used to threaten, unwanted sexual remarks or advances, and deliberate disruption are prohibited.",
            "Do not touch, hug, restrain, follow, photograph at close range, or handle another person's property without permission. Stop an interaction when asked. Do not retaliate against a person who declines contact, raises a concern, assists an investigation or requests an accommodation. Harassment may occur in person, online, through messages, through displayed material or through conduct by a group.",
            "Sexual harassment, sexual violence, exploitation, grooming, threats of violence, stalking, doxxing, non-consensual intimate imagery and conduct that places a person at immediate risk require prompt safety assessment and may require referral to competent authorities where legally appropriate."
          ]
        },
        {
          "heading": "3. Age rating, minors and safeguarding",
          "body": [
            "Before each event, the organiser must publish a clear content rating for the event, individual programme sessions and any restricted areas. Attendees and guardians must be able to identify mature themes, language, performances and access restrictions before choosing to participate. A general event rating must not be used to excuse content that is unlawful or exploitative.",
            "Age eligibility, consent forms, identity checks and supervision requirements must be published consistently in the event's current registration information. A minor must not be asked to provide unnecessary identity or contact information. Staff must verify a guardian's authority only to the extent reasonably necessary, explain why evidence is requested, restrict access to it and delete it when no longer required.",
            "Children must not be isolated with an adult in circumstances that create an avoidable safeguarding risk. Staff and volunteers must use observable, accountable interaction practices, must not solicit private contact details or move a child into secretive communications, and must escalate credible concerns through the designated safeguarding lead. Guardians remain responsible for supervision where the published age policy requires it."
          ]
        },
        {
          "heading": "4. Badges, registration and venue conduct",
          "body": [
            "Attendees must follow the published check-in process and display their issued badge in the manner stated by the organiser while inside controlled event areas. A badge is personal to its registered holder and must not be lent, copied, altered or used to admit another person. Lost or damaged badges must be reported promptly to registration; staff should verify identity before replacement and deactivate a badge where misuse is reasonably suspected.",
            "Follow reasonable instructions from authorised event and venue personnel concerning queues, capacity, evacuation, restricted areas, fire safety, accessibility routes and emergency response. Do not enter staff-only, service, backstage, storage or closed areas without permission. Do not block exits, corridors, lifts, accessible routes, fire equipment or emergency services.",
            "Smoking and vaping are permitted only where the venue and applicable law allow them. Food and beverages may be restricted in designated rooms or activity spaces; any restriction must be communicated with reasonable notice and must account for medical, disability and religious needs where practicable. Respect hotel guests and members of the public who are not attending the event."
          ]
        },
        {
          "heading": "5. Fursuits, costumes, props and personal safety",
          "body": [
            "Fursuiters must use the designated changing and lounge facilities where provided, keep emergency exits clear, take regular cooling and hydration breaks, use a handler when visibility or mobility is materially limited, and stop activity if they feel unwell or unsafe. Do not swim or enter water in a fursuit or costume. Do not use venue pools or fitness facilities in costume unless the venue expressly authorises it.",
            "Respect privacy in headless lounges, changing rooms, rest areas and other spaces designated as camera-free. Do not photograph, livestream or record in those spaces. Ask before photographing a fursuiter or costume wearer at close range; honour a no-photo signal immediately. A person wearing a costume does not surrender their right to privacy or consent.",
            "Props must be safe, manageable, non-functional where they resemble weapons, and compliant with venue security and applicable law. Real weapons, functional weapon components, explosives, pyrotechnics, hazardous substances and items prohibited by law or venue rules are not allowed. Staff may request inspection of a prop for a stated safety reason; refusal may result in the item being excluded from the controlled area. Do not brandish, swing, throw or point a prop at another person.",
            "Costumes and displays must not create a foreseeable trip, fire, obstruction, hygiene or injury risk. Keep costumes clean enough for shared indoor use, avoid exposed sharp edges and leaking materials, and use appropriate footwear. Staff may ask an attendee to modify or remove an unsafe item, with a reasonable explanation and an opportunity to comply unless immediate action is necessary."
          ]
        },
        {
          "heading": "6. Photography, recording and media",
          "body": [
            "Ask permission before making an identifiable close-up photograph, interview or recording of an attendee, and respect requests not to be recorded. Do not record in private, changing, medical, safeguarding or camera-free areas. Do not publish another person's private information, badge details, travel plans or contact information without a lawful basis and appropriate permission.",
            "Wide crowd photographs may capture incidental background appearances in genuinely public event areas, but the organiser must provide clear signage and a practical opt-out or contact route for people who do not wish to be featured. Media, press, researchers and commercial photographers must obtain the organiser's prior written approval for credentialed or organised coverage and must follow agreed boundaries.",
            "Any organiser-controlled use of a person's image, voice or interview must have a defined purpose, appropriate notice and a valid legal basis. Where consent is relied upon, it must be informed, specific, freely given and withdrawable without penalty except where another lawful basis applies. Minors require the legally appropriate guardian involvement and age-sensitive safeguards."
          ]
        },
        {
          "heading": "7. Dealers, panels, performers and commercial conduct",
          "body": [
            "Dealers, vendors, panelists, performers and exhibitors must follow this Code as well as the current role handbook, application terms, venue rules and safety instructions. Booths, displays, performances and programme materials must comply with the published content rating and must not include unlawful, exploitative, discriminatory or harassing material.",
            "Do not sell counterfeit goods, stolen goods, unlawful items or goods that infringe third-party rights. Obtain the necessary rights for artwork, music, performances, photographs, fonts, characters and other material used in a booth or programme. Disclose material use of generative AI when required by the current application rules; do not misrepresent generated or derivative work as wholly human-created or as authorised work.",
            "Transactions between dealers and customers are separate sales between those parties unless the organiser expressly acts as seller or payment intermediary. Dealers must disclose prices, material product conditions, delivery terms and refund arrangements before payment, comply with consumer and tax rules, and provide a way to resolve purchase complaints. The organiser may assist with safety or venue issues but must not promise outcomes for a private sale it does not control."
          ]
        },
        {
          "heading": "8. Food, facilities, hygiene and shared spaces",
          "body": [
            "Follow venue rules for outside food, alcohol, smoking, waste disposal, room access and shared facilities. Do not bring outside food into areas where the venue lawfully prohibits it; reasonable exceptions should be considered for medical, disability, infant-feeding or other essential needs. Do not consume or distribute intoxicating or illegal substances in violation of law or venue rules.",
            "Keep event rooms, hotel rooms, lounges, pools, restrooms and shared facilities clean and usable. Respect quiet hours and noise limits. Do not damage, remove or misuse venue property, decorations, accessibility equipment or another attendee's belongings. Report spills, hazards, damage and lost property to the designated desk promptly.",
            "Do not leave personal belongings unattended in a way that obstructs access or creates a safety risk. The organiser may move an item to a secure location when necessary for safety, but should record the reason and location and provide a practical retrieval route."
          ]
        },
        {
          "heading": "9. Reporting, investigation and outcomes",
          "body": [
            "Report harassment, safety concerns, lost badges, hazards or rule violations to the published event operations or safeguarding contact, a clearly identified staff member, or the venue's emergency/security team where immediate danger exists. Reports should include only information reasonably necessary to understand the incident. The organiser must publish current contact details and identify an alternative contact if the primary channel is unavailable.",
            "Staff should acknowledge reports promptly, assess immediate safety, preserve relevant evidence lawfully, hear from affected people and relevant witnesses where practicable, and restrict disclosure to people who need the information to respond. Do not promise absolute confidentiality. Protect good-faith reporters and witnesses from retaliation and provide support or practical adjustments where possible.",
            "Possible measures include a reminder, instruction to stop, removal of a display or item, activity restriction, temporary badge suspension, removal from a session or venue, badge revocation, exclusion from a future event, or referral to venue security or authorities. Measures must be proportionate to seriousness, risk, intent, repetition and available evidence. Except where urgent safety action is required, give the person a summary of the concern and a reasonable opportunity to respond.",
            "Record the rule relied on, evidence considered, decision-maker, measure, duration and review route. Provide a review by a different authorised person where practicable. A permanent or multi-event exclusion requires a documented risk rationale and a defined review mechanism; it must not be based solely on an unverified allegation, protected characteristic, lawful criticism or a person's decision to report misconduct."
          ]
        },
        {
          "heading": "10. Emergency response and review",
          "body": [
            "In an emergency, follow instructions from venue emergency personnel and public authorities. Do not obstruct first responders or attempt to investigate a suspected crime yourself. Staff may take immediate temporary steps to protect people, preserve access routes and contact emergency services.",
            "This Code should be reviewed before each event and after any serious incident, material legal change or identified safeguarding gap. The current published version and the date of any material change should be made available to attendees before they are expected to comply."
          ]
        }
      ]
    },
    "id": {
      "title": "Kode Etik",
      "summary": "Standar perilaku peserta, keselamatan, persetujuan, penggunaan ruang bersama, fursuit, pelaporan, dan akses acara.",
      "sections": [
        {
          "heading": "1. Tujuan, cakupan dan penerimaan",
          "body": [
            "Kode ini berlaku bagi peserta, tamu, staf, relawan, kontraktor, exhibitor, panelis, performer, perwakilan media, dan pihak lain yang mengikuti acara IWAG atau kegiatan yang diselenggarakan sebagai bagian darinya. Cakupannya meliputi area acara, kegiatan resmi di luar lokasi, kanal daring terkait acara, serta interaksi yang berhubungan dengan partisipasi. Aturan khusus suatu peran melengkapi Kode ini dan tidak membebaskan pihak tersebut dari kewajiban mematuhinya.",
            "Masuk, berpartisipasi, atau menerima suatu peran acara mensyaratkan kepatuhan terhadap Kode ini, Syarat dan Ketentuan yang berlaku, persyaratan venue, arahan keselamatan, dan aturan khusus kegiatan yang telah diumumkan secara jelas. Staf harus menyampaikan perubahan aturan yang material dan tidak boleh menciptakan denda atau sanksi finansial tanpa aturan dan proses yang jelas."
          ]
        },
        {
          "heading": "2. Sikap saling menghormati, pelecehan dan diskriminasi",
          "body": [
            "Perlakukan setiap orang dengan bermartabat. Hormati nama, kata ganti, batas pribadi, kebutuhan terkait disabilitas, perbedaan budaya, privasi, dan hak seseorang untuk menolak interaksi. Perbedaan pendapat, kritik, dan diskusi dengan itikad baik diperbolehkan; penghinaan terarah, ancaman, intimidasi, penguntitan, kontak berulang yang tidak diinginkan, pemaksaan, pelecehan diskriminatif, cercaan untuk mengintimidasi, simbol kebencian untuk mengancam, komentar atau pendekatan seksual yang tidak diinginkan, serta gangguan yang disengaja dilarang.",
            "Jangan menyentuh, memeluk, menahan, mengikuti, memotret dari jarak dekat, atau menangani barang orang lain tanpa izin. Hentikan interaksi ketika diminta. Jangan membalas seseorang yang menolak kontak, menyampaikan kekhawatiran, membantu pemeriksaan, atau meminta akomodasi. Pelecehan dapat terjadi secara langsung, daring, melalui pesan, materi yang dipajang, maupun tindakan kelompok.",
            "Pelecehan seksual, kekerasan seksual, eksploitasi, grooming, ancaman kekerasan, penguntitan, doxxing, penyebaran gambar intim tanpa persetujuan, dan tindakan yang menimbulkan risiko langsung harus segera dinilai dari sisi keselamatan dan dapat memerlukan rujukan kepada otoritas berwenang jika sesuai hukum."
          ]
        },
        {
          "heading": "3. Peringkat usia, anak dan perlindungan",
          "body": [
            "Sebelum setiap acara, penyelenggara harus menerbitkan peringkat konten yang jelas untuk acara, sesi program, dan area terbatas. Peserta dan wali harus dapat mengetahui tema dewasa, bahasa, pertunjukan, serta pembatasan akses sebelum memutuskan ikut. Peringkat umum acara tidak boleh dijadikan alasan untuk membenarkan konten yang melanggar hukum atau mengeksploitasi.",
            "Kelayakan usia, formulir persetujuan, pemeriksaan identitas, dan kewajiban pendampingan harus diumumkan secara konsisten dalam informasi registrasi terkini. Anak tidak boleh diminta memberikan informasi identitas atau kontak yang tidak diperlukan. Staf hanya boleh memverifikasi kewenangan wali sejauh wajar dan diperlukan, menjelaskan alasan permintaan bukti, membatasi akses terhadapnya, dan menghapusnya ketika tidak lagi diperlukan.",
            "Anak tidak boleh ditempatkan sendirian bersama orang dewasa dalam keadaan yang menimbulkan risiko perlindungan yang dapat dihindari. Staf dan relawan harus berinteraksi secara terbuka dan dapat dipertanggungjawabkan, tidak meminta detail kontak privat atau memindahkan anak ke komunikasi rahasia, serta meneruskan kekhawatiran yang kredibel kepada penanggung jawab perlindungan anak. Wali tetap bertanggung jawab atas pengawasan apabila kebijakan usia yang diumumkan mensyaratkannya."
          ]
        },
        {
          "heading": "4. Badge, registrasi dan perilaku di venue",
          "body": [
            "Peserta wajib mengikuti proses check-in yang diumumkan dan menampilkan badge yang diterbitkan sesuai instruksi penyelenggara selama berada di area acara yang dikendalikan. Badge bersifat pribadi untuk pemegang terdaftar dan tidak boleh dipinjamkan, disalin, diubah, atau digunakan untuk memasukkan orang lain. Badge hilang atau rusak harus segera dilaporkan ke registrasi; staf sebaiknya memverifikasi identitas sebelum menerbitkan pengganti dan menonaktifkan badge apabila penyalahgunaan patut dicurigai.",
            "Ikuti instruksi wajar dari petugas acara dan venue yang berwenang mengenai antrean, kapasitas, evakuasi, area terbatas, keselamatan kebakaran, aksesibilitas, dan keadaan darurat. Jangan memasuki area khusus staf, layanan, belakang panggung, penyimpanan, atau area tertutup tanpa izin. Jangan menghalangi pintu keluar, koridor, lift, jalur aksesibel, peralatan kebakaran, atau layanan darurat.",
            "Merokok dan vaping hanya diperbolehkan di tempat yang diizinkan venue dan hukum. Makanan dan minuman dapat dibatasi di ruang atau aktivitas tertentu; pembatasan harus disampaikan dengan pemberitahuan wajar serta mempertimbangkan kebutuhan medis, disabilitas, dan agama jika memungkinkan. Hormati tamu hotel dan masyarakat umum yang bukan peserta acara."
          ]
        },
        {
          "heading": "5. Fursuit, kostum, properti dan keselamatan pribadi",
          "body": [
            "Fursuiter harus menggunakan fasilitas ganti dan lounge yang ditentukan jika tersedia, menjaga jalur evakuasi tetap terbuka, beristirahat untuk mendinginkan tubuh dan minum, menggunakan handler ketika penglihatan atau mobilitas sangat terbatas, serta menghentikan aktivitas jika merasa tidak sehat atau tidak aman. Jangan berenang atau masuk ke air dengan fursuit maupun kostum. Jangan menggunakan kolam atau fasilitas kebugaran venue dengan kostum kecuali venue secara tegas mengizinkannya.",
            "Hormati privasi di headless lounge, ruang ganti, area istirahat, dan ruang lain yang ditetapkan bebas kamera. Jangan memotret, melakukan livestream, atau merekam di area tersebut. Minta izin sebelum memotret fursuiter atau pemakai kostum dari jarak dekat; hormati tanda tidak ingin difoto seketika. Memakai kostum tidak menghilangkan hak seseorang atas privasi dan persetujuan.",
            "Properti harus aman, mudah dikendalikan, tidak fungsional apabila menyerupai senjata, serta mematuhi pemeriksaan keamanan venue dan hukum. Senjata asli, komponen senjata fungsional, bahan peledak, piroteknik, zat berbahaya, dan barang yang dilarang hukum atau aturan venue tidak diperbolehkan. Staf dapat meminta pemeriksaan properti dengan alasan keselamatan yang dijelaskan; penolakan dapat menyebabkan barang tidak boleh dibawa ke area terkendali. Jangan mengacungkan, mengayunkan, melempar, atau mengarahkan properti kepada orang lain.",
            "Kostum dan pajangan tidak boleh menimbulkan risiko tersandung, kebakaran, halangan, kebersihan, atau cedera yang dapat diperkirakan. Jaga kostum cukup bersih untuk penggunaan ruang dalam bersama, hindari tepi tajam terbuka dan bahan yang bocor, serta gunakan alas kaki yang sesuai. Staf dapat meminta peserta mengubah atau melepas barang yang tidak aman dengan penjelasan wajar dan kesempatan untuk mematuhinya, kecuali tindakan segera diperlukan."
          ]
        },
        {
          "heading": "6. Fotografi, perekaman dan media",
          "body": [
            "Minta izin sebelum mengambil foto close-up, wawancara, atau rekaman yang mengidentifikasi peserta, dan hormati permintaan agar seseorang tidak direkam. Jangan merekam di ruang privat, ruang ganti, ruang medis, area perlindungan, atau area bebas kamera. Jangan menerbitkan informasi pribadi, detail badge, rencana perjalanan, atau kontak orang lain tanpa dasar hukum dan izin yang sesuai.",
            "Foto kerumunan yang luas dapat menangkap orang sebagai latar secara insidental di area acara yang benar-benar terbuka, tetapi penyelenggara harus memasang pemberitahuan yang jelas dan menyediakan cara praktis untuk menolak atau meminta agar seseorang tidak ditampilkan. Media, pers, peneliti, dan fotografer komersial harus memperoleh persetujuan tertulis sebelumnya untuk peliputan terakreditasi atau terorganisasi serta mengikuti batasan yang disepakati.",
            "Penggunaan citra, suara, atau wawancara seseorang oleh penyelenggara harus memiliki tujuan yang jelas, pemberitahuan yang sesuai, dan dasar pemrosesan yang sah. Jika persetujuan digunakan, persetujuan harus diinformasikan, spesifik, diberikan secara bebas, dan dapat ditarik tanpa penalti kecuali terdapat dasar hukum lain. Anak memerlukan keterlibatan wali yang sesuai hukum serta perlindungan berdasarkan usia."
          ]
        },
        {
          "heading": "7. Dealer, panel, performer dan kegiatan komersial",
          "body": [
            "Dealer, vendor, panelis, performer, dan exhibitor wajib mematuhi Kode ini serta buku panduan peran, ketentuan aplikasi, aturan venue, dan instruksi keselamatan yang berlaku. Booth, pajangan, pertunjukan, dan materi program harus sesuai peringkat konten yang diumumkan serta tidak boleh memuat materi melanggar hukum, eksploitatif, diskriminatif, atau melecehkan.",
            "Jangan menjual barang palsu, barang curian, barang melanggar hukum, atau barang yang melanggar hak pihak ketiga. Dapatkan hak yang diperlukan atas karya seni, musik, pertunjukan, foto, font, karakter, dan materi lain yang digunakan di booth atau program. Ungkapkan penggunaan material AI generatif apabila diwajibkan aturan aplikasi terkini; jangan menyatakan karya hasil generasi atau turunan sebagai sepenuhnya dibuat manusia atau sebagai karya yang telah mendapat izin.",
            "Transaksi antara dealer dan pembeli merupakan penjualan terpisah antara para pihak kecuali penyelenggara secara tegas bertindak sebagai penjual atau perantara pembayaran. Dealer wajib mengungkapkan harga, kondisi material barang, ketentuan pengiriman, dan pengaturan pengembalian sebelum pembayaran, serta mematuhi aturan konsumen dan pajak. Dealer harus menyediakan cara untuk menyelesaikan keluhan pembelian. Penyelenggara dapat membantu masalah keselamatan atau venue, tetapi tidak boleh menjanjikan hasil atas penjualan privat yang tidak dikendalikannya."
          ]
        },
        {
          "heading": "8. Makanan, fasilitas, kebersihan dan ruang bersama",
          "body": [
            "Ikuti aturan venue mengenai makanan dari luar, alkohol, merokok, pembuangan sampah, akses kamar, dan fasilitas bersama. Jangan membawa makanan dari luar ke area yang secara sah melarangnya; pengecualian wajar perlu dipertimbangkan untuk kebutuhan medis, disabilitas, pemberian makan bayi, atau kebutuhan esensial lainnya. Jangan mengonsumsi atau membagikan zat memabukkan atau ilegal dengan melanggar hukum atau aturan venue.",
            "Jaga ruang acara, kamar hotel, lounge, kolam, toilet, dan fasilitas bersama agar tetap bersih dan dapat digunakan. Hormati jam tenang dan batas kebisingan. Jangan merusak, mengambil, atau menyalahgunakan properti venue, dekorasi, peralatan aksesibilitas, atau barang peserta lain. Segera laporkan tumpahan, bahaya, kerusakan, dan barang hilang kepada meja yang ditunjuk.",
            "Jangan meninggalkan barang pribadi tanpa pengawasan dengan cara yang menghalangi akses atau menimbulkan risiko keselamatan. Penyelenggara dapat memindahkan barang ke tempat aman jika diperlukan demi keselamatan, tetapi sebaiknya mencatat alasan dan lokasinya serta menyediakan cara pengambilan yang praktis."
          ]
        },
        {
          "heading": "9. Pelaporan, pemeriksaan dan tindakan",
          "body": [
            "Laporkan pelecehan, masalah keselamatan, badge hilang, bahaya, atau pelanggaran aturan kepada kontak operasi acara atau perlindungan yang diumumkan, petugas yang dapat diidentifikasi, atau tim keamanan venue/layanan darurat jika terdapat bahaya langsung. Laporan hanya perlu memuat informasi yang wajar untuk memahami insiden. Penyelenggara wajib menerbitkan kontak terkini dan kontak alternatif jika kanal utama tidak tersedia.",
            "Staf sebaiknya segera mengakui penerimaan laporan, menilai keselamatan langsung, menjaga bukti relevan secara sah, mendengar pihak terdampak dan saksi yang relevan jika memungkinkan, serta membatasi pengungkapan kepada pihak yang memerlukan informasi untuk merespons. Jangan menjanjikan kerahasiaan mutlak. Lindungi pelapor dan saksi beritikad baik dari pembalasan serta berikan dukungan atau penyesuaian praktis jika memungkinkan.",
            "Tindakan yang mungkin diterapkan meliputi pengingat, instruksi menghentikan perilaku, penghapusan pajangan atau barang, pembatasan aktivitas, penangguhan badge sementara, pengeluaran dari sesi atau venue, pencabutan badge, pengecualian dari acara mendatang, atau rujukan kepada keamanan venue maupun otoritas. Tindakan harus proporsional dengan tingkat keseriusan, risiko, niat, pengulangan, dan bukti yang tersedia. Kecuali tindakan keselamatan mendesak diperlukan, orang yang diperiksa harus menerima ringkasan masalah dan kesempatan wajar untuk menjawab.",
            "Catat aturan yang digunakan, bukti yang dipertimbangkan, pengambil keputusan, tindakan, durasi, dan jalur peninjauan. Sediakan peninjauan oleh petugas berwenang yang berbeda jika memungkinkan. Pengecualian permanen atau lintas acara memerlukan alasan risiko terdokumentasi dan mekanisme peninjauan yang jelas; keputusan tidak boleh hanya didasarkan pada tuduhan yang belum diverifikasi, karakteristik yang dilindungi, kritik yang sah, atau keputusan seseorang untuk melapor."
          ]
        },
        {
          "heading": "10. Tanggap darurat dan peninjauan",
          "body": [
            "Dalam keadaan darurat, ikuti instruksi petugas darurat venue dan otoritas publik. Jangan menghalangi petugas pertolongan pertama dan jangan mencoba menyelidiki dugaan tindak pidana sendiri. Staf dapat mengambil tindakan sementara yang segera diperlukan untuk melindungi orang, menjaga jalur akses, dan menghubungi layanan darurat.",
            "Kode ini perlu ditinjau sebelum setiap acara dan setelah insiden serius, perubahan hukum material, atau ditemukannya kekurangan perlindungan. Versi yang berlaku dan tanggal setiap perubahan material harus tersedia bagi peserta sebelum mereka diwajibkan mematuhinya."
          ]
        }
      ]
    }
  },
  "terms": {
    "en": {
      "title": "Terms and Conditions",
      "summary": "Rules governing event registration, passes, payment, admission, refunds, minors, role-based participation, creative work and dispute handling.",
      "sections": [
        {
          "heading": "1. Definitions and interpretation",
          "body": [
            "Event means the specific Indonesia Weekend Anthro Gathering edition identified in the current event notice. Organiser means the person or organisation legally responsible for operating that edition; its legal name and contact details must be stated in the edition-specific notice. Attendee means a person accepted to attend. Pass means the event-specific admission entitlement issued to an accepted attendee. Badge means the physical or digital credential issued after check-in. Venue means the premises hosting the event. Dealer, Panelist and Performer mean attendees accepted for those respective programme or commercial roles.",
            "Headings aid navigation and do not limit the meaning of a clause. If a role handbook, event notice or venue rule conflicts with these Terms, the organiser must identify which document controls and resolve ambiguity in favour of clear prior notice and mandatory legal rights. These Terms apply only to the event edition and services expressly identified in the current notice."
          ]
        },
        {
          "heading": "2. Agreement and attendee responsibilities",
          "body": [
            "Before completing registration or payment, a prospective attendee must be shown the event date, venue, pass category, total price and included benefits, payment recipient, applicable cancellation and refund rules, age requirements, privacy notice, Code of Conduct and a contact for questions. Acceptance must be affirmative and recorded with the version of the terms shown. Silence, a pre-ticked box or continued browsing alone is not acceptance of a paid contract.",
            "Attendees must provide accurate information that is reasonably necessary for registration, age eligibility, payment reconciliation, safety and delivery of the selected benefits. They must update material corrections through the published process, protect their confirmation credentials, avoid duplicate or automated registrations, and follow reasonable event and venue instructions. The organiser must not request information unrelated to a stated purpose."
          ]
        },
        {
          "heading": "3. Registration, quota and confirmation",
          "body": [
            "Registration is complete only when the organiser confirms acceptance and, where a fee applies, the payment provider confirms successful payment or the organiser confirms an expressly agreed alternative payment in writing. An order acknowledgement is not proof of a completed payment unless it says so. The confirmation must identify the event edition, pass category, unique order reference, amount paid and next steps.",
            "Pass availability may be limited by published capacity, safety requirements and venue constraints. Any quota, registration window, eligibility rule, waitlist process and selection method must be announced before applications open. If demand exceeds capacity, allocation must follow the published method and must not be manipulated through hidden criteria or undisclosed priority.",
            "An application may be refused for incomplete or materially false information, verified prior serious misconduct relevant to attendee safety, a documented legal restriction, or capacity limits applied consistently. The organiser must provide a concise reason unless disclosure is prohibited or would create a specific safety risk, and must provide a route to correct factual errors or request review."
          ]
        },
        {
          "heading": "4. Fees, payment and payment providers",
          "body": [
            "The total amount payable, currency, taxes, payment processing charges, payment deadline and accepted methods must be displayed before the attendee commits. A fee described as a contribution, donation or pass price must not obscure the actual consumer transaction or remove mandatory consumer rights. The organiser must identify the legal recipient of payment and issue a receipt or confirmation.",
            "Payment card details should be processed by a qualified payment provider and must not be collected in plain text by event staff. The provider's own privacy and payment terms apply to its processing, but the organiser remains responsible for its own disclosures, instructions, reconciliation and lawful handling of data received from the provider. Payment disputes must have a published contact and reasonable response process.",
            "Do not use stolen payment instruments, false identities, automated purchasing, exploitation of technical vulnerabilities, resale schemes that breach published limits, or funds known to be unlawful. Where fraud is reasonably suspected, the organiser may temporarily pause the affected order, preserve necessary evidence and contact the payment provider or competent authority. Permanent cancellation or forfeiture requires an evidence-based decision, notice where lawful, and a review route. A chargeback or payment dispute is not automatically proof of fraud."
          ]
        },
        {
          "heading": "5. Pass information, benefits and changes",
          "body": [
            "The pass description must state the admission period, access areas, included items, services, limitations, collection method and any benefit deadlines. Optional personalisation data such as badge name, shirt size or artwork reference may be requested only when needed to deliver a described benefit. The organiser must publish a deadline and explain whether late changes can be accommodated and any actual cost involved.",
            "Benefits must be delivered substantially as described. If an item, session, guest appearance or service becomes unavailable, the organiser must explain the change and provide a reasonable substitute, price adjustment or refund where required by law or the materiality of the change. A general right to change the programme does not permit removal of the essential purpose of the pass without an appropriate remedy."
          ]
        },
        {
          "heading": "6. Transfer, resale, loss and no-show",
          "body": [
            "A pass may be transferred only through the method and deadline published for that edition. The transfer process must verify the current holder and recipient, prevent duplicate use, explain any fee, and provide a new confirmation. Once a badge is issued, it may be treated as non-transferable for on-site security, provided this restriction was disclosed in advance and does not defeat a statutory right.",
            "Private resale is at the parties' risk unless the organiser operates or expressly authorises the marketplace. Attendees must not rely on screenshots or informal messages as proof that a pass is valid. The organiser should provide a way to verify status without disclosing the holder's unnecessary personal information. A transfer request must not be refused arbitrarily when the published requirements have been met.",
            "A no-show does not automatically entitle an attendee to a refund for a service already reserved or made available, but any non-delivered benefit, statutory cancellation right or organiser cancellation must be handled under the refund clause and applicable consumer law. Unclaimed physical items must be stored for a published reasonable period and then handled under a disclosed process; they must not silently become unrestricted organiser property."
          ]
        },
        {
          "heading": "7. Cancellation, postponement and refunds",
          "body": [
            "The event notice must distinguish attendee-initiated cancellation, organiser cancellation, postponement, material venue or date change, pass downgrade, pass upgrade, no-show and force majeure. It must state deadlines, permitted channels, processing times and the payment method used for refunds. Any non-refundable component must be itemised and must not be described as non-refundable where mandatory law requires otherwise.",
            "If the organiser cancels the event, it must provide a refund of amounts paid for the cancelled admission or a clearly explained alternative chosen by the attendee, subject to mandatory law. If the event is postponed or materially moved, attendees must be given a reasonable choice between accepting the revised arrangement and obtaining the remedy required by law. The organiser must not shift every resulting cost to attendees through a blanket exclusion.",
            "For attendee-initiated cancellation, any retained amount must reflect the disclosed terms, actual services or costs where relevant, and mandatory consumer rules. A refund must not be withheld merely because an attendee exercises a statutory privacy right. If an upgrade is accepted, the additional amount and any unavoidable payment charge must be disclosed before payment; a downgrade must be treated under the published refund schedule."
          ]
        },
        {
          "heading": "8. Admission, identity checks and conduct",
          "body": [
            "Entry requires a valid pass and completion of the published badge collection process. The organiser may request proportionate evidence to confirm the pass holder's identity, age eligibility or guardian authority. The purpose, acceptable documents, staff access, retention and deletion process must be explained. Where a less intrusive verification method is reasonably available, it should be considered.",
            "Attendees must display the badge as directed in controlled areas and must not lend, copy, alter or transfer it after the permitted transfer deadline. Lost badges must be reported immediately. Staff may suspend a credential temporarily where there is a credible security concern, but must verify facts and restore access promptly if the concern is not substantiated.",
            "Entry may be refused or a person removed for a serious or repeated breach of the Code of Conduct, a material venue safety rule, unlawful conduct, credential fraud or an immediate and evidenced safety risk. Except where immediate action is necessary, the person must be told the rule and concern, given a reasonable opportunity to respond, and informed of any review route. Any refund consequence must follow the disclosed refund terms and mandatory law."
          ]
        },
        {
          "heading": "9. Age, guardians and minors",
          "body": [
            "The edition notice must publish a single, internally consistent age table covering minimum age, independent attendance, guardian supervision, guardian pass requirements, consent documentation, identity verification and age-rated programme access. Any inconsistency between the registration page, consent form, FAQ and these Terms must be corrected before registration opens.",
            "For attendees aged 14–16, any parental or guardian consent requirement must identify who may sign, what the form authorises, whether the attendee may attend independently and what emergency contact information is necessary. For younger attendees, the organiser must state the minimum age, continuous supervision requirements and whether a guardian must hold a separate pass. A guardian must not be assumed to be a legal guardian solely because they accompany a child.",
            "Children's identity documents and consent forms must be handled as restricted personal data: access limited to authorised registration or safeguarding staff, no public display, no unnecessary copying, secure storage and deletion when the purpose and lawful retention period end. The organiser must publish child-safeguarding contacts and an incident escalation procedure."
          ]
        },
        {
          "heading": "10. Dealers, panelists, performers and creative submissions",
          "body": [
            "Dealers, panelists and performers must submit separate applications where required. The application must state selection criteria, deadlines, fees, booth or stage allocation, equipment, power limits, load-in/out times, cancellation conditions, accessibility and safety requirements. Acceptance for a role does not waive the attendee's general pass or Code of Conduct obligations unless the notice expressly provides otherwise.",
            "Dealers are responsible for lawful sourcing, accurate descriptions, pricing, consumer disclosures, product safety, tax obligations and rights clearance. Counterfeit, stolen, prohibited or infringing goods may be removed from sale. The organiser may inspect a booth for compliance with published rules and may require correction or removal of a non-compliant item after giving the reason.",
            "Creative submissions remain owned by their creators unless a separate written assignment says otherwise. Submission grants only the limited, non-exclusive permission needed to review, print, display or promote the specified event publication or activity, for the stated period and channels. The organiser must identify any additional licence, credit, editing, archive or commercial use and obtain separate consent where needed.",
            "Creators warrant only that they have the rights they actually control and must disclose third-party assets, co-authors, commissions, AI-assisted material or other dependencies when the submission rules require it. A creator must not be required to warrant rights they do not own. A claim of infringement should be reviewed promptly, with an opportunity for the creator to respond and a process for temporary restriction where continued display creates material risk."
          ]
        },
        {
          "heading": "11. Venue, safety, accessibility and liability",
          "body": [
            "Attendees must comply with lawful venue requirements concerning capacity, fire safety, restricted areas, food, smoking, alcohol, noise, hotel facilities, pools, property and emergency response. The organiser must communicate venue restrictions that materially affect attendance and must coordinate with venue staff on evacuation, first aid, accessible routes and incident response.",
            "Reasonable accessibility adjustments should be requested through the published contact before the event where practicable. The organiser must explain available facilities, known limitations, service-animal arrangements where applicable, and how to request assistance. An adjustment must not be refused solely for administrative convenience where a reasonable alternative is available.",
            "Each attendee is responsible for their own intentional or negligent conduct and for damage they cause, subject to applicable law. Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, wilful misconduct, statutory consumer rights, data-protection duties or any liability that cannot lawfully be excluded. A waiver must identify the specific activity and foreseeable risks in understandable language and must not be used as a blanket release of the organiser's own unlawful conduct."
          ]
        },
        {
          "heading": "12. Complaints, governing law and changes",
          "body": [
            "Complaints about registration, payment, admission, accessibility, a dealer transaction or event conduct must be directed to the contact published for that subject. The organiser must acknowledge complaints, investigate proportionately, explain the outcome and provide escalation details. Urgent safety issues must be handled immediately rather than waiting for the ordinary complaint process.",
            "The organiser must identify its legal contracting party, registered or service address, contact channel, governing law and dispute forum in the edition-specific terms before accepting payment. Indonesian mandatory law applies where it governs the transaction; a choice-of-law clause cannot remove non-waivable consumer or privacy protections. Cross-border attendees retain any mandatory rights that apply to them.",
            "Material changes must be dated, versioned, explained and communicated before they apply. Changes after purchase must not retroactively remove material benefits or statutory rights. If a change materially affects an attendee's bargain, provide the remedy required by law and a reasonable opportunity to decide."
          ]
        }
      ]
    },
    "id": {
      "title": "Syarat dan Ketentuan",
      "summary": "Aturan mengenai registrasi acara, pass, pembayaran, penerimaan, pengembalian dana, anak, partisipasi berdasarkan peran, karya kreatif, dan penanganan sengketa.",
      "sections": [
        {
          "heading": "1. Definisi dan penafsiran",
          "body": [
            "Acara berarti edisi Indonesia Weekend Anthro Gathering tertentu yang disebutkan dalam pengumuman acara terkini. Penyelenggara berarti orang atau organisasi yang secara hukum bertanggung jawab mengoperasikan edisi tersebut; nama hukum dan kontaknya harus dicantumkan dalam pengumuman khusus edisi. Peserta berarti orang yang diterima untuk hadir. Pass berarti hak masuk khusus edisi acara yang diterbitkan kepada peserta yang diterima. Badge berarti kredensial fisik atau digital yang diterbitkan setelah check-in. Venue berarti tempat penyelenggaraan acara. Dealer, Panelis, dan Performer berarti peserta yang diterima untuk peran komersial atau program tersebut.",
            "Judul bagian membantu navigasi dan tidak membatasi makna klausul. Jika buku panduan peran, pengumuman acara, atau aturan venue bertentangan dengan Syarat ini, penyelenggara harus menjelaskan dokumen mana yang berlaku dan menyelesaikan ambiguitas dengan mengutamakan pemberitahuan sebelumnya yang jelas serta hak hukum wajib. Syarat ini hanya berlaku untuk edisi acara dan layanan yang secara tegas disebutkan dalam pengumuman terkini."
          ]
        },
        {
          "heading": "2. Perjanjian dan tanggung jawab peserta",
          "body": [
            "Sebelum menyelesaikan registrasi atau pembayaran, calon peserta harus diperlihatkan tanggal acara, venue, kategori pass, harga total dan manfaat yang termasuk, penerima pembayaran, aturan pembatalan dan pengembalian dana, persyaratan usia, pemberitahuan privasi, Kode Etik, serta kontak pertanyaan. Penerimaan harus dilakukan secara afirmatif dan dicatat bersama versi syarat yang ditampilkan. Diam, kotak yang telah dicentang sebelumnya, atau sekadar melanjutkan penjelajahan bukan penerimaan kontrak berbayar.",
            "Peserta harus memberikan informasi akurat yang secara wajar diperlukan untuk registrasi, kelayakan usia, rekonsiliasi pembayaran, keselamatan, dan penyediaan manfaat yang dipilih. Peserta harus memperbarui koreksi material melalui prosedur yang diumumkan, menjaga kredensial konfirmasi, menghindari registrasi duplikat atau otomatis, serta mengikuti instruksi wajar acara dan venue. Penyelenggara tidak boleh meminta informasi yang tidak berkaitan dengan tujuan yang dinyatakan."
          ]
        },
        {
          "heading": "3. Registrasi, kuota dan konfirmasi",
          "body": [
            "Registrasi selesai hanya setelah penyelenggara mengonfirmasi penerimaan dan, jika dikenakan biaya, penyedia pembayaran mengonfirmasi pembayaran berhasil atau penyelenggara mengonfirmasi metode pembayaran alternatif yang secara tegas disepakati secara tertulis. Tanda terima pesanan bukan bukti pembayaran selesai kecuali dinyatakan demikian. Konfirmasi harus mengidentifikasi edisi acara, kategori pass, referensi pesanan unik, jumlah yang dibayar, dan langkah berikutnya.",
            "Ketersediaan pass dapat dibatasi oleh kapasitas yang diumumkan, kebutuhan keselamatan, dan batas venue. Kuota, periode registrasi, aturan kelayakan, proses daftar tunggu, dan metode seleksi harus diumumkan sebelum pendaftaran dibuka. Jika permintaan melebihi kapasitas, alokasi harus mengikuti metode yang telah dipublikasikan dan tidak boleh dimanipulasi melalui kriteria tersembunyi atau prioritas yang tidak diumumkan.",
            "Permohonan dapat ditolak karena informasi tidak lengkap atau secara material palsu, pelanggaran serius terdahulu yang terverifikasi dan relevan dengan keselamatan peserta, pembatasan hukum terdokumentasi, atau batas kapasitas yang diterapkan konsisten. Penyelenggara harus memberikan alasan ringkas kecuali pengungkapan dilarang atau menimbulkan risiko keselamatan tertentu, serta menyediakan jalur untuk memperbaiki kesalahan faktual atau meminta peninjauan."
          ]
        },
        {
          "heading": "4. Biaya, pembayaran dan penyedia pembayaran",
          "body": [
            "Jumlah total yang harus dibayar, mata uang, pajak, biaya pemrosesan pembayaran, tenggat pembayaran, dan metode yang diterima harus ditampilkan sebelum peserta berkomitmen. Biaya yang disebut kontribusi, donasi, atau harga pass tidak boleh menyamarkan transaksi konsumen yang sebenarnya atau menghapus hak konsumen wajib. Penyelenggara harus mengidentifikasi penerima pembayaran secara hukum dan menerbitkan tanda terima atau konfirmasi.",
            "Detail kartu pembayaran sebaiknya diproses oleh penyedia pembayaran yang memenuhi syarat dan tidak boleh dikumpulkan staf acara dalam teks biasa. Ketentuan privasi dan pembayaran penyedia berlaku untuk pemrosesannya, tetapi penyelenggara tetap bertanggung jawab atas pengungkapan, instruksi, rekonsiliasi, dan penanganan data yang diterimanya secara sah. Sengketa pembayaran harus memiliki kontak dan proses respons yang wajar.",
            "Jangan menggunakan instrumen pembayaran curian, identitas palsu, pembelian otomatis, eksploitasi kerentanan teknis, skema penjualan kembali yang melanggar batas yang diumumkan, atau dana yang diketahui berasal dari kegiatan melawan hukum. Jika penipuan patut dicurigai, penyelenggara dapat menunda sementara pesanan terkait, menjaga bukti yang diperlukan secara sah, dan menghubungi penyedia pembayaran atau otoritas berwenang. Pembatalan permanen atau penyitaan pembayaran memerlukan keputusan berbasis bukti, pemberitahuan jika sah, dan jalur peninjauan. Chargeback atau sengketa pembayaran tidak otomatis membuktikan penipuan."
          ]
        },
        {
          "heading": "5. Informasi pass, manfaat dan perubahan",
          "body": [
            "Deskripsi pass harus menyebutkan periode masuk, area akses, barang yang termasuk, layanan, batasan, metode pengambilan, dan tenggat manfaat. Data personalisasi opsional seperti nama badge, ukuran kaus, atau referensi karya hanya boleh diminta jika diperlukan untuk memberikan manfaat yang dijelaskan. Penyelenggara harus mengumumkan tenggat dan menjelaskan apakah perubahan terlambat dapat dilayani serta biaya aktual yang mungkin timbul.",
            "Manfaat harus diberikan secara substansial sesuai deskripsi. Jika barang, sesi, penampilan tamu, atau layanan tidak lagi tersedia, penyelenggara harus menjelaskan perubahan dan menyediakan pengganti yang wajar, penyesuaian harga, atau pengembalian dana apabila diwajibkan hukum atau perubahan tersebut material. Hak umum untuk mengubah program tidak membolehkan penghapusan tujuan utama pass tanpa pemulihan yang sesuai."
          ]
        },
        {
          "heading": "6. Transfer, penjualan kembali, kehilangan dan ketidakhadiran",
          "body": [
            "Pass hanya dapat ditransfer melalui metode dan tenggat yang diumumkan untuk edisi tersebut. Proses transfer harus memverifikasi pemegang saat ini dan penerima, mencegah penggunaan ganda, menjelaskan biaya, dan menyediakan konfirmasi baru. Setelah badge diterbitkan, badge dapat ditetapkan tidak dapat dipindahtangankan untuk keamanan di lokasi, sepanjang pembatasan tersebut telah diberitahukan sebelumnya dan tidak meniadakan hak berdasarkan undang-undang.",
            "Penjualan kembali secara privat menjadi risiko para pihak kecuali penyelenggara mengoperasikan atau secara tegas mengizinkan marketplace. Peserta tidak boleh mengandalkan tangkapan layar atau pesan informal sebagai bukti keabsahan pass. Penyelenggara sebaiknya menyediakan cara untuk memverifikasi status tanpa mengungkapkan data pribadi pemegang yang tidak diperlukan. Permintaan transfer tidak boleh ditolak secara sewenang-wenang jika persyaratan yang diumumkan telah dipenuhi.",
            "Ketidakhadiran tidak otomatis memberikan hak pengembalian dana atas layanan yang telah dicadangkan atau disediakan, tetapi manfaat yang tidak diberikan, hak pembatalan berdasarkan undang-undang, atau pembatalan oleh penyelenggara harus ditangani sesuai klausul refund dan hukum konsumen. Barang fisik yang tidak diambil harus disimpan selama periode wajar yang diumumkan, lalu ditangani melalui prosedur yang diungkapkan; barang tersebut tidak boleh diam-diam menjadi milik penyelenggara tanpa batas."
          ]
        },
        {
          "heading": "7. Pembatalan, penjadwalan ulang dan pengembalian dana",
          "body": [
            "Pengumuman acara harus membedakan pembatalan oleh peserta, pembatalan oleh penyelenggara, penjadwalan ulang, perubahan tanggal atau venue yang material, penurunan tier pass, peningkatan tier pass, ketidakhadiran, dan keadaan kahar. Pengumuman harus menyebutkan tenggat, kanal yang diizinkan, waktu pemrosesan, dan metode pembayaran refund. Komponen yang tidak dapat dikembalikan harus dirinci dan tidak boleh disebut non-refundable apabila hukum wajib mengharuskan sebaliknya.",
            "Jika penyelenggara membatalkan acara, penyelenggara harus mengembalikan jumlah yang dibayar untuk akses yang dibatalkan atau menawarkan alternatif yang dijelaskan secara jelas dan dipilih peserta, dengan tunduk pada hukum wajib. Jika acara dijadwalkan ulang atau dipindahkan secara material, peserta harus diberi pilihan wajar antara menerima pengaturan baru dan memperoleh pemulihan yang diwajibkan hukum. Penyelenggara tidak boleh mengalihkan seluruh biaya yang timbul kepada peserta melalui pengecualian menyeluruh.",
            "Untuk pembatalan oleh peserta, jumlah yang ditahan harus sesuai syarat yang diungkapkan, layanan atau biaya aktual jika relevan, dan aturan konsumen wajib. Refund tidak boleh ditahan hanya karena peserta menggunakan hak privasi berdasarkan undang-undang. Jika peningkatan pass diterima, jumlah tambahan dan biaya pembayaran yang tidak dapat dihindari harus diungkapkan sebelum pembayaran; penurunan pass ditangani sesuai jadwal refund yang dipublikasikan."
          ]
        },
        {
          "heading": "8. Penerimaan, pemeriksaan identitas dan perilaku",
          "body": [
            "Masuk memerlukan pass yang valid dan penyelesaian proses pengambilan badge yang diumumkan. Penyelenggara dapat meminta bukti yang proporsional untuk memastikan identitas pemegang pass, kelayakan usia, atau kewenangan wali. Tujuan, dokumen yang diterima, akses staf, retensi, dan proses penghapusan harus dijelaskan. Jika metode verifikasi yang kurang intrusif tersedia secara wajar, metode tersebut sebaiknya dipertimbangkan.",
            "Peserta harus menampilkan badge sesuai instruksi di area terkendali dan tidak boleh meminjamkan, menyalin, mengubah, atau mentransfernya setelah tenggat transfer yang diizinkan. Badge hilang harus segera dilaporkan. Staf dapat menangguhkan kredensial sementara apabila ada kekhawatiran keamanan yang kredibel, tetapi harus memverifikasi fakta dan segera memulihkan akses jika kekhawatiran tidak terbukti.",
            "Masuk dapat ditolak atau seseorang dikeluarkan karena pelanggaran serius atau berulang terhadap Kode Etik, aturan keselamatan venue yang material, tindakan melawan hukum, penipuan kredensial, atau risiko keselamatan langsung yang didukung bukti. Kecuali tindakan segera diperlukan, orang tersebut harus diberi tahu aturan dan masalah yang dipermasalahkan, diberi kesempatan wajar untuk menjawab, dan diberi informasi jalur peninjauan. Konsekuensi refund harus mengikuti ketentuan yang diungkapkan dan hukum wajib."
          ]
        },
        {
          "heading": "9. Usia, wali dan anak",
          "body": [
            "Pengumuman edisi harus menerbitkan satu tabel usia yang konsisten mengenai usia minimum, kehadiran mandiri, pengawasan wali, kewajiban pass wali, dokumen persetujuan, verifikasi identitas, dan akses program berdasarkan usia. Setiap inkonsistensi antara halaman registrasi, formulir persetujuan, FAQ, dan Syarat ini harus diperbaiki sebelum registrasi dibuka.",
            "Untuk peserta usia 14–16 tahun, persyaratan persetujuan orang tua atau wali harus menjelaskan siapa yang dapat menandatangani, apa yang diizinkan oleh formulir, apakah peserta boleh hadir mandiri, dan informasi kontak darurat apa yang diperlukan. Untuk peserta lebih muda, penyelenggara harus menyatakan usia minimum, kewajiban pendampingan terus-menerus, serta apakah wali harus memiliki pass terpisah. Seseorang tidak boleh dianggap sebagai wali sah hanya karena mendampingi anak.",
            "Dokumen identitas dan formulir persetujuan anak harus diperlakukan sebagai data pribadi dengan akses terbatas: hanya petugas registrasi atau perlindungan yang berwenang, tidak ditampilkan kepada publik, tidak disalin tanpa kebutuhan, disimpan dengan aman, dan dihapus ketika tujuan serta masa simpan yang sah berakhir. Penyelenggara harus menerbitkan kontak perlindungan anak dan prosedur eskalasi insiden."
          ]
        },
        {
          "heading": "10. Dealer, panelis, performer dan karya kreatif",
          "body": [
            "Dealer, panelis, dan performer harus mengajukan aplikasi terpisah jika diwajibkan. Aplikasi harus menyatakan kriteria seleksi, tenggat, biaya, alokasi booth atau panggung, peralatan, batas daya listrik, waktu bongkar-muat, syarat pembatalan, aksesibilitas, dan persyaratan keselamatan. Penerimaan suatu peran tidak menghapus kewajiban pass umum atau Kode Etik kecuali pengumuman menyatakan lain secara tegas.",
            "Dealer bertanggung jawab atas sumber barang yang sah, deskripsi akurat, harga, pengungkapan konsumen, keamanan produk, kewajiban pajak, dan izin hak. Barang palsu, curian, terlarang, atau melanggar hak dapat dikeluarkan dari penjualan. Penyelenggara dapat memeriksa booth untuk kepatuhan terhadap aturan yang diumumkan dan meminta koreksi atau penghapusan barang yang tidak sesuai setelah menjelaskan alasannya.",
            "Karya kreatif tetap dimiliki penciptanya kecuali terdapat pengalihan tertulis terpisah. Pengiriman karya hanya memberikan izin terbatas dan non-eksklusif yang diperlukan untuk meninjau, mencetak, memamerkan, atau mempromosikan publikasi atau kegiatan acara yang disebutkan, untuk periode dan kanal yang dinyatakan. Penyelenggara harus mengidentifikasi lisensi tambahan, kredit, penyuntingan, pengarsipan, atau penggunaan komersial dan memperoleh persetujuan terpisah jika diperlukan.",
            "Pencipta hanya menjamin hak yang benar-benar mereka kuasai dan harus mengungkapkan aset pihak ketiga, rekan pencipta, komisi, materi berbantuan AI, atau ketergantungan lain apabila aturan pengiriman mensyaratkannya. Pencipta tidak boleh diwajibkan menjamin hak yang bukan miliknya. Klaim pelanggaran harus ditinjau segera, dengan kesempatan bagi pencipta untuk menjawab dan prosedur pembatasan sementara jika penayangan berlanjut menimbulkan risiko material."
          ]
        },
        {
          "heading": "11. Venue, keselamatan, aksesibilitas dan tanggung jawab",
          "body": [
            "Peserta harus mematuhi persyaratan venue yang sah mengenai kapasitas, keselamatan kebakaran, area terbatas, makanan, merokok, alkohol, kebisingan, fasilitas hotel, kolam, properti, dan tanggap darurat. Penyelenggara harus menyampaikan pembatasan venue yang secara material memengaruhi kehadiran serta berkoordinasi dengan petugas venue mengenai evakuasi, pertolongan pertama, jalur aksesibel, dan respons insiden.",
            "Penyesuaian aksesibilitas yang wajar sebaiknya diminta melalui kontak yang diumumkan sebelum acara jika memungkinkan. Penyelenggara harus menjelaskan fasilitas yang tersedia, keterbatasan yang diketahui, pengaturan hewan bantuan jika berlaku, dan cara meminta bantuan. Penyesuaian tidak boleh ditolak hanya demi kemudahan administrasi apabila alternatif wajar tersedia.",
            "Setiap peserta bertanggung jawab atas tindakan yang disengaja atau lalai dan kerusakan yang ditimbulkannya, dengan tunduk pada hukum. Tidak ada bagian Syarat ini yang mengecualikan tanggung jawab atas kematian atau cedera pribadi akibat kelalaian, penipuan, kesengajaan melawan hukum, hak konsumen berdasarkan undang-undang, kewajiban perlindungan data, atau tanggung jawab yang tidak dapat dikecualikan secara sah. Pelepasan tanggung jawab harus menyebutkan aktivitas khusus dan risiko yang dapat diperkirakan dalam bahasa yang mudah dipahami dan tidak boleh digunakan sebagai pembebasan menyeluruh atas tindakan melawan hukum penyelenggara sendiri."
          ]
        },
        {
          "heading": "12. Keluhan, hukum yang berlaku dan perubahan",
          "body": [
            "Keluhan mengenai registrasi, pembayaran, penerimaan, aksesibilitas, transaksi dealer, atau perilaku acara harus diarahkan ke kontak yang diterbitkan untuk pokok tersebut. Penyelenggara harus mengakui penerimaan keluhan, menyelidikinya secara proporsional, menjelaskan hasil, dan memberikan detail eskalasi. Masalah keselamatan mendesak harus ditangani segera, bukan menunggu proses keluhan biasa.",
            "Penyelenggara harus mengidentifikasi pihak kontrak secara hukum, alamat terdaftar atau alamat layanan, kanal kontak, hukum yang berlaku, dan forum sengketa dalam syarat khusus edisi sebelum menerima pembayaran. Hukum wajib Indonesia berlaku apabila mengatur transaksi; klausul pilihan hukum tidak dapat menghapus perlindungan konsumen atau privasi yang tidak dapat dikesampingkan. Peserta lintas negara tetap memiliki hak wajib yang berlaku bagi mereka.",
            "Perubahan material harus diberi tanggal, nomor versi, penjelasan, dan pemberitahuan sebelum berlaku. Perubahan setelah pembelian tidak boleh secara retroaktif menghapus manfaat material atau hak berdasarkan undang-undang. Jika perubahan secara material memengaruhi kesepakatan peserta, berikan pemulihan yang diwajibkan hukum dan kesempatan wajar untuk menentukan pilihan."
          ]
        }
      ]
    }
  },
  "privacy": {
    "en": {
      "title": "Privacy Policy",
      "summary": "How attendee and event-related personal data is collected, used, shared, protected, retained and subject to individual rights.",
      "sections": [
        {
          "heading": "1. Controller, scope and contact",
          "body": [
            "The event privacy notice must identify the legal person or persons that determine why and how attendee data is processed, their contact address, the privacy contact or data-protection officer where required, and the event edition covered. Where registration, payment, venue security, photography or ticketing is handled by separate providers, the notice must distinguish each provider's role and responsibilities.",
            "This policy covers personal data processed for event enquiries, registration, pass administration, identity and age checks, payment reconciliation, access control, safeguarding, incident handling, programme participation, media and event operations. It does not imply that every listed category is collected for every event; the organiser must publish the actual data inventory for the edition."
          ]
        },
        {
          "heading": "2. Data collected and sources",
          "body": [
            "Depending on the chosen service, data may include legal name, preferred badge name, date of birth or age range, email address, limited contact details, pass category, order reference, payment status and transaction token, accessibility or dietary requests, guardian consent, dealer or programme applications, emergency contact, incident report details, and media preferences. Identity-document images or copies should not be collected when visual inspection or a less intrusive verification method is sufficient.",
            "Payment providers may return transaction identifiers, payment method type, amount, status, timestamps, refund status and limited payer details. The organiser should not receive or store full card numbers, security codes or payment credentials. Venue security or access systems may independently process CCTV or access logs under the venue's own notice.",
            "Information may be provided directly by the attendee or guardian, generated through registration and check-in, received from a payment provider, or supplied by a venue or authorised event partner where lawful and necessary. The notice must explain material indirect sources and how individuals can correct inaccurate information."
          ]
        },
        {
          "heading": "3. Purposes, legal bases and minimisation",
          "body": [
            "Personal data may be used to answer enquiries, administer registration and passes, verify eligibility, reconcile payments, deliver purchased benefits, manage capacity, provide accessibility arrangements, protect children and attendees, respond to incidents, prevent demonstrable fraud, meet accounting and legal duties, and communicate material event changes. Each purpose must have an identified lawful basis under the applicable data-protection law.",
            "Consent must not be used as a blanket basis for processing necessary to perform a contract or comply with law. Where consent is used, it must be specific, informed, freely given, recorded and as easy to withdraw as to give. Optional marketing, public testimonials, non-essential photography and unrelated research must be separated from essential registration.",
            "Collect only fields that are adequate, relevant and limited to the stated purpose. Do not request sensitive details merely because a form can accept them. Accessibility, dietary, health or safeguarding information should be treated as restricted, visible only to personnel who need it to provide the requested support or respond to a risk."
          ]
        },
        {
          "heading": "4. Sharing, processors and international transfers",
          "body": [
            "Data may be shared with the registration platform, payment provider, venue, access-control supplier, email provider, event production contractors, medical or safety responders, insurers, professional advisers and public authorities where necessary and lawful. The organiser must identify meaningful recipient categories, explain each purpose and ensure vendors receive only the fields needed for their task.",
            "Written processor or service-provider terms should address instructions, confidentiality, security, subprocessors, breach notification, assistance with rights requests, deletion or return of data, audit information and restrictions on independent use. A vendor must not repurpose attendee data for its own marketing or profiling unless it has a separate lawful basis and provides its own notice.",
            "Before transferring personal data outside Indonesia or another applicable jurisdiction, the controller must identify the destination, recipient, transfer mechanism and safeguards required by the relevant law. International hosting or access by overseas staff must be assessed as a transfer where the law so provides; a generic statement that data may be processed globally is insufficient."
          ]
        },
        {
          "heading": "5. Children and sensitive information",
          "body": [
            "Where children may register or attend, the organiser must assess age, parental or guardian authorisation requirements, child-facing notices and the risk of collecting data directly from minors. Guardian information must be limited to what is necessary to verify authority, provide emergency contact and administer the child's participation.",
            "Do not publish a child's full name, identity document, precise location, contact details, travel itinerary or sensitive information. Restrict access to consent forms and safeguarding records. Health, disability, dietary, biometric or other sensitive data must be processed only where a lawful condition applies, with enhanced access control and a defined deletion period."
          ]
        },
        {
          "heading": "6. Photography, recordings and publicity",
          "body": [
            "Event photography and recording must be described before attendance, including the areas where cameras may operate, the purposes of use, publication channels, retention, whether commercial partners receive material, and how to request a practical no-photography arrangement. General venue signage does not replace a specific notice where law requires one.",
            "Close-up portraits, interviews, testimonials, identifiable feature stories and promotional uses should be based on a clear lawful basis and, where appropriate, separate consent. Consent for publicity must not be a condition of entry unless the image use is genuinely essential to the service and lawful. Provide a reasonable way to object or withdraw consent for future use; explain that already printed or distributed material may not be fully retrievable.",
            "Media, press, research and commercial production teams must receive written scope instructions and must not access private rooms, changing areas, medical spaces, headless lounges or other restricted zones. They must follow the organiser's credential conditions and applicable privacy, copyright and child-protection requirements."
          ]
        },
        {
          "heading": "7. Individual rights and requests",
          "body": [
            "Individuals may have rights to be informed, access, correct, complete, update, obtain a copy, withdraw consent, request deletion or destruction, restrict or object to certain processing, and seek remedies under applicable law. The exact rights and exceptions depend on the person's jurisdiction and the controller's role.",
            "Requests should be sent to the published privacy contact. The controller must verify identity proportionately, avoid collecting additional identity documents without need, respond within statutory deadlines, explain any lawful refusal or limitation, and provide information about complaints to the competent supervisory authority. A request must not be ignored merely because the event has ended.",
            "Where data must be retained for a legal claim, accounting duty or safety investigation, the controller should restrict its use to that purpose and explain the applicable limitation. Deletion from active systems should not be represented as immediate removal from every backup if a documented backup cycle applies."
          ]
        },
        {
          "heading": "8. Security, incidents and retention",
          "body": [
            "The controller must implement security proportionate to the sensitivity and volume of data, including access controls, unique staff accounts, least privilege, encryption in transit, secure storage, logging, staff confidentiality, vendor review, secure transfer and disposal, and a process for removing access when a role ends. Identity documents and child records require stronger restrictions than ordinary event preferences.",
            "A suspected loss, unauthorised access, alteration, disclosure or destruction must be assessed promptly. The controller must contain the incident, preserve necessary evidence, determine affected data and people, assess harm, notify authorities and affected individuals within the time and manner required by applicable law, and document corrective actions. Do not promise that incidents will never occur.",
            "Set a retention schedule for each data category, tied to its purpose, legal requirement and deletion trigger. Registration and payment records may need retention for statutory accounting or dispute periods; identity copies, guardian forms, raw incident evidence and media files should have separate and shorter schedules where possible. Do not keep all attendee data indefinitely because it may be useful later."
          ]
        },
        {
          "heading": "9. Complaints, changes and accountability",
          "body": [
            "The privacy notice must state how to complain, the controller's response channel and the competent supervisory authority or regulator. The controller should maintain records of processing, vendor arrangements, access to sensitive records, rights requests, incidents and retention actions where required.",
            "Material changes to purposes, recipients, data categories, retention or international transfers must be communicated before the new processing begins where required. A new purpose incompatible with the original purpose requires a separate lawful basis and notice. Continued attendance or browsing must not be treated as blanket consent to unrelated new uses."
          ]
        }
      ]
    },
    "id": {
      "title": "Kebijakan Privasi",
      "summary": "Cara data pribadi peserta dan data terkait acara dikumpulkan, digunakan, dibagikan, dilindungi, disimpan, dan tunduk pada hak individu.",
      "sections": [
        {
          "heading": "1. Pengendali, cakupan dan kontak",
          "body": [
            "Pemberitahuan privasi acara harus mengidentifikasi orang atau badan hukum yang menentukan tujuan dan cara pemrosesan data peserta, alamat kontak, kontak privasi atau petugas pelindungan data jika diwajibkan, serta edisi acara yang dicakup. Jika registrasi, pembayaran, keamanan venue, fotografi, atau tiket ditangani penyedia berbeda, pemberitahuan harus membedakan peran dan tanggung jawab setiap penyedia.",
            "Kebijakan ini mencakup data pribadi yang diproses untuk pertanyaan acara, registrasi, administrasi pass, pemeriksaan identitas dan usia, rekonsiliasi pembayaran, kontrol akses, perlindungan peserta, penanganan insiden, partisipasi program, media, dan operasional acara. Kebijakan ini tidak berarti semua kategori dikumpulkan pada setiap acara; penyelenggara harus menerbitkan inventaris data aktual untuk edisi tersebut."
          ]
        },
        {
          "heading": "2. Data yang dikumpulkan dan sumbernya",
          "body": [
            "Bergantung pada layanan yang dipilih, data dapat mencakup nama resmi, nama badge pilihan, tanggal lahir atau rentang usia, alamat email, detail kontak terbatas, kategori pass, referensi pesanan, status pembayaran dan token transaksi, permintaan aksesibilitas atau makanan, persetujuan wali, aplikasi dealer atau program, kontak darurat, detail laporan insiden, dan preferensi media. Gambar atau salinan dokumen identitas tidak boleh dikumpulkan jika pemeriksaan visual atau metode verifikasi yang kurang intrusif sudah memadai.",
            "Penyedia pembayaran dapat mengembalikan ID transaksi, jenis metode pembayaran, jumlah, status, waktu transaksi, status refund, dan detail terbatas pembayar. Penyelenggara sebaiknya tidak menerima atau menyimpan nomor kartu lengkap, kode keamanan, atau kredensial pembayaran. Sistem keamanan venue atau kontrol akses dapat memproses CCTV atau log akses secara independen berdasarkan pemberitahuan milik venue.",
            "Informasi dapat diberikan langsung oleh peserta atau wali, dihasilkan melalui registrasi dan check-in, diterima dari penyedia pembayaran, atau diberikan venue maupun mitra acara yang berwenang jika sah dan diperlukan. Pemberitahuan harus menjelaskan sumber tidak langsung yang material dan cara individu memperbaiki data yang tidak akurat."
          ]
        },
        {
          "heading": "3. Tujuan, dasar pemrosesan dan minimisasi",
          "body": [
            "Data pribadi dapat digunakan untuk menjawab pertanyaan, mengelola registrasi dan pass, memverifikasi kelayakan, merekonsiliasi pembayaran, memberikan manfaat yang dibeli, mengelola kapasitas, menyediakan penyesuaian aksesibilitas, melindungi anak dan peserta, merespons insiden, mencegah penipuan yang dapat dibuktikan, memenuhi kewajiban akuntansi dan hukum, serta mengomunikasikan perubahan acara yang material. Setiap tujuan harus memiliki dasar pemrosesan yang teridentifikasi berdasarkan hukum pelindungan data yang berlaku.",
            "Persetujuan tidak boleh dijadikan dasar menyeluruh untuk pemrosesan yang diperlukan guna melaksanakan kontrak atau memenuhi hukum. Jika persetujuan digunakan, persetujuan harus spesifik, diinformasikan, diberikan secara bebas, dicatat, dan semudah ditarik sebagaimana diberikan. Pemasaran opsional, testimoni publik, fotografi non-esensial, dan penelitian yang tidak berkaitan harus dipisahkan dari registrasi esensial.",
            "Kumpulkan hanya data yang memadai, relevan, dan terbatas pada tujuan yang dinyatakan. Jangan meminta detail sensitif hanya karena formulir dapat menerimanya. Informasi aksesibilitas, makanan, kesehatan, atau perlindungan harus diperlakukan terbatas dan hanya dapat dilihat petugas yang memerlukannya untuk menyediakan dukungan atau merespons risiko."
          ]
        },
        {
          "heading": "4. Pembagian, pemroses dan transfer internasional",
          "body": [
            "Data dapat dibagikan kepada platform registrasi, penyedia pembayaran, venue, pemasok kontrol akses, penyedia email, kontraktor produksi acara, petugas medis atau keselamatan, perusahaan asuransi, penasihat profesional, dan otoritas publik jika diperlukan dan sah. Penyelenggara harus mengidentifikasi kategori penerima yang bermakna, menjelaskan tujuan setiap penerima, dan memastikan vendor hanya menerima bidang data yang dibutuhkan untuk tugasnya.",
            "Ketentuan tertulis dengan pemroses atau penyedia layanan sebaiknya mengatur instruksi, kerahasiaan, keamanan, subpemroses, pemberitahuan insiden, bantuan untuk permintaan hak, penghapusan atau pengembalian data, informasi audit, dan larangan penggunaan independen. Vendor tidak boleh menggunakan ulang data peserta untuk pemasaran atau pemrofilan sendiri kecuali memiliki dasar hukum terpisah dan memberikan pemberitahuannya sendiri.",
            "Sebelum mentransfer data pribadi ke luar Indonesia atau yurisdiksi lain yang berlaku, pengendali harus mengidentifikasi negara tujuan, penerima, mekanisme transfer, dan perlindungan yang diwajibkan hukum terkait. Hosting internasional atau akses oleh staf luar negeri harus dinilai sebagai transfer jika hukum menyatakannya demikian; pernyataan umum bahwa data dapat diproses secara global tidak memadai."
          ]
        },
        {
          "heading": "5. Anak dan informasi sensitif",
          "body": [
            "Jika anak dapat mendaftar atau hadir, penyelenggara harus menilai usia, kebutuhan otorisasi orang tua atau wali, pemberitahuan yang ditujukan kepada anak, dan risiko pengumpulan data langsung dari anak. Informasi wali harus dibatasi pada kebutuhan verifikasi kewenangan, kontak darurat, dan administrasi partisipasi anak.",
            "Jangan menerbitkan nama lengkap anak, dokumen identitas, lokasi presisi, detail kontak, rencana perjalanan, atau informasi sensitif. Batasi akses terhadap formulir persetujuan dan catatan perlindungan. Data kesehatan, disabilitas, makanan, biometrik, atau data sensitif lain hanya boleh diproses jika ada kondisi hukum yang sah, dengan kontrol akses lebih ketat dan periode penghapusan yang ditentukan."
          ]
        },
        {
          "heading": "6. Fotografi, rekaman dan publikasi",
          "body": [
            "Fotografi dan perekaman acara harus dijelaskan sebelum kehadiran, termasuk area yang mungkin direkam kamera, tujuan, kanal publikasi, masa simpan, apakah mitra komersial menerima materi, dan cara meminta pengaturan praktis agar tidak difoto. Papan pemberitahuan umum di venue tidak menggantikan pemberitahuan khusus apabila hukum mewajibkannya.",
            "Potret close-up, wawancara, testimoni, cerita fitur yang mengidentifikasi seseorang, dan penggunaan promosi sebaiknya didasarkan pada dasar hukum yang jelas dan, jika sesuai, persetujuan terpisah. Persetujuan publikasi tidak boleh menjadi syarat masuk kecuali penggunaan citra benar-benar esensial terhadap layanan dan sah. Sediakan cara wajar untuk menolak atau menarik persetujuan bagi penggunaan mendatang; jelaskan bahwa materi yang sudah dicetak atau didistribusikan mungkin tidak dapat ditarik seluruhnya.",
            "Tim media, pers, penelitian, dan produksi komersial harus menerima instruksi ruang lingkup secara tertulis dan tidak boleh memasuki kamar privat, ruang ganti, area medis, headless lounge, atau zona terbatas lainnya. Mereka wajib mematuhi ketentuan kredensial penyelenggara serta persyaratan privasi, hak cipta, dan perlindungan anak yang berlaku."
          ]
        },
        {
          "heading": "7. Hak individu dan permintaan",
          "body": [
            "Individu dapat memiliki hak untuk memperoleh informasi, akses, koreksi, pelengkapan, pembaruan, salinan, penarikan persetujuan, penghapusan atau pemusnahan, pembatasan atau keberatan terhadap pemrosesan tertentu, dan pemulihan berdasarkan hukum yang berlaku. Hak yang tepat dan pengecualiannya bergantung pada yurisdiksi serta peran pengendali.",
            "Permintaan harus dikirim ke kontak privasi yang diumumkan. Pengendali harus memverifikasi identitas secara proporsional, menghindari pengumpulan dokumen identitas tambahan tanpa kebutuhan, merespons dalam tenggat undang-undang, menjelaskan penolakan atau pembatasan yang sah, dan memberikan informasi pengaduan kepada otoritas pengawas yang berwenang. Permintaan tidak boleh diabaikan hanya karena acara telah selesai.",
            "Jika data harus disimpan untuk klaim hukum, kewajiban akuntansi, atau penyelidikan keselamatan, pengendali sebaiknya membatasi penggunaannya hanya untuk tujuan tersebut dan menjelaskan pembatasan yang berlaku. Penghapusan dari sistem aktif tidak boleh dinyatakan sebagai penghapusan seketika dari seluruh backup jika terdapat siklus backup yang terdokumentasi."
          ]
        },
        {
          "heading": "8. Keamanan, insiden dan retensi",
          "body": [
            "Pengendali harus menerapkan keamanan yang sebanding dengan sensitivitas dan volume data, termasuk kontrol akses, akun staf unik, hak akses minimum, enkripsi saat transmisi, penyimpanan aman, pencatatan akses, kerahasiaan staf, peninjauan vendor, transfer dan pemusnahan aman, serta pencabutan akses saat peran berakhir. Dokumen identitas dan catatan anak memerlukan pembatasan lebih kuat daripada preferensi acara biasa.",
            "Kehilangan, akses, perubahan, pengungkapan, atau pemusnahan tanpa izin yang dicurigai harus dinilai segera. Pengendali harus membatasi insiden, menjaga bukti yang diperlukan, menentukan data dan orang yang terdampak, menilai bahaya, memberi tahu otoritas dan individu terdampak dalam tenggat serta cara yang diwajibkan hukum, dan mendokumentasikan tindakan korektif. Jangan menjanjikan bahwa insiden tidak akan pernah terjadi.",
            "Tetapkan jadwal retensi untuk setiap kategori data berdasarkan tujuan, kewajiban hukum, dan pemicu penghapusan. Catatan registrasi dan pembayaran mungkin perlu disimpan untuk kewajiban akuntansi atau periode sengketa; salinan identitas, formulir wali, bukti insiden mentah, dan file media harus memiliki jadwal terpisah dan lebih singkat jika memungkinkan. Jangan menyimpan seluruh data peserta tanpa batas hanya karena mungkin berguna kelak."
          ]
        },
        {
          "heading": "9. Pengaduan, perubahan dan akuntabilitas",
          "body": [
            "Pemberitahuan privasi harus menyatakan cara mengajukan keluhan, kanal respons pengendali, dan otoritas pengawas atau regulator yang berwenang. Pengendali sebaiknya memelihara catatan pemrosesan, pengaturan vendor, akses ke catatan sensitif, permintaan hak, insiden, dan tindakan retensi jika diwajibkan.",
            "Perubahan material pada tujuan, penerima, kategori data, retensi, atau transfer internasional harus dikomunikasikan sebelum pemrosesan baru dimulai apabila diwajibkan. Tujuan baru yang tidak sesuai dengan tujuan awal memerlukan dasar hukum dan pemberitahuan tersendiri. Kehadiran atau penjelajahan berkelanjutan tidak boleh dianggap sebagai persetujuan menyeluruh atas penggunaan baru yang tidak berkaitan."
          ]
        }
      ]
    }
  },
  "policy": {
    "en": {
      "title": "Other Policies",
      "summary": "Supplementary rules on anti-harassment, harmful conduct, eligibility review and safety-related event decisions.",
      "sections": [
        {
          "heading": "Anti-harassment policy",
          "body": [
            "Harassment includes discriminatory remarks or conduct based on gender, sexual orientation, disability, appearance, race, ethnicity, nationality, age, religion or other protected or personal characteristics; intimidation, stalking, following, unwanted repeated contact, unwanted physical contact, sexual remarks or advances, threats, doxxing, non-consensual photography or recording, display of hateful symbols to threaten or intimidate, targeted humiliation, and deliberate disruption of sessions or event operations.",
            "The rule applies to attendees, staff, volunteers, dealers, booth workers, panelists, performers, contractors and visitors in event spaces and event-related activities. Exhibitors must keep displays and activities within the published content rating and must not create a hostile or sexually harassing environment. Staff and volunteers must not use their role, access or authority to pressure attendees or retaliate against complaints.",
            "A person asked to stop conduct that is reasonably perceived as harassment must stop immediately. A report may be made to the published operations or safeguarding contact, a designated staff member or venue security. Reports should be handled discreetly, assessed for immediate risk, documented only as necessary and reviewed impartially. The affected person should not be required to confront the reported person or prove the matter alone.",
            "Responses may include a warning, separation, removal of material, restriction from an activity, temporary suspension, removal from the venue or exclusion from future events. The response must reflect seriousness, evidence, repetition, risk and context. Except for urgent safety measures, the person concerned should receive notice of the allegation and a chance to respond. Retaliation, knowingly false reports made to harm another person, and interference with a fair review are prohibited; a report made in good faith is not misconduct merely because it cannot be substantiated."
          ]
        },
        {
          "heading": "Harmful behaviour and eligibility review",
          "body": [
            "Eligibility decisions may consider verified serious conduct that creates a relevant and current safety risk, including sexual violence or exploitation, child abuse or exploitation, serious animal cruelty, credible threats, stalking, serious violence, trafficking, serious fraud, or repeated harassment. A prior exclusion by another convention may be considered only where the underlying conduct, reliability of the information, relevance and opportunity to respond can be assessed; the existence of a ban alone is not conclusive proof.",
            "An investigation, allegation, arrest, charge, conviction, civil dispute, online controversy, membership of a lawful organisation, lawful political or religious expression, or criticism of an organiser must not automatically result in exclusion. The decision-maker must distinguish allegation from finding, consider the reliability and recency of evidence, relevance to event safety, rehabilitation or corrective steps, proportionality, and any legal restrictions on disclosure or participation.",
            "Information about a person's alleged conduct must be collected and shared only when necessary for a legitimate safety or legal purpose. Do not circulate informal blacklists, publish personal dossiers, or retain unverified allegations indefinitely. Where information comes from another organisation, assess its provenance and request enough supporting detail to avoid mistaken identity or context collapse.",
            "Before denying registration or imposing a multi-event exclusion, provide a summary of the relevant concern and a reasonable opportunity to correct errors or respond, unless urgent risk or law makes prior notice unsafe or impermissible. Record the reasons, evidence categories, decision-maker, duration and review date. Provide an appeal or reconsideration route handled by a person not materially involved in the original decision where practicable.",
            "Any report to law enforcement or another authority must be based on a genuine legal duty, credible immediate risk or other lawful justification. Staff must not threaten police action merely to silence criticism or discourage complaints. A witness should be invited, not coerced, to provide a statement; authorities determine whether a formal report or testimony is required."
          ]
        },
        {
          "heading": "Vendor, programme and venue supplements",
          "body": [
            "Dealers must comply with product safety, consumer information, intellectual-property, tax and venue rules. Booth staff are individually covered by the anti-harassment provisions. Organisers may require removal of a product or display that is unlawful, unsafe, infringing or outside the published rating, after recording the reason and giving an opportunity to correct where safe.",
            "Panelists and performers must disclose material content, technical requirements, audience restrictions and any participation by minors in advance. Sessions must not be used to target or harass individuals, solicit private information from children, promote unlawful conduct or evade the published content rating. Staff may pause or end a session where a credible safety or serious policy concern arises.",
            "Venue-specific restrictions on smoking, vaping, outside food, alcohol, pools, room parties, noise, shared facilities, photography and access routes must be published or signposted by the responsible operator. If the venue changes a restriction, staff should communicate the update promptly and apply it consistently."
          ]
        }
      ]
    },
    "id": {
      "title": "Kebijakan Lainnya",
      "summary": "Aturan tambahan mengenai antipelecehan, perilaku berbahaya, peninjauan kelayakan, dan keputusan acara terkait keselamatan.",
      "sections": [
        {
          "heading": "Kebijakan antipelecehan",
          "body": [
            "Pelecehan mencakup komentar atau tindakan diskriminatif berdasarkan gender, orientasi seksual, disabilitas, penampilan, ras, etnis, kebangsaan, usia, agama, atau karakteristik pribadi lain yang dilindungi; intimidasi, penguntitan, mengikuti seseorang, kontak berulang yang tidak diinginkan, sentuhan fisik yang tidak diinginkan, komentar atau pendekatan seksual, ancaman, doxxing, fotografi atau perekaman tanpa persetujuan, tampilan simbol kebencian untuk mengancam atau mengintimidasi, penghinaan terarah, dan gangguan sengaja terhadap sesi atau operasional acara.",
            "Aturan berlaku bagi peserta, staf, relawan, dealer, pekerja booth, panelis, performer, kontraktor, dan pengunjung di area acara serta kegiatan terkait acara. Exhibitor harus menjaga pajangan dan aktivitas sesuai peringkat konten yang diumumkan dan tidak boleh menciptakan lingkungan bermusuhan atau melecehkan secara seksual. Staf dan relawan tidak boleh menggunakan jabatan, akses, atau kewenangannya untuk menekan peserta atau membalas pengaduan.",
            "Orang yang diminta menghentikan perilaku yang secara wajar dianggap pelecehan harus segera berhenti. Laporan dapat disampaikan kepada kontak operasi atau perlindungan yang diumumkan, petugas yang ditunjuk, atau keamanan venue. Laporan harus ditangani secara bijaksana, dinilai untuk risiko langsung, didokumentasikan seperlunya, dan ditinjau secara imparsial. Pihak terdampak tidak boleh diwajibkan menghadapi terlapor atau membuktikan perkara seorang diri.",
            "Respons dapat mencakup peringatan, pemisahan pihak, penghapusan materi, pembatasan aktivitas, penangguhan sementara, pengeluaran dari venue, atau pengecualian dari acara mendatang. Respons harus mempertimbangkan tingkat keseriusan, bukti, pengulangan, risiko, dan konteks. Kecuali tindakan keselamatan mendesak, pihak terkait harus menerima pemberitahuan tuduhan dan kesempatan menjawab. Pembalasan, laporan yang sengaja diketahui palsu untuk merugikan orang lain, dan campur tangan terhadap peninjauan yang adil dilarang; laporan beritikad baik bukan pelanggaran hanya karena tidak dapat dibuktikan."
          ]
        },
        {
          "heading": "Perilaku berbahaya dan peninjauan kelayakan",
          "body": [
            "Keputusan kelayakan dapat mempertimbangkan perilaku serius yang terverifikasi dan menimbulkan risiko keselamatan yang relevan serta masih berlaku, termasuk kekerasan atau eksploitasi seksual, pelecehan atau eksploitasi anak, kekejaman serius terhadap hewan, ancaman kredibel, penguntitan, kekerasan serius, perdagangan orang, penipuan serius, atau pelecehan berulang. Pengecualian terdahulu oleh konvensi lain hanya dapat dipertimbangkan jika tindakan yang mendasarinya, keandalan informasi, relevansi, dan kesempatan menjawab dapat dinilai; keberadaan larangan saja bukan bukti konklusif.",
            "Penyelidikan, tuduhan, penangkapan, dakwaan, vonis, sengketa perdata, kontroversi daring, keanggotaan organisasi yang sah, ekspresi politik atau agama yang sah, atau kritik terhadap penyelenggara tidak boleh otomatis mengakibatkan pengecualian. Pengambil keputusan harus membedakan tuduhan dari temuan, mempertimbangkan keandalan dan kebaruan bukti, relevansi terhadap keselamatan acara, rehabilitasi atau langkah perbaikan, proporsionalitas, serta pembatasan hukum atas pengungkapan atau partisipasi.",
            "Informasi tentang dugaan perilaku seseorang hanya boleh dikumpulkan dan dibagikan jika diperlukan untuk tujuan keselamatan atau hukum yang sah. Jangan menyebarkan daftar hitam informal, menerbitkan dossier pribadi, atau menyimpan tuduhan yang belum diverifikasi tanpa batas. Jika informasi berasal dari organisasi lain, nilai asal-usulnya dan minta detail pendukung secukupnya untuk menghindari salah identitas atau hilangnya konteks.",
            "Sebelum menolak registrasi atau menerapkan pengecualian lintas acara, berikan ringkasan kekhawatiran yang relevan dan kesempatan wajar untuk memperbaiki kesalahan atau menjawab, kecuali risiko mendesak atau hukum membuat pemberitahuan awal tidak aman atau tidak diperbolehkan. Catat alasan, kategori bukti, pengambil keputusan, durasi, dan tanggal peninjauan. Sediakan jalur banding atau pertimbangan ulang yang ditangani orang yang tidak terlibat secara material dalam keputusan awal jika memungkinkan.",
            "Setiap laporan kepada penegak hukum atau otoritas lain harus didasarkan pada kewajiban hukum yang nyata, risiko langsung yang kredibel, atau pembenaran sah lainnya. Staf tidak boleh mengancam tindakan polisi hanya untuk membungkam kritik atau menghalangi pengaduan. Saksi sebaiknya diminta, bukan dipaksa, memberikan pernyataan; otoritas menentukan apakah laporan resmi atau kesaksian diperlukan."
          ]
        },
        {
          "heading": "Ketentuan tambahan dealer, program dan venue",
          "body": [
            "Dealer harus mematuhi aturan keamanan produk, informasi konsumen, kekayaan intelektual, pajak, dan venue. Pekerja booth secara individual tercakup dalam ketentuan antipelecehan. Penyelenggara dapat meminta penghapusan produk atau pajangan yang melanggar hukum, tidak aman, melanggar hak, atau di luar peringkat yang diumumkan, setelah mencatat alasan dan memberikan kesempatan perbaikan jika aman.",
            "Panelis dan performer harus mengungkapkan konten material, kebutuhan teknis, pembatasan audiens, dan partisipasi anak di muka. Sesi tidak boleh digunakan untuk menargetkan atau melecehkan individu, meminta informasi privat dari anak, mempromosikan tindakan melawan hukum, atau menghindari peringkat konten yang diumumkan. Staf dapat menjeda atau mengakhiri sesi jika muncul kekhawatiran keselamatan atau kebijakan serius yang kredibel.",
            "Pembatasan khusus venue mengenai merokok, vaping, makanan dari luar, alkohol, kolam, pesta kamar, kebisingan, fasilitas bersama, fotografi, dan jalur akses harus diterbitkan atau dipasang oleh operator yang bertanggung jawab. Jika venue mengubah pembatasan, staf harus segera menyampaikan pembaruan dan menerapkannya secara konsisten."
          ]
        }
      ]
    }
  },
  "cookies": {
    "en": {
      "title": "Cookie and Browser Storage Policy",
      "summary": "Explains browser storage used for preferences and how optional tracking technologies should be controlled.",
      "sections": [
        {
          "heading": "1. Technologies and purposes",
          "body": [
            "Cookies, local storage, session storage, pixels and similar technologies may be used to keep a site functional, remember language and theme preferences, protect sessions, measure reliability or support optional analytics. Each technology must have a defined purpose, provider, data category, expiry and access scope.",
            "Strictly necessary storage may be used where needed to provide a feature requested by the visitor or maintain security. Analytics, advertising, cross-site tracking and other non-essential technologies must remain disabled until the visitor has received the information and provided any consent required by applicable law."
          ]
        },
        {
          "heading": "2. Current preference storage",
          "body": [
            "Where the site stores a selected theme, language, contrast or accessibility preference locally in the browser, that value should remain on the visitor's device and should not be treated as an attendee registration record. The interface should explain how to reset preferences and should not store identity documents, payment credentials or sensitive attendee data in browser storage.",
            "Third-party embeds, maps, video players, fonts or analytics may set their own technologies when loaded. Where practical, use privacy-preserving settings, delayed loading or click-to-load controls and disclose the provider before activation."
          ]
        },
        {
          "heading": "3. Consent, controls and retention",
          "body": [
            "Visitors must be able to accept, reject or configure non-essential technologies with comparable ease. Withdrawal must be as easy as giving consent. Do not use deceptive button styling, forced consent, preselected optional categories or repeated prompts designed to pressure a choice.",
            "Publish a technology inventory showing provider, purpose, type, expiry, data recipients and transfer location. Reassess it when scripts or vendors change. Expired or unnecessary identifiers must be deleted or allowed to expire; do not extend retention solely to preserve analytics history."
          ]
        }
      ]
    },
    "id": {
      "title": "Kebijakan Cookie dan Penyimpanan Browser",
      "summary": "Menjelaskan penyimpanan browser untuk preferensi dan pengendalian teknologi pelacakan opsional.",
      "sections": [
        {
          "heading": "1. Teknologi dan tujuan",
          "body": [
            "Cookie, local storage, session storage, pixel, dan teknologi sejenis dapat digunakan untuk menjaga fungsi situs, mengingat bahasa dan tema, melindungi sesi, mengukur keandalan, atau mendukung analitik opsional. Setiap teknologi harus memiliki tujuan, penyedia, kategori data, masa berlaku, dan cakupan akses yang ditentukan.",
            "Penyimpanan yang benar-benar diperlukan dapat digunakan jika dibutuhkan untuk menyediakan fitur yang diminta pengunjung atau menjaga keamanan. Analitik, iklan, pelacakan lintas situs, dan teknologi non-esensial lainnya harus tetap dinonaktifkan sampai pengunjung menerima informasi dan memberikan persetujuan yang diwajibkan hukum."
          ]
        },
        {
          "heading": "2. Penyimpanan preferensi saat ini",
          "body": [
            "Jika situs menyimpan tema, bahasa, kontras, atau preferensi aksesibilitas secara lokal di browser, nilai tersebut sebaiknya tetap berada pada perangkat pengunjung dan tidak diperlakukan sebagai catatan registrasi peserta. Antarmuka harus menjelaskan cara mengatur ulang preferensi dan tidak boleh menyimpan dokumen identitas, kredensial pembayaran, atau data peserta sensitif dalam penyimpanan browser.",
            "Embed pihak ketiga, peta, pemutar video, font, atau analitik dapat memasang teknologi miliknya saat dimuat. Jika memungkinkan, gunakan pengaturan yang menjaga privasi, pemuatan tertunda, atau kontrol klik-untuk-muat serta ungkapkan penyedia sebelum aktivasi."
          ]
        },
        {
          "heading": "3. Persetujuan, kontrol dan retensi",
          "body": [
            "Pengunjung harus dapat menerima, menolak, atau mengatur teknologi non-esensial dengan kemudahan yang sebanding. Penarikan harus semudah pemberian persetujuan. Jangan menggunakan desain tombol yang menipu, persetujuan paksa, kategori opsional yang telah dipilih sebelumnya, atau prompt berulang untuk menekan pilihan.",
            "Terbitkan inventaris teknologi yang menunjukkan penyedia, tujuan, jenis, masa berlaku, penerima data, dan lokasi transfer. Tinjau ulang ketika skrip atau vendor berubah. Identifier yang kedaluwarsa atau tidak diperlukan harus dihapus atau dibiarkan kedaluwarsa; jangan memperpanjang retensi hanya untuk mempertahankan riwayat analitik."
          ]
        }
      ]
    }
  },
  "copyright": {
    "en": {
      "title": "Copyright and Intellectual Property",
      "summary": "Defines permitted use of project-authored materials and the rights of artists, photographers, brands and other third parties.",
      "sections": [
        {
          "heading": "1. Ownership and attribution",
          "body": [
            "Copyright, trademarks, designs, photographs, illustrations, music, writing, fonts, software and other protected materials remain with their respective owners unless a valid written transfer states otherwise. Displaying material on a website, event page, booth or social channel does not place it in the public domain.",
            "Credit must identify the creator or rights holder in the manner requested by the applicable licence or permission. Attribution is not a substitute for permission where permission is required."
          ]
        },
        {
          "heading": "2. Project-authored material",
          "body": [
            "Material created specifically for this project is governed by the licence or rights notice displayed with that material. If no licence is stated, no permission for commercial reuse, redistribution, modification or republication is granted beyond ordinary viewing and linking. Source code, documentation, original copy and visual assets may have different licences and must be checked separately.",
            "Contributors should agree in writing on ownership, permitted uses, attribution, modification, publication channels, duration, payment and withdrawal before work begins. A contribution does not automatically transfer copyright to the project."
          ]
        },
        {
          "heading": "3. Third-party event marks and creative works",
          "body": [
            "Names, logos, mascots, character designs, photographs, event graphics, guest artwork and other IWAG or third-party materials may be used only on a lawful basis, such as permission, licence, a valid statutory exception or a narrowly applicable nominative reference. Do not imply endorsement, sponsorship, partnership or authorisation that has not been granted.",
            "Do not remove watermarks, author credits, licence notices or technical rights information. Do not use a work outside its permitted territory, term, medium or purpose. A request to remove or correct material should identify the work and the right or concern relied upon; the project should review it promptly and temporarily restrict access where continued publication creates a credible legal risk."
          ]
        },
        {
          "heading": "4. Dealer and submitted works",
          "body": [
            "Dealers and creators are responsible for clearing rights in material they sell, display or submit, including character likenesses, fan art, commissioned work, music, photographs, fonts and AI-assisted content. They should disclose co-authors and third-party assets and must not claim exclusive ownership of material they do not own.",
            "An event submission licence should be limited to the specific purpose, channels and period stated in the application. Any additional commercial exploitation, merchandising, sublicensing, adaptation or use in paid advertising requires a separate clearly described permission unless the creator has expressly agreed otherwise."
          ]
        }
      ]
    },
    "id": {
      "title": "Hak Cipta dan Kekayaan Intelektual",
      "summary": "Menjelaskan penggunaan materi buatan proyek dan hak seniman, fotografer, merek, serta pihak ketiga.",
      "sections": [
        {
          "heading": "1. Kepemilikan dan atribusi",
          "body": [
            "Hak cipta, merek, desain, foto, ilustrasi, musik, tulisan, font, perangkat lunak, dan materi terlindungi lainnya tetap dimiliki pemilik masing-masing kecuali terdapat pengalihan tertulis yang sah. Penayangan materi di situs, halaman acara, booth, atau media sosial tidak menjadikannya domain publik.",
            "Kredit harus mengidentifikasi pencipta atau pemegang hak sesuai cara yang diminta lisensi atau izin terkait. Atribusi bukan pengganti izin apabila izin memang diwajibkan."
          ]
        },
        {
          "heading": "2. Materi yang dibuat proyek",
          "body": [
            "Materi yang dibuat khusus untuk proyek ini tunduk pada lisensi atau pemberitahuan hak yang ditampilkan bersama materi tersebut. Jika tidak ada lisensi yang dinyatakan, tidak diberikan izin penggunaan ulang komersial, redistribusi, modifikasi, atau publikasi ulang selain melihat dan menautkan secara wajar. Source code, dokumentasi, naskah asli, dan aset visual dapat memiliki lisensi berbeda dan harus diperiksa terpisah.",
            "Kontributor sebaiknya menyepakati secara tertulis kepemilikan, penggunaan yang diizinkan, atribusi, modifikasi, kanal publikasi, durasi, pembayaran, dan penarikan sebelum pekerjaan dimulai. Kontribusi tidak otomatis mengalihkan hak cipta kepada proyek."
          ]
        },
        {
          "heading": "3. Merek acara dan karya pihak ketiga",
          "body": [
            "Nama, logo, maskot, desain karakter, foto, ilustrasi acara, karya tamu, dan materi IWAG atau pihak ketiga lainnya hanya boleh digunakan berdasarkan dasar yang sah, seperti izin, lisensi, pengecualian undang-undang yang valid, atau referensi nominatif yang cakupannya sempit. Jangan menyiratkan dukungan, sponsor, kemitraan, atau otorisasi yang tidak diberikan.",
            "Jangan menghapus watermark, kredit pencipta, pemberitahuan lisensi, atau informasi hak teknis. Jangan menggunakan karya di luar wilayah, jangka waktu, media, atau tujuan yang diizinkan. Permintaan penghapusan atau koreksi materi harus mengidentifikasi karya serta hak atau kekhawatiran yang menjadi dasar; proyek harus meninjaunya segera dan membatasi akses sementara jika publikasi berlanjut menimbulkan risiko hukum yang kredibel."
          ]
        },
        {
          "heading": "4. Karya dealer dan kiriman kreatif",
          "body": [
            "Dealer dan pencipta bertanggung jawab memperoleh izin atas materi yang dijual, dipajang, atau dikirim, termasuk kemiripan karakter, fan art, karya pesanan, musik, foto, font, dan konten berbantuan AI. Mereka sebaiknya mengungkapkan rekan pencipta dan aset pihak ketiga serta tidak mengklaim kepemilikan eksklusif atas materi yang bukan miliknya.",
            "Lisensi pengiriman karya untuk acara harus dibatasi pada tujuan, kanal, dan periode khusus yang disebutkan dalam aplikasi. Eksploitasi komersial tambahan, merchandise, sublisensi, adaptasi, atau penggunaan dalam iklan berbayar memerlukan izin terpisah yang dijelaskan secara jelas kecuali pencipta secara tegas menyetujuinya."
          ]
        }
      ]
    }
  },
  "disclaimer": {
    "en": {
      "title": "Information Notice",
      "summary": "Explains how to interpret event information, historical material, third-party links and changing operational details.",
      "sections": [
        {
          "heading": "1. Information status and dates",
          "body": [
            "Event dates, venue details, programme, prices, transport guidance, facilities, registration windows and availability are time-sensitive. Each item should carry its source and the date it was checked where that affects a decision. Historical announcements must be labelled with the edition and publication date and must not be presented as current instructions.",
            "If a material fact cannot be verified, identify it as unknown or pending confirmation rather than filling the gap with an estimate. Where sources conflict, state the conflict and direct readers to the responsible official source for the current operational decision."
          ]
        },
        {
          "heading": "2. Third-party information and links",
          "body": [
            "External links are provided to help readers reach the relevant organiser, venue, transport provider, seller or public authority. The operator of the linked service controls its own content, terms, privacy practices and availability. A link alone does not establish that the linked party has approved the surrounding page or that a transaction is safe.",
            "Readers should verify ticket, hotel, travel, immigration, health and safety details with the competent provider before acting, especially when money, deadlines, travel or personal data are involved."
          ]
        },
        {
          "heading": "3. No substitute for professional or emergency services",
          "body": [
            "General event information is not individual legal, medical, financial, immigration or travel advice. For an emergency, contact the relevant local emergency service or venue emergency personnel; do not rely on a website contact form or ordinary email for urgent assistance."
          ]
        },
        {
          "heading": "4. Mandatory rights and corrections",
          "body": [
            "Nothing in this notice removes consumer, privacy, accessibility or other rights that cannot lawfully be waived. Report a factual error with the affected page, source and correction evidence through the published contact route. Corrections should be dated where the original statement may have influenced a decision."
          ]
        }
      ]
    },
    "id": {
      "title": "Pemberitahuan Informasi",
      "summary": "Menjelaskan cara memahami informasi acara, materi historis, tautan pihak ketiga, dan detail operasional yang dapat berubah.",
      "sections": [
        {
          "heading": "1. Status informasi dan tanggal",
          "body": [
            "Tanggal acara, detail venue, program, harga, panduan transportasi, fasilitas, periode registrasi, dan ketersediaan merupakan informasi yang sensitif terhadap waktu. Setiap informasi sebaiknya mencantumkan sumber dan tanggal pemeriksaan jika memengaruhi keputusan. Pengumuman historis harus diberi label edisi dan tanggal publikasi serta tidak boleh disajikan sebagai instruksi terkini.",
            "Jika fakta material tidak dapat diverifikasi, nyatakan sebagai belum diketahui atau menunggu konfirmasi, bukan mengisi kekosongan dengan perkiraan. Jika sumber bertentangan, jelaskan pertentangannya dan arahkan pembaca ke sumber resmi yang bertanggung jawab atas keputusan operasional terkini."
          ]
        },
        {
          "heading": "2. Informasi dan tautan pihak ketiga",
          "body": [
            "Tautan eksternal disediakan agar pembaca dapat menjangkau penyelenggara, venue, penyedia transportasi, penjual, atau otoritas publik terkait. Operator layanan tertaut mengendalikan konten, ketentuan, praktik privasi, dan ketersediaannya sendiri. Tautan saja tidak membuktikan pihak tertaut menyetujui halaman di sekitarnya atau bahwa transaksi aman.",
            "Pembaca sebaiknya memverifikasi detail tiket, hotel, perjalanan, imigrasi, kesehatan, dan keselamatan kepada penyedia berwenang sebelum bertindak, terutama jika melibatkan uang, tenggat, perjalanan, atau data pribadi."
          ]
        },
        {
          "heading": "3. Bukan pengganti layanan profesional atau darurat",
          "body": [
            "Informasi acara umum bukan nasihat hukum, medis, keuangan, imigrasi, atau perjalanan individual. Untuk keadaan darurat, hubungi layanan darurat setempat atau petugas darurat venue yang relevan; jangan mengandalkan formulir kontak situs atau email biasa untuk bantuan mendesak."
          ]
        },
        {
          "heading": "4. Hak wajib dan koreksi",
          "body": [
            "Tidak ada bagian pemberitahuan ini yang menghapus hak konsumen, privasi, aksesibilitas, atau hak lain yang tidak dapat dikesampingkan secara sah. Laporkan kesalahan fakta dengan menyertakan halaman terkait, sumber, dan bukti koreksi melalui kontak yang diterbitkan. Koreksi sebaiknya diberi tanggal apabila pernyataan awal mungkin telah memengaruhi keputusan."
          ]
        }
      ]
    }
  },
  "accessibility": {
    "en": {
      "title": "Accessibility Statement",
      "summary": "Sets practical accessibility commitments for event information, registration, venue access and attendee support.",
      "sections": [
        {
          "heading": "1. Accessible information and communication",
          "body": [
            "Core event information should be available in readable HTML, with meaningful headings, descriptive links, keyboard access, visible focus, sufficient contrast, text alternatives for informative images, captions or transcripts for essential media, and forms with clear labels and error messages. Do not communicate essential rules only through images, colour, audio or social-media posts.",
            "Publish key information in accessible formats and provide a contact for requesting an alternative format or communication adjustment. Language versions should carry equivalent eligibility, safety, cost and deadline information."
          ]
        },
        {
          "heading": "2. Venue and participation access",
          "body": [
            "Before registration, publish known step-free routes, lift availability, accessible toilets, seating, quiet or low-stimulation space, service-animal arrangements, accessible transport information and any material limitations. Do not promise a facility that the venue has not confirmed.",
            "Provide a clear route for requesting reasonable adjustments, including mobility, sensory, communication, dietary and other disability-related needs. Ask only for information necessary to assess and provide the adjustment; do not require a diagnosis where a functional description is sufficient. Explain any unavoidable limitation and discuss alternatives."
          ]
        },
        {
          "heading": "3. Assistance and review",
          "body": [
            "Identify an attendee-support contact and the times it is staffed during the event. Staff should know how to route an accessibility request without disclosing it to unrelated personnel. Emergency plans should account for attendees who may need assistance evacuating or receiving instructions.",
            "Review feedback after each edition, record recurring barriers, prioritise changes by impact and feasibility, and publish material improvements or known limitations. A statement of intent is not a certification of legal or technical conformance."
          ]
        }
      ]
    },
    "id": {
      "title": "Pernyataan Aksesibilitas",
      "summary": "Menetapkan komitmen aksesibilitas praktis untuk informasi acara, registrasi, akses venue, dan dukungan peserta.",
      "sections": [
        {
          "heading": "1. Informasi dan komunikasi yang aksesibel",
          "body": [
            "Informasi utama acara sebaiknya tersedia dalam HTML yang mudah dibaca, dengan heading bermakna, tautan deskriptif, akses keyboard, fokus yang terlihat, kontras memadai, teks alternatif untuk gambar informatif, caption atau transkrip untuk media esensial, serta formulir dengan label dan pesan kesalahan yang jelas. Jangan menyampaikan aturan esensial hanya melalui gambar, warna, audio, atau unggahan media sosial.",
            "Terbitkan informasi penting dalam format aksesibel dan sediakan kontak untuk meminta format alternatif atau penyesuaian komunikasi. Versi bahasa harus memiliki informasi kelayakan, keselamatan, biaya, dan tenggat yang setara."
          ]
        },
        {
          "heading": "2. Akses venue dan partisipasi",
          "body": [
            "Sebelum registrasi, terbitkan informasi yang diketahui tentang jalur tanpa tangga, ketersediaan lift, toilet aksesibel, tempat duduk, ruang tenang atau stimulasi rendah, pengaturan hewan bantuan, informasi transportasi aksesibel, dan keterbatasan material. Jangan menjanjikan fasilitas yang belum dikonfirmasi venue.",
            "Sediakan cara jelas untuk meminta penyesuaian yang wajar, termasuk kebutuhan mobilitas, sensorik, komunikasi, makanan, dan kebutuhan terkait disabilitas lainnya. Minta hanya informasi yang diperlukan untuk menilai dan menyediakan penyesuaian; jangan mewajibkan diagnosis jika deskripsi kebutuhan fungsional sudah cukup. Jelaskan keterbatasan yang tidak dapat dihindari dan diskusikan alternatif."
          ]
        },
        {
          "heading": "3. Bantuan dan peninjauan",
          "body": [
            "Identifikasi kontak dukungan peserta dan jam layanan selama acara. Staf harus mengetahui cara meneruskan permintaan aksesibilitas tanpa mengungkapkannya kepada petugas yang tidak berkaitan. Rencana darurat harus memperhitungkan peserta yang mungkin memerlukan bantuan evakuasi atau penerimaan instruksi.",
            "Tinjau masukan setelah setiap edisi, catat hambatan berulang, prioritaskan perubahan berdasarkan dampak dan kelayakan, serta terbitkan perbaikan material atau keterbatasan yang diketahui. Pernyataan niat bukan sertifikasi kesesuaian hukum atau teknis."
          ]
        }
      ]
    }
  },
  "moderation": {
    "en": {
      "title": "Moderation and Reporting",
      "summary": "Defines a fair event-reporting process, triage, evidence handling, decisions, appeals and protection from retaliation.",
      "sections": [
        {
          "heading": "1. Reporting channels and scope",
          "body": [
            "Before an event, publish a staffed reporting channel, on-site reporting location, safeguarding contact, accessibility contact and emergency route. State the hours each channel is monitored and an alternative if it is unavailable. Reports may concern harassment, discrimination, safety hazards, lost credentials, privacy incidents, accessibility barriers, vendor disputes or breaches of event rules.",
            "A report may be made by an affected person, witness, guardian or staff member. Do not require a person to confront the subject of a report. Accept reports in accessible formats and provide interpretation or communication support where reasonably available."
          ]
        },
        {
          "heading": "2. Triage and immediate safety",
          "body": [
            "On receipt, assess whether anyone faces immediate danger, needs medical help, requires separation or a safe place, or may be at risk of retaliation. Immediate safety measures may include contacting venue security or emergency services, arranging a support person, moving parties apart or temporarily restricting access. These measures are precautionary and are not a finding of guilt.",
            "Classify the report by urgency and subject, assign a responsible handler, record only necessary details and avoid conflicts of interest. A person accused of serious misconduct should not control the report or access its confidential evidence."
          ]
        },
        {
          "heading": "3. Evidence, interviews and privacy",
          "body": [
            "Preserve relevant messages, photographs, access logs or witness details only where lawful and necessary. Explain what information will be recorded and who may see it. Do not conduct invasive searches of personal devices, seize property or demand passwords without lawful authority or informed and freely given agreement.",
            "Speak separately with the reporting person, subject and relevant witnesses where practicable. Use open questions, avoid assumptions, distinguish direct observation from hearsay and allow each person to correct material inaccuracies. Do not promise absolute confidentiality; explain any legal or safety reason for limited disclosure."
          ]
        },
        {
          "heading": "4. Decisions, notice and review",
          "body": [
            "Decisions should identify the rule applied, facts accepted, evidence considered, risk assessment, action taken and duration. Possible actions include no action, informal resolution with agreement, warning, safety plan, activity restriction, badge suspension, removal, future-event exclusion or referral to authorities. Select the least restrictive measure that adequately addresses the substantiated risk.",
            "Except where notice would create immediate danger, compromise evidence or be unlawful, tell the subject the substance of the concern and provide a reasonable chance to respond. Provide the reporting person with an outcome summary to the extent permitted by privacy law. Offer review by an independent authorised person where practicable, especially for permanent exclusion.",
            "Do not retaliate against reporters, witnesses or people seeking accessibility or privacy assistance. Knowingly fabricated reports intended to harm another person may be addressed separately, but an unsubstantiated report or a mistaken good-faith recollection is not automatically a false report."
          ]
        },
        {
          "heading": "5. Records, training and transparency",
          "body": [
            "Keep a restricted case record containing the report, access history, actions, reasons, review outcome and deletion date. Apply a retention period tied to safety, legal claims and applicable law; do not retain all reports indefinitely. Restrict access to trained handlers and use secure storage.",
            "Train staff and volunteers on consent, trauma-aware communication, child safeguarding, evidence handling, conflicts of interest, confidentiality, accessibility and emergency escalation. After each edition, review anonymised patterns and publish aggregate information where safe and lawful."
          ]
        }
      ]
    },
    "id": {
      "title": "Moderasi dan Pelaporan",
      "summary": "Menetapkan proses pelaporan acara yang adil, triase, penanganan bukti, keputusan, banding, dan perlindungan dari pembalasan.",
      "sections": [
        {
          "heading": "1. Kanal dan cakupan pelaporan",
          "body": [
            "Sebelum acara, terbitkan kanal pelaporan yang dijaga petugas, lokasi pelaporan di tempat, kontak perlindungan, kontak aksesibilitas, dan jalur darurat. Nyatakan jam pemantauan setiap kanal dan alternatif jika tidak tersedia. Laporan dapat berkaitan dengan pelecehan, diskriminasi, bahaya keselamatan, kredensial hilang, insiden privasi, hambatan aksesibilitas, sengketa vendor, atau pelanggaran aturan acara.",
            "Laporan dapat disampaikan oleh pihak terdampak, saksi, wali, atau staf. Jangan mewajibkan seseorang menghadapi terlapor. Terima laporan dalam format aksesibel dan sediakan dukungan penerjemahan atau komunikasi jika tersedia secara wajar."
          ]
        },
        {
          "heading": "2. Triase dan keselamatan segera",
          "body": [
            "Saat menerima laporan, nilai apakah seseorang menghadapi bahaya langsung, membutuhkan bantuan medis, memerlukan pemisahan atau tempat aman, atau berisiko mengalami pembalasan. Tindakan keselamatan segera dapat mencakup menghubungi keamanan venue atau layanan darurat, mengatur pendamping, memisahkan pihak, atau membatasi akses sementara. Tindakan ini bersifat pencegahan dan bukan penetapan kesalahan.",
            "Klasifikasikan laporan berdasarkan urgensi dan pokok masalah, tunjuk petugas yang bertanggung jawab, catat hanya detail yang diperlukan, dan hindari konflik kepentingan. Orang yang dituduh melakukan pelanggaran serius tidak boleh mengendalikan laporan atau mengakses bukti rahasianya."
          ]
        },
        {
          "heading": "3. Bukti, wawancara dan privasi",
          "body": [
            "Jaga pesan, foto, log akses, atau detail saksi yang relevan hanya jika sah dan diperlukan. Jelaskan informasi apa yang dicatat dan siapa yang dapat melihatnya. Jangan melakukan pemeriksaan invasif terhadap perangkat pribadi, menyita barang, atau meminta kata sandi tanpa kewenangan hukum atau persetujuan yang diinformasikan dan diberikan secara bebas.",
            "Bicaralah secara terpisah dengan pelapor, terlapor, dan saksi relevan jika memungkinkan. Gunakan pertanyaan terbuka, hindari asumsi, bedakan pengamatan langsung dari kabar pihak lain, dan izinkan setiap orang memperbaiki ketidakakuratan material. Jangan menjanjikan kerahasiaan mutlak; jelaskan alasan hukum atau keselamatan untuk pengungkapan terbatas."
          ]
        },
        {
          "heading": "4. Keputusan, pemberitahuan dan peninjauan",
          "body": [
            "Keputusan harus mengidentifikasi aturan yang diterapkan, fakta yang diterima, bukti yang dipertimbangkan, penilaian risiko, tindakan, dan durasi. Tindakan yang mungkin mencakup tidak mengambil tindakan, penyelesaian informal berdasarkan kesepakatan, peringatan, rencana keselamatan, pembatasan aktivitas, penangguhan badge, pengeluaran, pengecualian acara mendatang, atau rujukan kepada otoritas. Pilih tindakan paling ringan yang cukup untuk menangani risiko yang terbukti.",
            "Kecuali pemberitahuan menimbulkan bahaya langsung, merusak bukti, atau melanggar hukum, sampaikan inti kekhawatiran kepada terlapor dan berikan kesempatan wajar untuk menjawab. Berikan ringkasan hasil kepada pelapor sejauh diizinkan hukum privasi. Sediakan peninjauan oleh petugas berwenang yang independen jika memungkinkan, terutama untuk pengecualian permanen.",
            "Jangan membalas pelapor, saksi, atau orang yang meminta bantuan aksesibilitas atau privasi. Laporan yang sengaja direkayasa untuk merugikan orang lain dapat ditangani secara terpisah, tetapi laporan yang tidak terbukti atau ingatan keliru yang disampaikan dengan itikad baik tidak otomatis merupakan laporan palsu."
          ]
        },
        {
          "heading": "5. Catatan, pelatihan dan transparansi",
          "body": [
            "Simpan catatan kasus terbatas yang berisi laporan, riwayat akses, tindakan, alasan, hasil peninjauan, dan tanggal penghapusan. Terapkan masa retensi yang terkait keselamatan, klaim hukum, dan hukum yang berlaku; jangan menyimpan semua laporan tanpa batas. Batasi akses kepada petugas terlatih dan gunakan penyimpanan aman.",
            "Latih staf dan relawan mengenai persetujuan, komunikasi yang peka trauma, perlindungan anak, penanganan bukti, konflik kepentingan, kerahasiaan, aksesibilitas, dan eskalasi darurat. Setelah setiap edisi, tinjau pola anonim dan terbitkan informasi agregat jika aman dan sah."
          ]
        }
      ]
    }
  },
  "retention": {
    "en": {
      "title": "Data Retention",
      "summary": "Sets purpose-based retention and deletion rules for registration, payment, identity, safeguarding, incident and media records.",
      "sections": [
        {
          "heading": "1. Retention schedule",
          "body": [
            "The controller must maintain a schedule for each data category stating its purpose, system, owner, lawful basis, recipients, retention trigger, period, deletion method, backup treatment and legal-hold exception. A single indefinite retention period for all attendee data is not acceptable.",
            "Retention periods must be based on the time needed for the purpose, statutory accounting or tax periods, limitation periods for claims, safeguarding requirements and documented operational necessity. Where no continuing purpose or legal duty exists, delete or irreversibly anonymise the data."
          ]
        },
        {
          "heading": "2. Category-specific treatment",
          "body": [
            "Registration and payment records may be retained for the statutory accounting and dispute period. Payment card credentials must remain with the payment provider and must not be copied into event systems. Identity-document images should not be retained if visual verification is sufficient; where a copy is legally required, restrict it and delete it after the verification or legal retention purpose ends.",
            "Guardian consent and age-verification records should be retained only for the period needed to demonstrate lawful authorisation and resolve foreseeable claims. Accessibility and health-related notes should be deleted when the requested support and any necessary follow-up are complete, unless a legal duty requires a restricted record.",
            "Incident and safeguarding records may require longer restricted retention where necessary to protect people, address a claim or comply with law. Each extension must have a documented reason, review date and access restriction. Raw CCTV remains under the venue's separate retention policy unless the organiser lawfully receives a relevant extract for an incident.",
            "Photographs, video and audio should be retained according to the stated publication purpose, licence and consent. Unselected raw footage should be deleted on a defined schedule; published material should be reviewed when consent is withdrawn or a valid objection is received."
          ]
        },
        {
          "heading": "3. Deletion, anonymisation and backups",
          "body": [
            "Deletion must cover active systems, exports, shared drives, vendor copies and access credentials. Where a backup cannot be edited immediately, restrict restoration, allow the documented rotation to expire, and ensure deleted data is not reintroduced into active use. Anonymisation must be irreversible in the relevant context; replacing a name with a code while keeping a lookup key is pseudonymisation, not anonymisation.",
            "Record completion of material deletion requests and vendor confirmations where appropriate. Preserve only the minimum data necessary for a legal hold, and remove the hold when the reason ends."
          ]
        },
        {
          "heading": "4. Transparency and review",
          "body": [
            "Publish the actual retention periods or clear criteria for each major category in the privacy notice. Do not state exact periods until systems, vendors and legal obligations have been verified. Review the schedule before each event edition, after a vendor change, and after a data incident or legal change."
          ]
        }
      ]
    },
    "id": {
      "title": "Retensi Data",
      "summary": "Menetapkan aturan retensi dan penghapusan berdasarkan tujuan untuk catatan registrasi, pembayaran, identitas, perlindungan, insiden, dan media.",
      "sections": [
        {
          "heading": "1. Jadwal retensi",
          "body": [
            "Pengendali harus memelihara jadwal untuk setiap kategori data yang menyebutkan tujuan, sistem, pemilik, dasar hukum, penerima, pemicu retensi, periode, metode penghapusan, perlakuan backup, dan pengecualian penahanan hukum. Satu masa simpan tanpa batas untuk seluruh data peserta tidak dapat diterima.",
            "Periode retensi harus didasarkan pada waktu yang diperlukan untuk tujuan, periode akuntansi atau pajak berdasarkan undang-undang, masa daluwarsa klaim, kebutuhan perlindungan, dan kebutuhan operasional yang terdokumentasi. Jika tidak ada lagi tujuan atau kewajiban hukum yang berlanjut, data harus dihapus atau dianonimkan secara permanen."
          ]
        },
        {
          "heading": "2. Perlakuan berdasarkan kategori",
          "body": [
            "Catatan registrasi dan pembayaran dapat disimpan selama periode akuntansi dan sengketa yang diwajibkan hukum. Kredensial kartu pembayaran harus tetap berada pada penyedia pembayaran dan tidak boleh disalin ke sistem acara. Gambar dokumen identitas tidak boleh disimpan jika verifikasi visual sudah memadai; jika salinan diwajibkan hukum, batasi akses dan hapus setelah tujuan verifikasi atau retensi hukum berakhir.",
            "Catatan persetujuan wali dan verifikasi usia hanya boleh disimpan selama diperlukan untuk membuktikan otorisasi yang sah dan menyelesaikan klaim yang dapat diperkirakan. Catatan aksesibilitas dan kesehatan harus dihapus setelah dukungan yang diminta dan tindak lanjut yang diperlukan selesai, kecuali kewajiban hukum mengharuskan catatan terbatas.",
            "Catatan insiden dan perlindungan mungkin memerlukan retensi terbatas yang lebih lama jika diperlukan untuk melindungi orang, menangani klaim, atau mematuhi hukum. Setiap perpanjangan harus memiliki alasan terdokumentasi, tanggal peninjauan, dan pembatasan akses. CCTV mentah tetap mengikuti kebijakan retensi venue yang terpisah kecuali penyelenggara secara sah menerima cuplikan relevan untuk insiden.",
            "Foto, video, dan audio harus disimpan sesuai tujuan publikasi, lisensi, dan persetujuan yang dinyatakan. Rekaman mentah yang tidak dipilih harus dihapus berdasarkan jadwal tertentu; materi yang telah diterbitkan harus ditinjau ketika persetujuan ditarik atau keberatan yang sah diterima."
          ]
        },
        {
          "heading": "3. Penghapusan, anonimisasi dan backup",
          "body": [
            "Penghapusan harus mencakup sistem aktif, ekspor, drive bersama, salinan vendor, dan kredensial akses. Jika backup tidak dapat langsung diedit, batasi pemulihan, biarkan rotasi terdokumentasi berakhir, dan pastikan data yang dihapus tidak dimasukkan kembali ke penggunaan aktif. Anonimisasi harus tidak dapat dibalik dalam konteks terkait; mengganti nama dengan kode sambil menyimpan kunci pencocokan merupakan pseudonimisasi, bukan anonimisasi.",
            "Catat penyelesaian permintaan penghapusan material dan konfirmasi vendor jika sesuai. Pertahankan hanya data minimum yang diperlukan untuk penahanan hukum dan hapus penahanan ketika alasannya berakhir."
          ]
        },
        {
          "heading": "4. Transparansi dan peninjauan",
          "body": [
            "Terbitkan periode retensi aktual atau kriteria yang jelas untuk setiap kategori utama dalam pemberitahuan privasi. Jangan menyatakan periode pasti sebelum sistem, vendor, dan kewajiban hukum diverifikasi. Tinjau jadwal sebelum setiap edisi acara, setelah perubahan vendor, dan setelah insiden data atau perubahan hukum."
          ]
        }
      ]
    }
  },
  "ruleset": {
    "en": {
      "title": "Website Ruleset",
      "summary": "Rules for lawful, secure and respectful use of the V2 information website.",
      "sections": [
        {
          "heading": "1. Access and permitted use",
          "body": [
            "Visitors may read, cite and link to public pages for lawful personal, educational and informational purposes. Do not misrepresent the site, its operator or the origin of material. Respect copyright, licence notices and attribution requirements.",
            "Use the site through ordinary browser access. Do not bypass access controls, attempt to obtain credentials, exploit vulnerabilities, interfere with service availability, inject malicious code, impersonate another person, harvest personal data, or use the site to threaten, harass or defraud others."
          ]
        },
        {
          "heading": "2. Automated access and technical limits",
          "body": [
            "Automated collection, indexing or reuse must comply with applicable law, published technical restrictions, reasonable rate limits and third-party rights. Do not overload the service, evade rate limits, create artificial traffic or use automated methods to access restricted areas.",
            "Public availability does not grant a licence to reproduce protected writing, photographs, illustrations, logos, fonts, video, audio or other creative material. Any permitted reuse must follow the applicable licence or legal exception."
          ]
        },
        {
          "heading": "3. Security reports and responsible disclosure",
          "body": [
            "If you identify a security weakness, report it through the published security contact with enough detail to reproduce the issue safely. Do not access, alter, download or disclose other people's data; do not disrupt service; and do not continue testing beyond the minimum necessary to demonstrate the issue.",
            "The operator should acknowledge a credible report, restrict access to the details, coordinate a reasonable remediation period and avoid retaliating against good-faith reports made within these limits."
          ]
        },
        {
          "heading": "4. External services and event rules",
          "body": [
            "External links lead to services operated by third parties. Their terms, privacy notices, age restrictions and security practices apply independently. This Website Ruleset does not replace the event's admission, venue, dealer, panel, performer or attendee rules; those must be obtained from the responsible event operator."
          ]
        },
        {
          "heading": "5. Enforcement and review",
          "body": [
            "A suspected breach may result in temporary rate limiting, blocking of abusive requests or restriction of a compromised feature where necessary to protect the service. Measures should be proportionate, logged and limited to the affected activity. Where an identifiable user account or interactive feature is later introduced, the operator must publish notice, reasons and a review route before applying account-level sanctions."
          ]
        }
      ]
    },
    "id": {
      "title": "Aturan Penggunaan Situs",
      "summary": "Aturan penggunaan situs informasi V2 secara sah, aman, dan saling menghormati.",
      "sections": [
        {
          "heading": "1. Akses dan penggunaan yang diizinkan",
          "body": [
            "Pengunjung boleh membaca, mengutip, dan menautkan halaman publik untuk tujuan pribadi, pendidikan, dan informasi yang sah. Jangan menyamarkan situs, operator, atau asal materi. Hormati hak cipta, pemberitahuan lisensi, dan persyaratan atribusi.",
            "Gunakan situs melalui akses browser biasa. Jangan melewati kontrol akses, mencoba memperoleh kredensial, mengeksploitasi kerentanan, mengganggu ketersediaan layanan, menyisipkan kode berbahaya, menyamar sebagai orang lain, mengumpulkan data pribadi, atau menggunakan situs untuk mengancam, melecehkan, atau menipu orang lain."
          ]
        },
        {
          "heading": "2. Akses otomatis dan batas teknis",
          "body": [
            "Pengumpulan, pengindeksan, atau penggunaan ulang secara otomatis harus mematuhi hukum yang berlaku, pembatasan teknis yang diumumkan, batas permintaan yang wajar, dan hak pihak ketiga. Jangan membebani layanan, menghindari batas permintaan, membuat lalu lintas buatan, atau mengakses area terbatas melalui otomasi.",
            "Ketersediaan publik tidak memberikan lisensi untuk memperbanyak tulisan, foto, ilustrasi, logo, font, video, audio, atau materi kreatif terlindungi lainnya. Penggunaan ulang yang diizinkan harus mengikuti lisensi atau pengecualian hukum terkait."
          ]
        },
        {
          "heading": "3. Laporan keamanan dan pengungkapan bertanggung jawab",
          "body": [
            "Jika menemukan kelemahan keamanan, laporkan melalui kontak keamanan yang diterbitkan dengan detail secukupnya agar masalah dapat direproduksi secara aman. Jangan mengakses, mengubah, mengunduh, atau mengungkap data orang lain; jangan mengganggu layanan; dan jangan melanjutkan pengujian melebihi kebutuhan minimum untuk menunjukkan masalah.",
            "Operator sebaiknya mengakui laporan kredibel, membatasi akses ke detailnya, mengoordinasikan waktu perbaikan yang wajar, dan tidak membalas laporan beritikad baik yang dibuat dalam batas ini."
          ]
        },
        {
          "heading": "4. Layanan eksternal dan aturan acara",
          "body": [
            "Tautan eksternal mengarah ke layanan yang dioperasikan pihak ketiga. Ketentuan, pemberitahuan privasi, batas usia, dan praktik keamanannya berlaku secara terpisah. Aturan Penggunaan Situs ini tidak menggantikan aturan penerimaan acara, venue, dealer, panel, performer, atau peserta; aturan tersebut harus diperoleh dari operator acara yang bertanggung jawab."
          ]
        },
        {
          "heading": "5. Penegakan dan peninjauan",
          "body": [
            "Dugaan pelanggaran dapat mengakibatkan pembatasan laju sementara, pemblokiran permintaan abusif, atau pembatasan fitur yang disalahgunakan jika diperlukan untuk melindungi layanan. Tindakan harus proporsional, dicatat, dan dibatasi pada aktivitas terkait. Jika akun pengguna atau fitur interaktif ditambahkan kelak, operator harus menerbitkan pemberitahuan, alasan, dan jalur peninjauan sebelum menerapkan sanksi tingkat akun."
          ]
        }
      ]
    }
  }
};
