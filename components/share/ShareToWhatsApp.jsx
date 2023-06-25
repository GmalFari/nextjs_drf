import { getWhatsAppUrl } from "@phntms/react-share";

const ShareToWhatsApp = () => (
  <a href={getWhatsAppUrl({ url: "https://phantom.land/" })}>
    Share to WhatsApp
  </a>
);

export default ShareToWhatsApp;