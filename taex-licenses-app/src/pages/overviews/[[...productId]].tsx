import { Footer } from "@/components/Footer/Footer";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import { NFTDetailsOverview } from "@/features/NFTDetailsOverview";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <NFTDetailsOverview value={JSON.stringify(router.query)} />
    </div>
  );
}
