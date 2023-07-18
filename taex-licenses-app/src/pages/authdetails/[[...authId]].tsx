import { Collectons } from "@/features/Collections";
import { useRouter } from "next/router";


export default function AuthDtails() {
    const router = useRouter()
    return (
        <div>
            <Collectons authDetail value={JSON.stringify(router.query)} />
        </div>
    );
}
