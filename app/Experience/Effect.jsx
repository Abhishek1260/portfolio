import { Vignette, DepthOfField, EffectComposer } from '@react-three/postprocessing'
export default function Effect() {

    return <>

        <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
            <Vignette eskil={false} offset={0.2} darkness={1.1} />
        </EffectComposer>


    </>
}