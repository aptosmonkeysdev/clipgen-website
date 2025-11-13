import GreyGradientText from "./GreyGradientText";

export default function Title({ orangeTitle, whiteGradient, greyGradient }) {
  return (
    <>
      <div className="text-md font-semibold text-orange">{orangeTitle}</div>

      <h2 className="text-5xl leading-tight font-bold bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent">
        {whiteGradient}
      </h2>
      <GreyGradientText greyGradient={greyGradient} />
    </>
  );
}
