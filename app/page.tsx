import { cn } from "@/app/helpers/utils";
import Navbar from "@/components/navbar";
import WordFade from "@/components/wordFade";
import { Black_Han_Sans } from "next/font/google";
import Motion from "@/components/motion";
import Motion2 from "@/components/motion2";
import Motion3 from "@/components/motion3";
import Motion4 from "@/components/motion4";
import Images from "@/components/images";
import Boxes from "@/components/boxes";

const black_hans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="w-full bg-[#254f1a]">
        <div className="flex justify-center sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="flex justify-center">
          <div className="flex w-full max-w-[1526px] my-28">
            <div className="w-full px-8">
              <h2
                className={cn(
                  black_hans.className,
                  "text-7xl text-[#D2E823] leading-none bold"
                )}
              >
                Everything you are. In one, simple link in bio.
              </h2>
              <p className="text-[#D2E823]">
                Join 35M+ people using Linktree for their link in bio. One link
                to help you share everything you create, curate and sell from
                your Instagram, TikTok, Twitter, YouTube and other social media
                profiles.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Linktr.ee/yourname"
                  className="mt-8 p-4 rounded-md"
                />
                <button className="ml-2 bg-[#E9C0E9] p-4 rounded-full">
                  Claim your linktree
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center my-auto w-full">
              <Motion />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-[#E9C0E9] py-30">
          <section className="flex w-full max-w-[1526px] py-28">
            <div className="flex justify-center w-full px-8">
              <div className="hidden lg:flex justify-center my-auto w-full">
                <Motion2 />
              </div>
              <div className="flex flex-col justify-center my-auto w-full">
                <h2
                  className={cn(
                    black_hans.className,
                    "text-6xl text-[#502274] leading-none bold"
                  )}
                >
                  Create and customize your Linktree in minutes
                </h2>
                <p className="text-[#502274] pt-4 pb-8">
                  Connect your TikTok, Instagram, Twitter, website, store,
                  videos, music, podcast, events and more. It all comes together
                  in a link in bio landing page designed to convert.
                </p>
                <button className="bg-[#502274] w-[200px] p-4 rounded-full text-white">
                  Get started for free
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full flex justify-center bg-[#780016] py-30">
          <section className="flex w-full max-w-[1526px] py-28">
            <div className="flex justify-center w-full px-8">
              <div className="flex flex-col justify-center my-auto w-full">
                <h2
                  className={cn(
                    black_hans.className,
                    "text-6xl text-[#E9C0E9] leading-none bold"
                  )}
                >
                  Share your Linktree from your Instagram, TikTok, Twitter and
                  other bios
                </h2>
                <p className="text-[#E9C0E9] pt-4 pb-8">
                  Connect your TikTok, Instagram, Twitter, website, store,
                  videos, music, podcast, events and more. It all comes together
                  in a link in bio landing page designed to convert.
                </p>
                <button className="bg-[#E9C0E9] w-[200px] p-4 rounded-full text-[#502274]">
                  Get started for free
                </button>
              </div>
              <div className="hidden lg:flex justify-center my-auto w-full">
                <Motion3 />
              </div>
            </div>
          </section>
        </div>

        <div className="w-full flex flex-col justify-center bg-white py-30">
          <section className="flex w-full max-w-[1526px] py-28">
            <div className="flex justify-center w-full px-8">
              <div className="hidden lg:flex justify-center my-auto w-full">
                <Motion4 />
              </div>
              <div className="flex flex-col justify-center my-auto w-full">
                <h2
                  className={cn(
                    black_hans.className,
                    "text-6xl text-black leading-none bold"
                  )}
                >
                  Analyze your audience and keep your followers engaged
                </h2>
                <p className="text-black pt-4 pb-8">
                  Connect your TikTok, Instagram, Twitter, website, store,
                  videos, music, podcast, events and more. It all comes together
                  in a link in bio landing page designed to convert.
                </p>
                <button className="bg-[#E9C0E9] w-[200px] p-4 rounded-full text-black">
                  Get started for free
                </button>
              </div>
            </div>
          </section>
          <div className="flex self-center w-full max-w-[1526px] py-28">
            <div className="flex flex-col mx-auto">
              <h2
                className={cn(
                  black_hans.className,
                  "text-5xl text-black leading-none bold w-full text-center mb-4"
                )}
              >
                The only link in bio trusted by 35M+
              </h2>
              <WordFade
                words={[
                  "athletes",
                  "creators",
                  "merch sellers",
                  "writers",
                  "fitness coaches",
                  "DJs",
                  "sellers",
                ]}
              />
            </div>
          </div>

          <div className="flex self-center w-full py-28">
            <Images />
          </div>

          <div className="flex w-full max-w-[1526px] py-28 self-center">
            <Boxes />
          </div>
        </div>
      </div>
    </main>
  );
}
