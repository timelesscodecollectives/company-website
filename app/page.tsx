"use client";

import TopNavigation from "@/components/shared/top-navigation";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="bg-landing-page bg-cover">
      <TopNavigation />

      <main className="h-screen flex justify-center flex-col px-20 gap-10">
        <h1 className="text-7xl font-bold w-[50rem] text-wrap ">
          Crafting Timeless Digital Solutions with Precision and Trust.
        </h1>
        <button className="w-[14rem] relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex gap-3 h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Request a Quote <ArrowRight />
          </span>
        </button>
      </main>
    </div>
  );
}
