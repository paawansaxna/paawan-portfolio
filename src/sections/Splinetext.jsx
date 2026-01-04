import Spline from "@splinetool/react-spline";

const Splinetext = () => {
  return (
    <div className="relative min-h-screen overflow-hidden c-space">
      <div className="relative w-[700px] -ml-32 scale-[1.5] origin-top-left">
        <Spline scene="https://prod.spline.design/OIs0j8QJkIwHMAyR/scene.splinecode" />
      </div>
    </div>
  );
};

export default Splinetext;