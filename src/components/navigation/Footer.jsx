import { Button } from "@mui/material";
import Title from "../Title";
import twitter from "../../assets/icons/twitter.svg";
import discord from "../../assets/icons/discord.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import linkedin from "../../assets/icons/linkedin.svg";
export default function Footer() {
  return (
    <footer className="text-white">
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-20 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/Banner.svg')",
        }}
      >
        <p className="text-sm text-orange-400 font-medium mb-2">
          Change the way you podcast
        </p>
        <Title
          whiteGradient={"Create, edit, and share podcast clips"}
          greyGradient={"instantly for FREE"}
        />

        <div className="text-sm text-grey mt-5">No credit card required.</div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "orange",
            color: "black",
            textTransform: "none",
            marginTop: 20,
          }}
        >
          Get Started
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center text-center py-10 space-y-6">
        <p className="text-sm text-grey">Privacy & Terms</p>

        <div className="flex gap-6 text-xl">
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={discord} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={tiktok} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Copyright @ClipGen 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}
