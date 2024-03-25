'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideoProps {
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>
      <div>
        <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <video ref={videoRef} width={videoWidth} height={videoHeight} autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}