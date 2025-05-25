import trust from "../assets/home/trust.svg";
import dashboard from "../assets/home/dashboard.svg";
import fadedText from "../assets/home/fadedText.svg";
import upload from "../assets/home/upload.svg";
import play from "../assets/home/play.svg";
import render from "../assets/home/render.svg";
import share from "../assets/home/share.svg";
import creating from "../assets/home/creating.png";

import transcript from "../assets/home/transcript.svg";
import face from "../assets/home/face.svg";
import light from "../assets/Light.png";
import Title from "../components/Title";
import GreyGradientText from "../components/GreyGradientText";
import { Button } from "@mui/material";

export default function HomePage() {
  const features = [
    {
      id: 1,
      title: "Submit Your Podcast",
      desc: "Upload video/audio or YouTube URL, and customisations.",
      img: upload,
    },
    {
      id: 2,
      title: "Analyse For Best Clips",
      desc: "Our custom algorithm searches for the best clips.",
      img: play,
    },
    {
      id: 3,
      title: "Render Your Clips",
      desc: "Clips are rendered with subtitles, ready for your socials.",
      img: share,
    },
    {
      id: 4,
      title: "View, Download, and Share",
      desc: "View your clips, pick your favourites, download, and share!",
      img: render,
    },
  ];
  const descriptions = [
    {
      id: 0,
      title: "Analysing your Podcast",
      desc: "ClipGen's algorithm analyses your podcast, scoring thousands of potential clips across a wide range of metrics, returning the top performers back to you in under 20 minutes.",
      img: creating,
    },
    {
      id: 1,
      title: "Perfect your Clips",
      desc: "Fine tune each clip's start & end point by selecting which words you want to include. Highlight keywords for subtitling, and correct any typos (note: we don't make many!).",
      img: transcript,
    },
    {
      id: 2,
      title: "Exporting your Clips",
      desc: "ClipGen takes your customisations and applies them to your clips. Whether you're looking for portrait videos for Instagram/TikTok or square videos for LinkedIn, ClipGen's speaker detection technology automatically reframes your content for your desired output.",
      img: face,
    },
  ];

  return (
    <div className="text-white py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <Title
            orangeTitle={"Podcast Clips, Supercharged."}
            whiteGradient={"Convert your podcast"}
            greyGradient={"into engaging video clips."}
          />

          <div className="text-sm text-grey leading-7 max-w-xl mx-auto">
            ClipGen automatically repurposes your podcast into short-form clips
            in one click,
            <br />
            designed to expand your reach across all social platforms.
          </div>

          <div className="py-4">
            <img src={trust} className="mx-auto" />
            <img src={fadedText} className="mx-auto mt-4" />
            <div className="w-full max-w-[85vw] mx-auto">
              <img src={dashboard} className="w-full mb-8" />
            </div>
            <img src={light} className="mx-auto mt-4  opacity-20" />
          </div>
        </div>

        {/* Features Explanation Section */}
        <div id="features-section" className="flex flex-col items-center justify-center pt-12">
          <div className="w-full max-w-[80vw] flex flex-col md:flex-row items-start gap-8">
            {/* Left Column */}
            <div className="md:w-1/4 space-y-2 text-left">
              <div className="text-sm text-grey">Let's experience</div>
              <GreyGradientText greyGradient={"Our Features"} />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Right Column */}
            <div className="md:w-3/4 space-y-6 text-left">
              <div className="text-md text-grey leading-7">
                ClipGen solves this problem by offering an automated service
                that analyses podcasts to find and edit engaging clips that are
                most likely to perform well on social media to maximize your
                podcast's reach.
              </div>
              <div className="text-md text-grey leading-7">
                We deliver clips back to you in a format that is ready to share
                on social media, including adding subtitles and cropping for all
                of your social platforms.
              </div>
            </div>
          </div>
        </div>

        {/*features array*/}
        <div id="solutions-section" className="pt-16">
          <div className="w-full max-w-[85vw] mx-auto">
            <div className="overflow-x-auto ">
              <div className="flex gap-6 w-max">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="w-64 min-w-[16rem] bg-[#111] text-white rounded-md overflow-hidden"
                  >
                    {/* Gradient border around image area */}
                    <div className="bg-[linear-gradient(to_right,transparent,#facc15,#f97316,#facc15,transparent),linear-gradient(to_bottom,transparent,#facc15,#f97316,#facc15,transparent)] rounded-t-md p-[0.5px] pb-0">
                      <div className="bg-[#111] rounded-t-md">
                        <div className=" h-32 flex items-center justify-center">
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-64 h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom content (no border) */}
                    <div className="px-4 py-5 text-left pb-[80px]">
                      <h3 className="font-semibold text-white text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-6">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* description array */}

        <div className="relative w-full overflow-hidden pt-12">
          {/* Background image with lower opacity, full width */}
          <div
            className="absolute  w-full h-full bg-cover bg-center bg-no-repeat  z-0"
            style={{ backgroundImage: "url('/shadow.svg')", opacity: 0.5 }}
          />

          {/* Foreground content */}
          <div className="relative z-10 w-full max-w-[85vw] mx-auto flex flex-col gap-20 py-16">
            {descriptions.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    !isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Text block */}
                  <div className="w-full md:w-1/2 text-white space-y-4">
                    <GreyGradientText greyGradient={item.title} />
                    <div className="text-sm text-grey leading-7 md:w-3/4">
                      {item.desc}
                    </div>
                  </div>

                  {/* Image block */}
                  <div
                    className={`w-full md:w-1/2 flex justify-center md:justify-start`}
                  >
                    <img
                      src={item.img}
                      alt={`Feature ${index}`}
                      className="md:w-3/4 rounded-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
