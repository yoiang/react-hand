import React, { useEffect } from 'react'

import Signs, { Sign, FingersState } from './Signs'

import fingerImage from './Image'

import palm1 from './images/palm1.jpg'
import palm2 from './images/palm2.jpg'

import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'

const cloneDeep = require('lodash.clonedeep')

export interface HandProps {
  /**
   * Whether to show information about a recognized hand sign
   */
  showInformation?: boolean

  /**
   * Optional hand sign to start with
   */
  startSign?: Sign
}

const renderSignDescription = (description: string) => {
  const style: React.CSSProperties = {
    padding: '15px',
    paddingTop: '25px',
    color: '#424242',
    background: '#efefef',
    borderWidth: 0,
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    borderStyle: 'solid'
  }
  return <div style={style}>{description}</div>
}

const renderSignInformation = (sign: Sign) => {
  const style = {
    margin: '20px',
    background: '#ffffff',

    boxShadow: '1px 1px 1px rgba(0,0,0,0.5)',
    mozBoxShadow: '1px 1px 1px rgba(0,0,0,0.5)',
    webkitBoxShadow: '1px 1px 1px rgba(0,0,0,0.5)',

    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: '2px',
    borderStyle: 'solid'
  }

  const nameStyle = {
    padding: '15px',
    paddingBottom: '25px',
    color: 'black',
    fontWeight: 700
  }
  return (
    <div style={style}>
      <div style={nameStyle}>{sign.name}</div>
      {sign.description ? renderSignDescription(sign.description) : null}
    </div>
  )
}

const Hand: React.FC<HandProps> = ({
  showInformation = false,
  startSign = undefined
}) => {
  const signNames = Signs.getSignNames()

  const [hand, setHand] = React.useState<FingersState>(
    startSign?.fingers ||
      (cloneDeep(
        Signs.getSignWithName(
          signNames[Math.floor(Math.random() * signNames.length)]
        )?.fingers
      ) as FingersState)
  )
  const [currentSign, setCurrentSign] = React.useState<Sign | null>(null)

  useEffect(() => {
    setCurrentSign(Signs.getSignWithFingers(hand))
  }, [hand])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          flexGrow: 1,
          display: 'grid',
          gridTemplateColumns:
            '26.92307692% 6.318681319% 12.63736264% 16.20879121% 15.65934066% 22.25274725%',
          gridTemplateRows:
            '6.802721088% 42.85714286% 37.64172336% 12.6984127%',
          gridGap: '0 0'
        }}
      >
        <div
          style={{
            gridColumn: '1 / span 3',
            gridRow: '1 / span 1'
          }}
        >
          <img
            src={s1}
            style={{
              width: '100%',
              height: '100%'
            }}
            alt="Spacer"
          />
        </div>
        <div
          style={{
            gridColumn: '4 / span 1',
            gridRow: '1 / span 2'
          }}
        >
          {fingerImage(hand, 2, setHand)}
        </div>
        <div
          style={{
            gridColumn: '5 / span 1',
            gridRow: '1 / span 2'
          }}
        >
          {fingerImage(hand, 3, setHand)}
        </div>
        <div
          style={{
            gridColumn: '6 / span 1',
            gridRow: '1 / span 2'
          }}
        >
          {fingerImage(hand, 4, setHand)}
        </div>
        <div
          style={{
            gridColumn: '1 / span 1',
            gridRow: '2 / span 1'
          }}
        >
          <img src={s2} width="100%" height="100%" alt="Spacer" />
        </div>
        <div
          style={{
            gridColumn: '2 / span 2',
            gridRow: '2 / span 1'
          }}
        >
          {fingerImage(hand, 1, setHand)}
        </div>
        <div
          style={{
            gridColumn: '1 / span 2',
            gridRow: '3 / span 1'
          }}
        >
          {fingerImage(hand, 0, setHand)}
        </div>
        <div
          style={{
            gridColumn: '3 / span 4',
            gridRow: '3 / span 2'
          }}
        >
          <img src={palm2} width="100%" height="100%" alt="Palm 2" />
        </div>
        <div
          style={{
            gridColumn: '1 / span 2',
            gridRow: '4 / span 1'
          }}
        >
          <img src={palm1} width="100%" height="100%" alt="Palm 1" />
        </div>
      </div>
      {showInformation !== false && currentSign
        ? renderSignInformation(currentSign)
        : null}
    </div>
  )
}

export default Hand
