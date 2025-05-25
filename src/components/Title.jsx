import GreyGradientText from "./GreyGradientText";

export default function Title({ orangeTitle, whiteGradient, greyGradient }) {
  return (
    <>
      <div className="text-sm font-semibold text-orange">{orangeTitle}</div>

      <h2 className="text-3xl font-bold bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent">
        {whiteGradient}
      </h2>
      <GreyGradientText greyGradient={greyGradient} />
    </>
  );
}
