const REPO_BASE = process.env.NEXT_PUBLIC_GH_REPO
  ? `/${process.env.NEXT_PUBLIC_GH_REPO}`
  : "";

export const content = {
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  imageAlt: "QR code to visit Frontend Mentor website",
  imageSrc: `${REPO_BASE}/assets/image-qr-code.png`,
};
