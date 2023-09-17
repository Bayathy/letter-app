import QRCodeStyling from "qr-code-styling";

interface Props {
  size?: number;
  image?: string;
  c?: string;
  url: string;
  margin?: number;
}

export const generateQrCode = ({
  size = 300,
  image = "/vercel-icon.svg",
  c = "#C40CFF",
  url,
  margin = 8,
}: Props) => {
  const qrCode = new QRCodeStyling({
    width: size,
    height: size,
    image: image,
    type: "canvas",
    data: url,
    qrOptions: {
      errorCorrectionLevel: "H",
    },
    dotsOptions: {
      color: c,
      type: "rounded",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: margin,
    },
  });

  return qrCode;
};
