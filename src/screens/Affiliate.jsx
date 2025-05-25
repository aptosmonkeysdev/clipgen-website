import share from "../assets/affiliate/share.svg";
import phone from "../assets/affiliate/phone.svg";
import pc from "../assets/affiliate/pc.svg";
import graph from "../assets/affiliate/graph.svg";
import light from "../assets/Light.png";
import Title from "../components/Title";
import { Button } from "@mui/material";

export default function AffiliatePage() {
  const affiliate = [
    {
      id: 1,
      title: "Register As Affiliate",
      desc: "Fill out your details with Rewardful and get your unique link.",
      img: pc,
    },
    {
      id: 2,
      title: "Share Your Link",
      desc: "Spread the word about ClipGen by sharing your unique affiliate link with podcasters, content creators, and avid listeners.",
      img: share,
    },
    {
      id: 3,
      title: "Earn Commission",
      desc: `You receive 30% of the first 6 months of a user's subscription. If the first payment is made within the first 30 days of clicking on your link, then the referral customer is yours!`,
      img: phone,
    },
    {
      id: 4,
      title: "Monitor Traffic & Payouts",
      desc: `Check your personalised dashboard to see how many clicks you're getting, and track your payouts.`,
      img: graph,
    },
  ];
  return (
    <div className="text-white py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <Title
            orangeTitle={"Affiliate Program"}
            whiteGradient={"Get paid to spread the word"}
            greyGradient={"about ClipGen!"}
          />

          <div className="py-4">
            <img src={light} className="mx-auto mt-4  opacity-20" />
          </div>

  
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto ">
            {affiliate.map((item) => (
              <div
                key={item.id}
                className="bg-[#111] text-white rounded-xl px-6 py-8 text-center shadow-md"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex items-center justify-center ">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
                  <Button
            variant="contained"
            style={{
              backgroundColor: "orange",
              color: "black",
              textTransform: "none",
              marginTop: 20,
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
