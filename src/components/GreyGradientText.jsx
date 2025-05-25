export default function GreyGradientText({greyGradient}) {
  return (
    <h2 className="text-3xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
      {greyGradient}
    </h2>
  );
}
