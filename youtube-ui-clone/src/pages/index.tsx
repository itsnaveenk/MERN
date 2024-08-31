import Image from "next/image";
import { Inter } from "next/font/google";
import VideoGrid from "@/components/VideoGrid";
import { VideoCard } from "@/components/VideoCard";
import AppBar from "@/components/AppBar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>

      <AppBar />
      <div className="flex">
        <Sidebar />
        <VideoGrid />
      </div>

    </main>
  );
}
