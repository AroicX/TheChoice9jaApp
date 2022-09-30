import { useRouter } from "next/router";
import { ArrowLeftIcon  } from "@heroicons/react/24/outline";

export default function BackButton({title}) {
  const router = useRouter();
  return (
    <div className="space-x-6 flex items-center">
      <ArrowLeftIcon onClick={() => router.back()} className="w-8 cursor-pointer" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  )
}