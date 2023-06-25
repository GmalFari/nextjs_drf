import { copyToClipboard } from "@phntms/react-share";

const Copy = () => (
  <div onClick={() => copyToClipboard("https://nextjs-drf.vercel.app/")}>Copy</div>
);

export default Copy;