import { MaskContainer } from "../components/MaskContainer";

const MaskRevealSection = () => {
  return (
    <section className="relative">
      <MaskContainer
        revealText={
          <h1 className="text-4xl md:text-6xl font-bold text-[#613bcf]/40 tracking-tighter">
            I Design in Motion
          </h1>
        }
        size={20}
        revealSize={400} // Reduced reveal size to match smaller height
        className="bg-black"
      >
        <div className="text-black space-y-1 leading-[1.1] tracking-tight">
          <p className="text-3xl md:text-5xl font-bold">Static websites bore me.</p>
          <p className="text-3xl md:text-5xl font-bold">I build experiences that</p>
          <p className="text-3xl md:text-5xl font-bold">
            Move, <span className="text-red-600">React</span>, and Engage.
          </p>
        </div>
      </MaskContainer>
    </section>
  );
};

export default MaskRevealSection;