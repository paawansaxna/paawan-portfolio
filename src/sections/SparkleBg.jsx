import { SparklesCore } from "../components/SparklesCore"

const SparkleBg = () => {
  return (
    <SparklesCore
        background="transparent"
        particleColor="#ffffff"
        particleDensity={100}
        
        style={{ pointerEvents: "none" }}
    />
  )
}

export default SparkleBg