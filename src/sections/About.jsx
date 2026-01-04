import Card from "../components/Card"
import { useRef } from "react";
import Globe from "../components/Globe"
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();  
  return (
    <section id="about" className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" alt="code" className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>
                <div className="z-10">
                    <p className="headtext">Hi It's Paawan</p>
                    <p className="subtext">Over the last 4 years, I developed my UI UX and frontend development skills to deliver dynamic and software and web applications.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container}className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        Yeah You can Craft!
                    </p>
                    <Card style={{ rotate: "0deg", top:"30%", left:"20%"}} text="Design Solutions" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"60%", left:"45%"}} text="UI" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"30%", left:"70%"}} text="UX" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"55%", left:"0%"}} text="Glassmorphism " containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"10%", left:"38%"}} text="Seamless" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"30%", left:"70%"}} image="assets/logos/react.svg" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"70%", left:"25%"}} image="assets/logos/html5.svg" containerRef={grid2Container}/>
                    <Card style={{ rotate: "0deg", top:"5%", left:"10%"}} image="assets/logos/javascript.svg" containerRef={grid2Container}/>
                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext"> Timezone </p>
                    <p className="subtext">
                        I am based in Mars, and open to remote work Worldwide
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/* Grid 4 */}
                <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        </div>
    </section>
  )
}

export default About