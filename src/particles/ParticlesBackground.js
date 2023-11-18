
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particlesOptions";

const ParticlesBackground = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async (container) => {
        await container;
    }, []);


  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        > </Particles>
  )
}

export default ParticlesBackground;