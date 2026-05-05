/* ============================================================
   CONFIGURAÇÃO — edite aqui número e mensagem do WhatsApp
   Telefone formato internacional, sem símbolos: 55 + DDD + número
   ============================================================ */
const SITE_CONFIG = {
  whatsappNumber: "5521977115614",
  whatsappMessage:
    "Olá! Quero fazer um orçamento do Canhão Stratus Fabrimar.\n\nMinha área precisa de melhor alcance e cobertura na irrigação.\n\nGostaria de receber orientação sobre o modelo ideal conforme minha área, pressão disponível e tipo de plantação.\n\nPode me ajudar?"
};

/* ============================================================
   APLICA LINKS DE WHATSAPP EM TODOS OS BOTÕES .whatsapp-link
   ============================================================ */
(function applyWhatsAppLinks() {
  const url =
    "https://wa.me/" +
    SITE_CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(SITE_CONFIG.whatsappMessage);
  document.querySelectorAll(".whatsapp-link").forEach((el) => {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
})();

/* ============================================================
   HEADER — efeito ao scrollar
   ============================================================ */
(function headerScroll() {
  const header = document.getElementById("header");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   MENU MOBILE
   ============================================================ */
(function mobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-mobile");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    })
  );
})();

/* ============================================================
   FAQ — comportamento accordion (somente um aberto)
   ============================================================ */
(function faqAccordion() {
  const items = document.querySelectorAll("#faq .faq-item");
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

/* ============================================================
   ANO ATUAL NO RODAPÉ
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
