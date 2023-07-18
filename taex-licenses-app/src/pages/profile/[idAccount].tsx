import Profile from "@/features/profile";
import { useRouter } from "next/router";

export default function ProfilePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="bg-black-100 flex justify-center">
      <Profile value={JSON.stringify(router.query)} />
    </div>
  );
}
