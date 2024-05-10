import { Odibee_Sans } from "next/font/google";
const odibe = Odibee_Sans({
  weight: "400",
  subsets: ["latin"],
});
export const Logo = ({ className }: { className?: string }) => {
  return <div className={`${odibe.className} ${className}`}>NOIZIZO</div>;
};
