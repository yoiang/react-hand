import React from 'react'

import cloneDeep from 'lodash.clonedeep'

import { FingersState } from './Signs'

import zero_0 from './images/0_0.jpg'
import zero_1 from './images/0_1.jpg'
import zero_2 from './images/0_2.jpg'
import zero_3 from './images/0_3.jpg'
import zero_4 from './images/0_4.jpg'

import one_0 from './images/1_0.jpg'
import one_1 from './images/1_1.jpg'
import one_2 from './images/1_2.jpg'
import one_3 from './images/1_3.jpg'
import one_4 from './images/1_4.jpg'

import two_1 from './images/2_1.jpg'
import two_2 from './images/2_2.jpg'
import two_3 from './images/2_3.jpg'
import two_4 from './images/2_4.jpg'

import three_1 from './images/3_1.jpg'
import three_2 from './images/3_2.jpg'
import three_3 from './images/3_3.jpg'
import three_4 from './images/3_4.jpg'

const swap = (switchimage: string, imagename: any): boolean => {
  let imageElement: HTMLImageElement | undefined = undefined
  for (let index = 0; index < document.images.length; index++) {
    const test = document.images.item(index)
    if (!test) {
      continue
    }
    if (test.alt === switchimage) {
      imageElement = test
    }
  }
  if (!imageElement) {
    throw new Error(`Unable to find image element with name ${switchimage}`)
  }
  if (imagename) {
    imageElement.src = imagename
  } else {
    imageElement.src = ''
  }
  return true
}

type Images = Array<Array<any>>

const images: Images = [
  [zero_0, zero_1, zero_2, zero_3, zero_4],
  [one_0, one_1, one_2, one_3, one_4],
  [null, two_1, two_2, two_3, two_4],
  [null, three_1, three_2, three_3, three_4]
]

export default (
  hand: FingersState,
  fingerIndex: number,
  setHand: (newHand: FingersState) => void
) => {
  const finger = hand[fingerIndex]
  const { regular, alternative } = finger

  const imageName = `Img${regular}${fingerIndex}`
  const image = images[regular][fingerIndex]
  const altImage = images[alternative][fingerIndex]
  // const altImage = `images/hand/${alternative}_${fingerIndex}.jpg`

  const onMouseEnter = () => {
    swap(`Finger-${imageName}`, altImage)
  }

  const onMouseLeave = () => {
    swap(`Finger-${imageName}`, image)
  }

  const onClick = () => {
    const newHand = cloneDeep(hand)
    newHand[fingerIndex].regular = alternative
    newHand[fingerIndex].alternative = regular

    setHand(newHand)
  }

  return (
    <img
      style={{
        width: '100%',
        height: '100%'
      }}
      src={image}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      alt={`Finger-${imageName}`}
    />
  )
}
