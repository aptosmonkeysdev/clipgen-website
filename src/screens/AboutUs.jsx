import React from "react";
import fadedText from "../assets/about/fadedText.svg";
import people from "../assets/about/people.png";
import light from "../assets/Light.png";
import Title from "../components/Title";

export default function AboutPage() {
  return (
    <div className="text-white py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <Title
            orangeTitle={"About Us"}
            whiteGradient={"Create practical solutions that"}
            greyGradient={"help users solve problems"}
          />

          <div className="py-4">
            <img src={fadedText} className="mx-auto mt-4" />
            <img src={light} className="mx-auto mt-4  opacity-20" />
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-[70vw] flex flex-col md:flex-row items-center gap-8">
            {/* Left Column */}
            <div className="md:w-1/2 space-y-2 text-left">
              <img src={people} style={{width:'80%'}} />
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 space-y-6 text-left">
              <div className="text-2xl text-grey leading-8">
                ClipGen solves this problem by offering an automated service
                that analyses podcasts to find and edit engaging clips that are
                most likely to perform well on social media to maximize your
                podcast's reach.
              </div>
              <div className="text-2xl text-grey leading-8">
                We deliver clips back to you in a format that is ready to share
                on social media, including adding subtitles and cropping for all
                of your social platforms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
