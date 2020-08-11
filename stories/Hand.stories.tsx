import React from 'react'
import { Hand, Props } from '../src'
import Signs from '../src/Signs'

export default {
  title: 'Hand'
}

const SignOptions = {
  undefined: undefined
}
Signs.getSignNames().forEach((signName) => {
  SignOptions[signName] = Signs.getSignWithName(signName)
})

const props: Props = {
  showInformation: false,
  startSign: undefined
}

export const Default = (args: Props) => <Hand
  showInformation={args.showInformation}
  startSign={args.startSign}
/>

Default.args = props
Default.argTypes = {
  showInformation: {
    description: 'Whether to show information about a recognized hand sign',
    type: {
      summary: 'boolean'
    },
    defaultValue: {
      summary: false
    }
  },
  startSign: {
    description: 'Optional hand sign to start with',
    type: {
      summary: 'Sign'
    },
    defaultValue: {
      summary: undefined
    },
    control: {
      type: 'select',
      options: SignOptions
    }
  }
}
