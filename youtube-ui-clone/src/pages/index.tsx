import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      asd
      <VideoCard 
        image={"thumb.jpg"}
        title={"Howt to Learn coding in 30 days"}
        avatar={"icon.jpg"}
        author={"John Doe"}
        views={"100k"}
        timestamp={"2 days ago"}
      ></VideoCard>
      asd
    </div>
  );
}
