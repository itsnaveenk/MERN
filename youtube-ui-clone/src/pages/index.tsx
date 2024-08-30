import Image from "next/image";
import { Inter } from "next/font/google";
import VideoGrid from "@/components/VideoGrid";
import { VideoCard } from "@/components/VideoCard";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
      <AppBar></AppBar>
      <VideoGrid/>
      
    </div>
  );
}
