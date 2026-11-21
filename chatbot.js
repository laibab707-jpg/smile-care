(function () {
  function initializePatientChat() {
    if (document.getElementById("patient-chat-panel")) return;

    const launcher = document.createElement("button");
    launcher.className = "patient-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Open SmileCare patient assistant");
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-controls", "patient-chat-panel");
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"/>' +
        '<path d="M8 11h.01M12 11h.01M16 11h.01"/>' +
      '</svg><span>Ask SmileCare</span>';

    const panel = document.createElement("section");
    panel.className = "patient-chat-panel";
    panel.id = "patient-chat-panel";
    panel.setAttribute("aria-label", "SmileCare patient assistant");
    panel.hidden = true;
    panel.innerHTML =
      '<div class="patient-chat-header">' +
        '<div class="patient-chat-title">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M12 5.2C10.6 3.9 8.5 3.3 6.7 4.1 4.3 5.2 4.1 8 5 10.4c.7 1.9.9 3.4 1.2 5.4.3 2.2.8 4.6 2.1 4.6 1.5 0 1.3-3.6 3.7-3.6s2.2 3.6 3.7 3.6c1.3 0 1.8-2.4 2.1-4.6.3-2 .5-3.5 1.2-5.4.9-2.4.7-5.2-1.7-6.3-1.8-.8-3.9-.2-5.3 1.1z"/>' +
          '</svg>' +
          '<div><strong>SmileCare Assistant</strong><span>Here to help with general questions</span></div>' +
        '</div>' +
        '<button class="patient-chat-close" type="button" aria-label="Close assistant">&times;</button>' +
      '</div>' +
      '<p class="patient-chat-disclaimer">General information only—not a diagnosis or a substitute for a dentist. Messages are not sent or stored. Please don’t share personal or medical details.</p>' +
      '<div class="patient-chat-messages" role="log" aria-live="polite" aria-relevant="additions text"></div>' +
      '<form class="patient-chat-form">' +
        '<input class="patient-chat-input" type="text" maxlength="500" placeholder="Ask about care or appointments…" aria-label="Your question" autocomplete="off" required>' +
        '<button class="patient-chat-send" type="submit" aria-label="Send message">➤</button>' +
      '</form>';

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const closeButton = panel.querySelector(".patient-chat-close");
    const form = panel.querySelector(".patient-chat-form");
    const input = panel.querySelector(".patient-chat-input");
    const messages = panel.querySelector(".patient-chat-messages");

    function addMessage(text, sender, linkText, linkHref) {
      const message = document.createElement("div");
      message.className = "patient-chat-message patient-chat-message--" + sender;
      message.textContent = text;

      if (linkText && linkHref) {
        const link = document.createElement("a");
        link.href = linkHref;
        link.textContent = linkText;
        message.appendChild(document.createElement("br"));
        message.appendChild(link);
      }

      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

    function getReply(message) {
      const text = message.toLowerCase();
      const hasAny = function (terms) {
        return terms.some(function (term) { return text.includes(term); });
      };

      if (hasAny(["can't breathe", "cannot breathe", "trouble breathing", "difficulty breathing", "can't swallow", "cannot swallow", "trouble swallowing", "difficulty swallowing", "uncontrolled bleeding", "heavy bleeding", "rapid swelling", "rapidly increasing swelling"])) {
        return {
          text: "If you’re having trouble breathing or swallowing, heavy bleeding, or rapidly increasing swelling, seek emergency medical help now. I can’t assess symptoms here.",
          linkText: "View emergency guidance",
          linkHref: "contact.html#emergency"
        };
      }
      if (hasAny(["appointment", "book", "booking", "consultation", "schedule"])) {
        return {
          text: "Use the consultation form to prepare a summary of your preferences. It is not sent to a clinic, and no appointment is confirmed.",
          linkText: "Open the appointment form",
          linkHref: "book.html"
        };
      }
      if (hasAny(["dentist", "doctor", "specialist", "profile"])) {
        return {
          text: "Browse dentist profiles by specialty and city. Confirm availability and credentials directly with a licensed clinic.",
          linkText: "Browse dentists",
          linkHref: "doctors.html"
        };
      }
      if (hasAny(["service", "treatment", "cleaning", "whitening", "braces", "implant", "root canal"])) {
        return {
          text: "Our services page explains common dental treatments in general terms. A dentist can advise what is suitable for you.",
          linkText: "Explore services",
          linkHref: "services.html"
        };
      }
      if (hasAny(["location", "address", "where", "hours", "open", "phone", "contact", "call"])) {
        return {
          text: "Clinic phone, email, and location details have not been verified. Confirm them directly with a licensed clinic.",
          linkText: "Contact and locations",
          linkHref: "contact.html"
        };
      }
      if (hasAny(["cost", "price", "fee", "insurance", "payment"])) {
        return {
          text: "Prices and profile fees shown on this site are illustrative and unverified. Contact a licensed clinic for current fees and payment or insurance information.",
          linkText: "View contact information",
          linkHref: "contact.html"
        };
      }
      if (hasAny(["toothache", "tooth pain", "pain", "swelling", "injury", "knocked out", "broken tooth"])) {
        return {
          text: "Tooth pain or injury can have different causes, and I can’t diagnose it. Please contact a dentist for advice; seek urgent care for severe pain, facial swelling, or an injury.",
          linkText: "View emergency guidance",
          linkHref: "contact.html#emergency"
        };
      }
      if (hasAny(["brush", "floss", "care", "healthy", "toothpaste"])) {
        return {
          text: "General prevention: brush twice daily with fluoride toothpaste and clean between your teeth daily. Your dentist can tailor advice to your needs.",
          linkText: "Read about dental services",
          linkHref: "services.html"
        };
      }
      if (/\b(?:hello|hi|hey)\b/.test(text) || text.includes("help")) {
        return {
          text: "Hi! I can help you find appointment information, dentist profiles, services, contact details, and general oral-care tips. What would you like to know?"
        };
      }
      return {
        text: "I can help with appointments, dentist profiles, services, locations, and general oral-care information. I can’t diagnose or provide personalized medical advice. What can I help you find?"
      };
    }

    addMessage("Hello! I can help you find general dental-care information and navigate the SmileCare website. What would you like help with?", "assistant");

    launcher.addEventListener("click", function () {
      panel.hidden = false;
      launcher.setAttribute("aria-expanded", "true");
      input.focus();
    });

    function closePanel() {
      panel.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      launcher.focus();
    }

    closeButton.addEventListener("click", closePanel);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !panel.hidden) closePanel();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;

      addMessage(question, "user");
      input.value = "";
      const reply = getReply(question);
      addMessage(reply.text, "assistant", reply.linkText, reply.linkHref);
      input.focus();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePatientChat);
  } else {
    initializePatientChat();
  }
}());
