"use client"

import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
import { useEffect, useRef, useState } from "react";
import Terrain from "./Terrain";
import Effect from "./Effect";
import { OrbitControls } from "@react-three/drei";


export default function Experience() {

    const [instance, setIntance] = useState<any>(null)
    const reference = useRef<HTMLCanvasElement>(null)

    const textureHeight = 128
    const textureWidth = 32

    useEffect(() => {
        if (reference.current == null) return
        reference.current.width = textureWidth
        reference.current.height = textureHeight
        reference.current.style.position = "fixed"
        reference.current.style.top = "0px"
        reference.current.style.left = "0px"
        reference.current.style.zIndex = "2"

        const context = reference.current.getContext("2d")
        if (context == null) return

        context.clearRect(0, 0, textureWidth, textureHeight)
        context.globalAlpha = 0.8

        context.fillStyle = "#ffffff"

        context.fillRect(0, 0, textureWidth, Math.round(textureHeight * 0.04))

        const smallerLinesCount = 5;
        context.globalAlpha = 0.5;

        context.fillStyle = "#ffffff"

        for (let i = 0; i < smallerLinesCount; i++) {
            context.fillRect(0, Math.round(textureHeight / smallerLinesCount * (i + 1)), textureWidth, Math.round(textureHeight * 0.01))
        }
        const material = new THREE.CanvasTexture(reference.current);
        material.wrapS = THREE.RepeatWrapping
        material.wrapT = THREE.RepeatWrapping

        setIntance(material)

    }, [])



    return <>

        <canvas ref={reference} className="hidden" />

        <Canvas
            camera={
                {
                    position: [0.6, 0.66, 0.0]
                }
            }

        >


            {instance != null ? <Terrain instance={instance} />
                : <></>}

            <Effect />

            <OrbitControls />

        </Canvas>

    </>
}