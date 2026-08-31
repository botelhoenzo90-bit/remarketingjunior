import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/558894231328?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20Mestre%20da%20Manuten%C3%A7%C3%A3o%21"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 hover:scale-110 transition-transform drop-shadow-lg"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="h-full w-full" />
  </a>
);

export default WhatsAppButton;
