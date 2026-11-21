/* ==========================================================================
   SMILECARE CONTENT
   Provider, clinic, schedule, and fee records below are illustrative and
   unverified. Replace them with verified, licensed information before launch.
   Treatment information is general and is not a diagnosis.
   ========================================================================== */

/* ------------------------------ TREATMENTS ------------------------------ */
// Treatment fees, durations, and images require verification before launch.
const treatments = [
  {
    id: 1,
    name: "Dental Checkup & Cleaning",
    category: "General",
    shortDescription: "A routine visit to look over your teeth and gums and remove plaque and tartar buildup.",
    fullDescription: "A regular checkup lets a dentist look at your teeth, gums and mouth and talk through any concerns you have. Cleaning (scaling and polishing) removes plaque and tartar that brushing at home can miss. Many people visit every six months, but your dentist will advise what suits you.",
    duration: "30-45 minutes",
    feeMin: 1500,
    feeMax: 4000,
    image: "images/dental-checkup-cleaning.jpg",
    steps: [
      "The dentist asks about your dental history and any concerns.",
      "Teeth, gums and mouth are examined, with X-rays if the dentist advises.",
      "Plaque and tartar are removed with scaling tools.",
      "Teeth are polished and you receive home-care advice.",
      "A follow-up visit is suggested if needed."
    ],
    faqs: [
      { question: "How often should I get a checkup?", answer: "Many dentists suggest every six months, but your dentist can recommend a schedule that suits you." },
      { question: "Is cleaning painful?", answer: "Most people feel mild pressure or sensitivity. Tell your dentist if you feel discomfort." },
      { question: "Will cleaning damage my teeth?", answer: "Cleaning is a routine procedure done with care. Your dentist can explain what to expect." }
    ],
    commonSigns: [
      "Visible tartar or stains on teeth",
      "Gums that feel tender when brushing",
      "It has been more than six months since your last visit",
      "Persistent bad breath"
    ],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 2,
    name: "Fillings",
    category: "General",
    shortDescription: "Restores a tooth that has a cavity or small damage using a tooth-colored or other filling material.",
    fullDescription: "A filling replaces the part of a tooth affected by decay or minor damage. The dentist removes the damaged area, cleans it and fills it with a suitable material. Tooth-colored fillings are a popular choice because they blend with natural teeth. Your dentist will explain which material may suit you.",
    duration: "30-60 minutes",
    feeMin: 2000,
    feeMax: 6000,
    image: "images/dental-fillings.jpg",
    steps: [
      "The dentist examines the tooth and discusses options.",
      "The area is numbed so you stay comfortable.",
      "Damaged part of the tooth is carefully removed.",
      "The filling material is placed and shaped.",
      "Your bite is checked and the filling is polished."
    ],
    faqs: [
      { question: "Will it hurt?", answer: "The area is numbed first. You may feel pressure but should not feel sharp pain. Tell your dentist if you do." },
      { question: "How long do fillings last?", answer: "This varies with the material, the tooth and your oral care. Your dentist can give an idea for your case." },
      { question: "Can I eat after a filling?", answer: "Your dentist will tell you when it is safe to eat, especially while the numbness wears off." }
    ],
    commonSigns: [
      "A dark spot or small hole on a tooth",
      "Sensitivity to sweet, hot or cold food",
      "Food getting stuck in one place",
      "A small chip or rough edge on a tooth"
    ],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 3,
    name: "Root Canal",
    category: "General",
    shortDescription: "Treatment that cleans the inside of a tooth when its inner tissue is infected or badly irritated.",
    fullDescription: "Root canal treatment removes infected or damaged tissue from inside a tooth, cleans the space and seals it. It is often advised to try to keep a natural tooth instead of removing it. Many people need a crown afterwards to protect the tooth. Only a dentist can confirm if this treatment is suitable.",
    duration: "60-90 minutes (may need 1-3 visits)",
    feeMin: 8000,
    feeMax: 25000,
    image: "images/root-canal.jpg",
    steps: [
      "The dentist examines the tooth and takes an X-ray.",
      "The tooth is numbed for comfort.",
      "The inner tissue is removed and the canals are cleaned.",
      "The space is filled and sealed.",
      "A crown may be advised to protect the tooth."
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "The tooth is numbed during treatment. Some soreness afterwards is common and your dentist will advise on care." },
      { question: "Why not just remove the tooth?", answer: "Keeping a natural tooth is often preferred when possible. Your dentist will discuss the options with you." },
      { question: "Will I need a crown?", answer: "Often yes, but it depends on the tooth. Your dentist will recommend what is suitable." }
    ],
    commonSigns: [
      "Ongoing or throbbing tooth pain",
      "Lingering sensitivity to hot or cold",
      "Swelling or tenderness near a tooth",
      "A tooth that has darkened"
    ],
    relatedSpecialty: "Endodontist",
    isIllustrative: true
  },
  {
    id: 4,
    name: "Teeth Whitening",
    category: "Cosmetic",
    shortDescription: "A cosmetic treatment that helps lighten stains and brighten the shade of your teeth.",
    fullDescription: "Whitening uses a bleaching agent to lighten surface and some deeper stains on teeth. It can be done in the clinic or with a take-home kit made by your dentist. Results vary from person to person. Your dentist can check if your teeth and gums are suitable first.",
    duration: "45-90 minutes",
    feeMin: 8000,
    feeMax: 25000,
    image: "images/teeth-whitening.jpg",
    steps: [
      "The dentist checks your teeth and gums are suitable.",
      "Teeth are cleaned and the starting shade is noted.",
      "Gums are protected and the whitening agent is applied.",
      "Teeth may be exposed to light or left to rest, per the method used.",
      "You receive aftercare advice to help maintain results."
    ],
    faqs: [
      { question: "Does whitening cause sensitivity?", answer: "Some people feel temporary sensitivity. Tell your dentist if you have sensitive teeth." },
      { question: "How long do results last?", answer: "This varies with your habits, such as tea, coffee and smoking. Your dentist can advise." },
      { question: "Is it suitable for everyone?", answer: "Not always. Your dentist will check your teeth, fillings and gums first." }
    ],
    commonSigns: [
      "Yellow or dull-looking teeth",
      "Stains from tea, coffee or tobacco",
      "Teeth that have darkened with age",
      "Wanting a brighter smile for an event"
    ],
    relatedSpecialty: "Cosmetic Dentist",
    isIllustrative: true
  },
  {
    id: 5,
    name: "Braces",
    category: "Orthodontics",
    shortDescription: "Gradually moves teeth into better positions to help with crooked teeth and bite concerns.",
    fullDescription: "Braces apply gentle, steady pressure to move teeth over time. Options may include metal braces, ceramic braces or clear aligners, depending on the case. Treatment often lasts many months and needs regular adjustment visits. An orthodontist can explain which option may suit you.",
    duration: "Consultation: 30-45 minutes; treatment: often 12-24 months",
    feeMin: 80000,
    feeMax: 250000,
    image: "images/braces.jpg",
    steps: [
      "Consultation with examination, photos and X-rays.",
      "A treatment plan and timeline are discussed.",
      "Braces or aligners are fitted.",
      "Regular adjustment visits during treatment.",
      "A retainer is provided to help keep teeth in place."
    ],
    faqs: [
      { question: "Are braces only for teenagers?", answer: "No. Many adults also have orthodontic treatment. An orthodontist can advise on your case." },
      { question: "Do braces hurt?", answer: "Teeth can feel sore for a few days after fitting or adjustments. Your orthodontist can suggest ways to manage this." },
      { question: "How long will I need them?", answer: "It depends on the case. Your orthodontist can give an estimate after examining you." }
    ],
    commonSigns: [
      "Crowded or crooked teeth",
      "Gaps between teeth",
      "Upper and lower teeth that do not meet well",
      "Difficulty cleaning between teeth"
    ],
    relatedSpecialty: "Orthodontist",
    isIllustrative: true
  },
  {
    id: 6,
    name: "Dental Implants",
    category: "Surgical",
    shortDescription: "A way to replace a missing tooth with a fixed artificial tooth supported by a small post in the jaw.",
    fullDescription: "A dental implant is a small post placed in the jawbone to hold a replacement tooth. It usually involves an assessment, a minor surgical step and a healing period before the crown is fitted. Not everyone is suited to implants, so a dentist will check bone and gum health first.",
    duration: "Several visits over a few months",
    feeMin: 80000,
    feeMax: 200000,
    image: "images/dental-implants.jpg",
    steps: [
      "Assessment with examination and scans.",
      "The implant post is placed under local anesthesia.",
      "A healing period allows the jaw to support the implant.",
      "An abutment and replacement crown are fitted.",
      "Follow-up visits check healing and fit."
    ],
    faqs: [
      { question: "Am I suitable for an implant?", answer: "Only a dentist can confirm this after checking your gums, bone and general health." },
      { question: "Is the procedure painful?", answer: "Local anesthesia is used. Some soreness afterwards is common and your dentist will advise on care." },
      { question: "How long do implants take?", answer: "The full process often takes a few months because healing time is needed." }
    ],
    commonSigns: [
      "A missing tooth or gap",
      "Difficulty chewing on one side",
      "Dentures that feel loose",
      "Neighboring teeth shifting into a gap"
    ],
    relatedSpecialty: "Oral Surgeon",
    isIllustrative: true
  },
  {
    id: 7,
    name: "Crowns & Bridges",
    category: "General",
    shortDescription: "Caps for weakened teeth and fixed replacements that fill the space of a missing tooth.",
    fullDescription: "A crown is a cap that covers and protects a damaged or weakened tooth. A bridge uses crowns on neighboring teeth to hold an artificial tooth across a gap. Materials include metal, porcelain and ceramic. Your dentist will explain which option could suit your teeth and budget.",
    duration: "2 visits, about 45-60 minutes each",
    feeMin: 10000,
    feeMax: 40000,
    image: "images/crowns-bridges.jpg",
    steps: [
      "The dentist examines the tooth and discusses materials.",
      "The tooth is shaped and an impression or scan is taken.",
      "A temporary crown or bridge may be placed.",
      "The permanent crown or bridge is made in a lab.",
      "It is fitted, adjusted and checked for comfort."
    ],
    faqs: [
      { question: "How do I care for a crown?", answer: "Brush and floss as usual. Your dentist will give specific advice for your case." },
      { question: "Which material is best?", answer: "It depends on the tooth, bite and budget. Your dentist can explain the options." },
      { question: "Will a temporary crown feel different?", answer: "It can feel slightly different and is not as strong. Your dentist will advise what to avoid." }
    ],
    commonSigns: [
      "A tooth that is cracked or heavily filled",
      "A tooth weakened after root canal treatment",
      "A gap from a missing tooth",
      "A tooth that is worn or misshapen"
    ],
    relatedSpecialty: "Prosthodontist",
    isIllustrative: true
  },
  {
    id: 8,
    name: "Tooth Extraction",
    category: "Surgical",
    shortDescription: "Removal of a tooth that cannot be saved or needs to be taken out for other dental reasons.",
    fullDescription: "A dentist may advise removing a tooth that is badly damaged, loose or causing crowding. The area is numbed first. Afterwards you will get advice on caring for the area as it heals. Your dentist can also discuss options to replace the tooth.",
    duration: "20-45 minutes",
    feeMin: 2000,
    feeMax: 8000,
    image: "images/tooth-extraction.jpg",
    steps: [
      "The dentist examines the tooth and may take an X-ray.",
      "The area is numbed with local anesthesia.",
      "The tooth is gently loosened and removed.",
      "Gauze is placed and the area is checked.",
      "You receive aftercare instructions."
    ],
    faqs: [
      { question: "Will I feel pain?", answer: "The area is numbed. You may feel pressure but should tell your dentist if you feel pain." },
      { question: "What should I do afterwards?", answer: "Follow your dentist's aftercare advice, which usually covers eating, cleaning and rest." },
      { question: "Can the tooth be replaced?", answer: "Yes, options exist. Your dentist can discuss them with you." }
    ],
    commonSigns: [
      "A tooth too damaged to repair",
      "A very loose tooth",
      "Persistent pain around a tooth",
      "Crowding that needs space to be created"
    ],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 9,
    name: "Wisdom Tooth Removal",
    category: "Surgical",
    shortDescription: "Removal of a wisdom tooth that is causing pain, swelling or problems with nearby teeth.",
    fullDescription: "Wisdom teeth are the last teeth to appear, often in the late teens or twenties. Sometimes they do not have enough room and can cause discomfort or gum problems. Your dentist or oral surgeon may advise removal after an examination and X-ray. Recovery time varies from person to person.",
    duration: "30-60 minutes",
    feeMin: 5000,
    feeMax: 20000,
    image: "images/wisdom-tooth-removal.jpg",
    steps: [
      "Examination and an X-ray to see the tooth position.",
      "The area is numbed, or other anesthesia is discussed.",
      "The tooth is removed, sometimes in sections.",
      "The area is cleaned and stitches may be placed.",
      "You receive recovery instructions."
    ],
    faqs: [
      { question: "Does every wisdom tooth need removing?", answer: "No. Only a dentist can advise after examining your teeth and X-rays." },
      { question: "How long is recovery?", answer: "It varies. Your dentist will explain what to expect and when to call them." },
      { question: "Can I go to work afterwards?", answer: "Many people rest for a day or more. Ask your dentist for advice for your case." }
    ],
    commonSigns: [
      "Pain or swelling at the back of the mouth",
      "Tender gums around a back tooth",
      "Difficulty opening the mouth fully",
      "A wisdom tooth only partly visible"
    ],
    relatedSpecialty: "Oral Surgeon",
    isIllustrative: true
  },
  {
    id: 10,
    name: "Gum Treatment",
    category: "General",
    shortDescription: "Care for gums that bleed, swell or feel sore, from deep cleaning to ongoing gum care.",
    fullDescription: "Gum treatment helps manage gum irritation and gum disease. It may include a deep clean below the gumline and advice on brushing and flossing. Early care can make a real difference. A dentist or periodontist will assess your gums and recommend a plan.",
    duration: "45-60 minutes per visit",
    feeMin: 3000,
    feeMax: 15000,
    image: "images/gum-treatment.jpg",
    steps: [
      "The dentist examines your gums and measures gum health.",
      "Plaque and tartar are removed, including below the gumline if needed.",
      "Roots may be smoothed to help gums heal.",
      "You receive a home-care plan.",
      "Follow-up visits check how your gums are doing."
    ],
    faqs: [
      { question: "Why do my gums bleed?", answer: "There can be several reasons. A dentist can examine your gums and explain what may be going on." },
      { question: "Can gum problems be reversed?", answer: "Early gum irritation can often improve with good care. Your dentist can tell you more." },
      { question: "Will treatment hurt?", answer: "Gums may feel tender. Numbing can be used if needed. Tell your dentist if you are uncomfortable." }
    ],
    commonSigns: [
      "Gums that bleed when brushing or flossing",
      "Red, swollen or tender gums",
      "Persistent bad breath",
      "Gums that look like they are pulling back"
    ],
    relatedSpecialty: "Periodontist",
    isIllustrative: true
  },
  {
    id: 11,
    name: "Kids Dentistry",
    category: "Kids",
    shortDescription: "Gentle dental care for children, including checkups, cleaning and advice for parents.",
    fullDescription: "Children's dental care focuses on keeping young teeth healthy and helping children feel comfortable at the dentist. Visits may include checkups, cleaning, fluoride advice and guidance on brushing. A pediatric dentist is trained to work with children and can talk through any worries you have.",
    duration: "20-40 minutes",
    feeMin: 1500,
    feeMax: 5000,
    image: "images/kids-dentistry.jpg",
    steps: [
      "A friendly introduction so the child feels at ease.",
      "A gentle check of teeth, gums and bite.",
      "Cleaning and, if advised, preventive care.",
      "Brushing tips for the child and parent.",
      "A plan for the next visit."
    ],
    faqs: [
      { question: "When should my child first see a dentist?", answer: "Many dentists suggest around the first birthday or when the first tooth appears. Ask your dentist for advice." },
      { question: "My child is scared. What can I do?", answer: "Pediatric dentists are used to nervous children. Let the clinic know in advance." },
      { question: "Do baby teeth need care?", answer: "Yes. Baby teeth help with eating, speaking and guiding adult teeth. Your dentist can explain more." }
    ],
    commonSigns: [
      "A child complaining of tooth pain",
      "Dark spots on baby teeth",
      "Child avoiding certain foods",
      "A first tooth has appeared"
    ],
    relatedSpecialty: "Pediatric Dentist",
    isIllustrative: true
  },
  {
    id: 12,
    name: "Emergency Dental Care",
    category: "General",
    shortDescription: "Urgent care for severe pain, swelling, injury or a broken tooth that needs quick attention.",
    fullDescription: "Emergency dental care helps with sudden problems such as severe pain, swelling, a knocked-out or broken tooth, or bleeding that will not stop. Treatment focuses on relieving pain and protecting the tooth, with further care planned afterwards. If you have swelling that affects breathing or swallowing, or a serious injury, seek urgent medical help immediately.",
    duration: "Varies by situation",
    feeMin: 2000,
    feeMax: 15000,
    image: "images/emergency-dental-care.jpg",
    steps: [
      "Contact a licensed dental clinic and describe what happened.",
      "The dentist assesses the problem as soon as possible.",
      "Pain relief and first treatment are provided.",
      "A plan for follow-up treatment is discussed.",
      "You receive advice on care until your next visit."
    ],
    faqs: [
      { question: "What counts as a dental emergency?", answer: "Examples include severe pain, facial swelling, a knocked-out tooth or heavy bleeding. If unsure, call a dentist." },
      { question: "What if a tooth is knocked out?", answer: "Seek a dentist urgently. Your dentist or clinic can give first-aid advice over the phone." },
      { question: "Can I request urgent care online?", answer: "This website cannot contact a clinic. For urgent concerns, contact a licensed local provider directly; seek emergency medical help for life-threatening symptoms." }
    ],
    commonSigns: [
      "Severe or sudden tooth pain",
      "Swelling of the face or jaw",
      "A broken or knocked-out tooth",
      "Bleeding that does not stop"
    ],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 13,
    name: "Fluoride Treatment",
    category: "Preventive",
    shortDescription: "A professional fluoride application that can help strengthen tooth enamel and lower the risk of cavities.",
    fullDescription: "A dentist may apply fluoride varnish, gel, or foam to help strengthen enamel. It is often considered for children and people with a higher risk of tooth decay. The dentist will recommend whether it is appropriate and explain any aftercare.",
    duration: "10-20 minutes",
    feeMin: 1000,
    feeMax: 3500,
    image: "images/fluoride-treatment.jpg",
    steps: [
      "The dentist checks the teeth and asks about cavity risk.",
      "Teeth may be cleaned or dried before application.",
      "Fluoride varnish, gel, or foam is applied as recommended.",
      "The dentist explains any short-term eating or drinking guidance."
    ],
    faqs: [
      { question: "Who may benefit from fluoride treatment?", answer: "Children and adults at higher risk of tooth decay may benefit. A dentist can assess your needs." },
      { question: "How often is it needed?", answer: "The interval depends on your cavity risk and the dentist's recommendation." }
    ],
    commonSigns: ["Frequent cavities", "Newly erupted teeth in children", "A dentist has recommended extra cavity prevention"],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 14,
    name: "Dental Sealants",
    category: "Preventive",
    shortDescription: "A thin protective coating placed on the grooves of back teeth to help keep food and bacteria out.",
    fullDescription: "Sealants cover the deep grooves of molars where food and plaque can collect. They are commonly considered for children as permanent molars come in, though a dentist can advise whether sealants are suitable for any tooth.",
    duration: "15-30 minutes",
    feeMin: 1500,
    feeMax: 5000,
    image: "images/dental-sealants.jpg",
    steps: [
      "The dentist checks the tooth and cleans its chewing surface.",
      "The tooth is dried and prepared for the coating.",
      "A thin sealant is applied to the grooves.",
      "The material is set and the bite is checked."
    ],
    faqs: [
      { question: "Do sealants replace brushing?", answer: "No. Brushing with fluoride toothpaste and cleaning between teeth are still important." },
      { question: "How long do sealants last?", answer: "They can wear over time, so a dentist checks them during routine visits." }
    ],
    commonSigns: ["New permanent molars in a child", "Deep grooves on back teeth", "A dentist has recommended extra cavity prevention"],
    relatedSpecialty: "Pediatric Dentist",
    isIllustrative: true
  },
  {
    id: 15,
    name: "Dentures",
    category: "Restorative",
    shortDescription: "Removable replacement teeth designed to help restore chewing and support facial shape after tooth loss.",
    fullDescription: "Dentures may replace some or all missing teeth. They can be full or partial, and need to be planned and fitted to your mouth. A dentist can discuss comfort, cleaning, adjustments, and other replacement options based on your oral health.",
    duration: "Several visits over a few weeks",
    feeMin: 15000,
    feeMax: 100000,
    image: "images/dentures.jpg",
    steps: [
      "The dentist examines your mouth and discusses suitable options.",
      "Measurements or impressions are taken.",
      "A denture is made to fit your mouth.",
      "The dentist checks the fit and makes adjustments if needed.",
      "You receive instructions for wearing and cleaning it."
    ],
    faqs: [
      { question: "Will dentures feel natural right away?", answer: "It can take time to get used to them. Your dentist can adjust the fit and advise you during this period." },
      { question: "How should I clean dentures?", answer: "Follow your dentist's cleaning instructions and remove them as advised." }
    ],
    commonSigns: ["Several missing teeth", "Difficulty chewing after tooth loss", "An existing denture that feels loose or uncomfortable"],
    relatedSpecialty: "Prosthodontist",
    isIllustrative: true
  },
  {
    id: 16,
    name: "Dental Veneers",
    category: "Cosmetic",
    shortDescription: "Thin custom coverings bonded to the front of teeth to change their appearance in selected cases.",
    fullDescription: "Veneers are custom-made shells bonded to the front of teeth. They may change the appearance of color, shape, or spacing, but they are not suitable for every tooth or patient. A dentist should explain alternatives, tooth preparation, maintenance, and long-term considerations.",
    duration: "2 or more visits",
    feeMin: 20000,
    feeMax: 80000,
    image: "images/dental-veneers.jpg",
    steps: [
      "The dentist examines your teeth and discusses your goals and alternatives.",
      "A treatment plan and expected result are reviewed.",
      "If appropriate, the tooth surface is prepared and an impression or scan is taken.",
      "Custom veneers are made and then bonded in place.",
      "The fit and bite are checked and care instructions are provided."
    ],
    faqs: [
      { question: "Are veneers reversible?", answer: "Some veneer treatments require permanent changes to the tooth. Discuss the risks and alternatives with a dentist first." },
      { question: "Are veneers suitable for everyone?", answer: "No. Tooth health, bite, and personal needs all matter. A dentist can assess your options." }
    ],
    commonSigns: ["Concern about tooth shape or color", "Chipped front teeth", "Wanting to discuss cosmetic treatment options"],
    relatedSpecialty: "Cosmetic Dentist",
    isIllustrative: true
  },
  {
    id: 17,
    name: "Cosmetic Dental Bonding",
    category: "Cosmetic",
    shortDescription: "Tooth-colored resin may be shaped to repair small chips or improve the appearance of selected teeth.",
    fullDescription: "Dental bonding uses tooth-colored composite resin that is shaped and hardened on a tooth. It may be used for small chips, gaps, or discoloration in selected cases. A dentist can explain how bonding compares with other options and how to care for it.",
    duration: "30-60 minutes per tooth",
    feeMin: 5000,
    feeMax: 20000,
    image: "images/cosmetic-dental-bonding.jpg",
    steps: [
      "The dentist checks the tooth and discusses your goals.",
      "A shade is selected to blend with nearby teeth.",
      "The tooth is prepared and resin is applied and shaped.",
      "A curing light hardens the material.",
      "The bonded area is polished and the bite is checked."
    ],
    faqs: [
      { question: "How long does bonding last?", answer: "It varies with the tooth, bite, and daily habits. Your dentist can explain maintenance and repair options." },
      { question: "Can bonding fix every chip or gap?", answer: "No. The size and location of the concern determine whether bonding or another option is suitable." }
    ],
    commonSigns: ["A small chipped tooth", "A small gap between teeth", "A tooth with a minor shape or color concern"],
    relatedSpecialty: "Cosmetic Dentist",
    isIllustrative: true
  },
  {
    id: 18,
    name: "Night Guards and Sports Mouthguards",
    category: "Protective",
    shortDescription: "Custom-fitted oral guards can help protect teeth during sports or from grinding during sleep.",
    fullDescription: "A dentist-fitted guard may be recommended to protect teeth from sports injuries or reduce wear from nighttime grinding. The right type depends on why it is needed. A guard does not treat the cause of grinding, so the dentist may discuss additional care.",
    duration: "Consultation and fitting over 1-2 visits",
    feeMin: 5000,
    feeMax: 25000,
    image: "images/night-guards-mouthguards.jpg",
    steps: [
      "The dentist asks about sports, grinding, and jaw symptoms.",
      "Your teeth and bite are checked.",
      "An impression or scan is taken if a custom guard is suitable.",
      "The guard is fitted and adjusted.",
      "You receive cleaning and replacement guidance."
    ],
    faqs: [
      { question: "Can I use a shop-bought guard?", answer: "A dentist can advise on the right fit and protection for your situation, especially for children or ongoing symptoms." },
      { question: "Will a night guard stop grinding?", answer: "A guard may protect teeth from wear but does not necessarily stop grinding. Ask a dentist about the cause and options." }
    ],
    commonSigns: ["Worn or chipped teeth", "Jaw soreness on waking", "Need for tooth protection during contact sports"],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  },
  {
    id: 19,
    name: "Dental X-rays and Imaging",
    category: "Diagnostic",
    shortDescription: "Dental images may help a dentist assess areas that cannot be seen during a visual examination alone.",
    fullDescription: "A dentist may recommend dental X-rays or other imaging to investigate a concern or plan care. The type and timing depend on your symptoms, dental history, and examination. Ask why an image is needed and what it will help assess.",
    duration: "10-30 minutes",
    feeMin: 1000,
    feeMax: 10000,
    image: "images/dental-xrays-imaging.jpg",
    steps: [
      "The dentist explains why imaging may be useful.",
      "You are positioned for the recommended image.",
      "The image is taken using the appropriate equipment.",
      "The dentist reviews the result with your examination and explains next steps."
    ],
    faqs: [
      { question: "Do I need X-rays at every visit?", answer: "No. A dentist recommends imaging based on your needs and dental history." },
      { question: "Can an X-ray diagnose a problem by itself?", answer: "Images are interpreted with an examination and your history. A dentist explains what the results mean." }
    ],
    commonSigns: ["A dentist needs to assess a tooth below the surface", "Planning for certain dental treatments", "A new dental concern that needs investigation"],
    relatedSpecialty: "General Dentist",
    isIllustrative: true
  }
];

/* ------------------------------- DOCTORS -------------------------------- */
// Provider names, clinics, addresses, fees, and timings are unverified.
// Replace with real, verified, licensed dentists before launch.
// No rating and no "verified" field on purpose.
const doctors = [
  {
    id: 1,
    name: "Dr. Ahsan",
    specialty: "General Dentist",
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
    experience: 8,
    feeMin: 1500,
    feeMax: 3000,
    timings: "10:00 AM - 6:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    languages: ["Urdu", "English"],
    gender: "Male",
    treatments: [1, 2, 8, 12, 13, 14, 17, 18, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 2,
    name: "Dr. Rabia",
    specialty: "Orthodontist",
    city: "Lahore",
    area: "Gulberg",
    experience: 11,
    feeMin: 3000,
    feeMax: 5000,
    timings: "11:00 AM - 7:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    languages: ["Urdu", "English", "Punjabi"],
    gender: "Female",
    treatments: [5, 1, 18, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 3,
    name: "Dr. Imran",
    specialty: "Endodontist",
    city: "Islamabad",
    area: "F-8",
    experience: 12,
    feeMin: 3500,
    feeMax: 6000,
    timings: "9:00 AM - 5:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    languages: ["Urdu", "English"],
    gender: "Male",
    treatments: [3, 2, 12, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 4,
    name: "Dr. Mehreen",
    specialty: "Cosmetic Dentist",
    city: "Karachi",
    area: "DHA Phase 6",
    experience: 9,
    feeMin: 4000,
    feeMax: 8000,
    timings: "12:00 PM - 8:00 PM",
    daysAvailable: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    languages: ["Urdu", "English"],
    gender: "Female",
    treatments: [4, 7, 1, 16, 17, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 5,
    name: "Dr. Faraz",
    specialty: "Periodontist",
    city: "Rawalpindi",
    area: "Satellite Town",
    experience: 10,
    feeMin: 2500,
    feeMax: 5000,
    timings: "10:00 AM - 5:00 PM",
    daysAvailable: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
    languages: ["Urdu", "English", "Punjabi"],
    gender: "Male",
    treatments: [10, 1, 8, 13, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 6,
    name: "Dr. Hira",
    specialty: "Pediatric Dentist",
    city: "Lahore",
    area: "Model Town",
    experience: 7,
    feeMin: 2000,
    feeMax: 4000,
    timings: "9:00 AM - 4:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    languages: ["Urdu", "English", "Punjabi"],
    gender: "Female",
    treatments: [11, 1, 2, 12, 13, 14, 18, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 7,
    name: "Dr. Zubair",
    specialty: "Oral Surgeon",
    city: "Peshawar",
    area: "University Town",
    experience: 14,
    feeMin: 4000,
    feeMax: 8000,
    timings: "11:00 AM - 6:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
    languages: ["Urdu", "English", "Pashto"],
    gender: "Male",
    treatments: [9, 8, 6, 12, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  },
  {
    id: 8,
    name: "Dr. Saima",
    specialty: "Prosthodontist",
    city: "Islamabad",
    area: "G-10",
    experience: 13,
    feeMin: 4000,
    feeMax: 9000,
    timings: "10:00 AM - 6:00 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    languages: ["Urdu", "English"],
    gender: "Female",
    treatments: [7, 6, 4, 15, 16, 19],
    clinicName: "Clinic details pending verification",
    clinicAddress: "Address pending confirmation with the clinic",
    photo: "",
    isIllustrative: true
  }
];

/* ------------------------------- PROBLEMS ------------------------------- */
// The problem finder is a guide only, not a diagnosis.
// Only a dentist can confirm the cause and the right treatment.
// urgency values: "low" | "medium" | "high" | "emergency"
const problems = [
  {
    id: "toothache",
    label: "Toothache",
    keywords: ["toothache", "tooth pain", "pain in tooth", "dard", "daant ka dard", "daant dard", "dant dard", "sensitivity"],
    specialty: "General Dentist",
    possibleTreatments: [2, 3, 8, 12],
    followUp: [
      "Is the pain constant, or does it come only with hot, cold or sweet food?",
      "Do you have any swelling in your face or gums?"
    ],
    urgency: "high",
    isIllustrative: true
  },
  {
    id: "bleeding-gums",
    label: "Bleeding gums",
    keywords: ["bleeding gums", "gums bleeding", "gum problem", "masoorhay", "masoore se khoon", "masoorhon se khoon", "khoon aana", "swollen gums"],
    specialty: "Periodontist",
    possibleTreatments: [10, 1],
    followUp: [
      "Do your gums bleed every time you brush, or only sometimes?"
    ],
    urgency: "medium",
    isIllustrative: true
  },
  {
    id: "bad-breath",
    label: "Bad breath",
    keywords: ["bad breath", "mouth smell", "halitosis", "munh ki badbu", "muh ki badbu", "badbu", "saans ki badbu"],
    specialty: "General Dentist",
    possibleTreatments: [1, 10],
    followUp: [
      "Has the bad breath lasted for a long time, even after brushing?"
    ],
    urgency: "low",
    isIllustrative: true
  },
  {
    id: "yellow-teeth",
    label: "Yellow teeth",
    keywords: ["yellow teeth", "stained teeth", "teeth whitening", "peelay daant", "pilay daant", "daant peelay", "safaid daant", "dag"],
    specialty: "Cosmetic Dentist",
    possibleTreatments: [4, 1],
    followUp: [
      "Are the stains on the surface of your teeth, or do some teeth look darker than others?"
    ],
    urgency: "low",
    isIllustrative: true
  },
  {
    id: "missing-tooth",
    label: "Missing tooth",
    keywords: ["missing tooth", "tooth gap", "lost tooth", "daant nahi", "daant gir gaya", "daant toot gaya", "khali jagah", "bridge", "implant"],
    specialty: "Prosthodontist",
    possibleTreatments: [6, 7],
    followUp: [
      "How long ago did you lose the tooth?",
      "Is it a front tooth or a back tooth?"
    ],
    urgency: "medium",
    isIllustrative: true
  },
  {
    id: "crooked-teeth",
    label: "Crooked teeth",
    keywords: ["crooked teeth", "braces", "misaligned", "crowded teeth", "teda daant", "tedhe daant", "daant seedhe", "daanton ke beech gap", "gap in teeth"],
    specialty: "Orthodontist",
    possibleTreatments: [5],
    followUp: [
      "Are you mainly looking for a better smile, or do you also have trouble chewing or cleaning your teeth?"
    ],
    urgency: "low",
    isIllustrative: true
  },
  {
    id: "broken-chipped-tooth",
    label: "Broken or chipped tooth",
    keywords: ["broken tooth", "chipped tooth", "cracked tooth", "tooth fracture", "daant toota", "daant tootna", "daant mein crack", "daant ka kinara toot gaya"],
    specialty: "General Dentist",
    possibleTreatments: [2, 7, 12],
    followUp: [
      "Is the tooth painful, or does it have a sharp edge that hurts your tongue or cheek?",
      "Did it happen from an injury or while eating?"
    ],
    urgency: "high",
    isIllustrative: true
  },
  {
    id: "wisdom-tooth-pain",
    label: "Wisdom tooth pain",
    keywords: ["wisdom tooth", "wisdom teeth", "back tooth pain", "akal daad", "aqal daadh", "aqal dadh", "akal dadh", "akal dadh dard"],
    specialty: "Oral Surgeon",
    possibleTreatments: [9, 8, 12],
    followUp: [
      "Is there swelling, or difficulty opening your mouth?"
    ],
    urgency: "high",
    isIllustrative: true
  },
  {
    id: "kids-dental-problem",
    label: "Kids dental problem",
    keywords: ["child tooth", "kids dentist", "baby teeth", "bachon ke daant", "bachay ka daant", "bachay ke daant dard", "bache ko daant dard", "milk teeth"],
    specialty: "Pediatric Dentist",
    possibleTreatments: [11, 2, 12],
    followUp: [
      "How old is your child?",
      "Is your child in pain, or is this for a routine checkup?"
    ],
    urgency: "medium",
    isIllustrative: true
  },
  {
    id: "dental-emergency",
    label: "Dental emergency",
    keywords: ["emergency", "urgent dentist", "swelling", "knocked out tooth", "bleeding not stopping", "sakht dard", "soojan", "sujan", "fori dentist", "emergency dentist"],
    specialty: "General Dentist",
    possibleTreatments: [12, 8, 3],
    followUp: [
      "Do you have heavy bleeding, swelling that is spreading, or trouble breathing or swallowing? If so, seek urgent medical help now."
    ],
    urgency: "emergency",
    isIllustrative: true
  }
];
