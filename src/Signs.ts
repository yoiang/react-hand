export interface FingerState {
  regular: number
  alternative: number
}

// TODO: why not an array of Finger States?
export interface FingersState {
  0: FingerState
  1: FingerState
  2: FingerState
  3: FingerState
  4: FingerState

  [char: string]: FingerState
}

export const compareFingers = (left: FingersState, right: FingersState) => {
  return Object.keys(left).reduce((accumulated, currentFingerKey): boolean => {
    if (accumulated === false) {
      return false
    }

    const testFinger = left[currentFingerKey]
    const newFinger = right[currentFingerKey]

    return (
      testFinger.regular === newFinger.regular &&
      testFinger.alternative === newFinger.alternative
    )
  }, true)
}

export interface Sign {
  name: string
  description?: string

  fingers: FingersState
}

export const signs: Array<Sign> = [
  {
    name: 'Hand Wave',
    description: 'Used to greet others',
    fingers: {
      '0': {
        regular: 1,
        alternative: 0
      },
      '1': {
        regular: 1,
        alternative: 3
      },
      '2': {
        regular: 1,
        alternative: 3
      },
      '3': {
        regular: 1,
        alternative: 3
      },
      '4': {
        regular: 1,
        alternative: 3
      }
    }
  },
  {
    name: 'The Finger',
    description: 'Translates directly to "Fuck you"',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 3,
        alternative: 1
      },
      '2': {
        regular: 1,
        alternative: 3
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 3,
        alternative: 1
      }
    }
  },
  {
    name: 'Peace Sign',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 1,
        alternative: 3
      },
      '2': {
        regular: 1,
        alternative: 3
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 3,
        alternative: 1
      }
    }
  },
  {
    name: 'The Shaka Sign',
    description: 'Sometimes also used to tell your friend to hand loose',
    fingers: {
      '0': {
        regular: 1,
        alternative: 0
      },
      '1': {
        regular: 3,
        alternative: 1
      },
      '2': {
        regular: 3,
        alternative: 1
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 1,
        alternative: 3
      }
    }
  },
  {
    name: 'Rock or The Horns',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 1,
        alternative: 3
      },
      '2': {
        regular: 3,
        alternative: 1
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 1,
        alternative: 3
      }
    }
  },
  {
    name: 'Number 1',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 1,
        alternative: 3
      },
      '2': {
        regular: 3,
        alternative: 1
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 3,
        alternative: 1
      }
    }
  },
  {
    name: '"The Finger" Fake Out',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 3,
        alternative: 1
      },
      '2': {
        regular: 3,
        alternative: 1
      },
      '3': {
        regular: 1,
        alternative: 3
      },
      '4': {
        regular: 3,
        alternative: 1
      }
    }
  },
  {
    name: 'My Fist, Your Face',
    fingers: {
      '0': {
        regular: 0,
        alternative: 1
      },
      '1': {
        regular: 3,
        alternative: 1
      },
      '2': {
        regular: 3,
        alternative: 1
      },
      '3': {
        regular: 3,
        alternative: 1
      },
      '4': {
        regular: 3,
        alternative: 1
      }
    }
  }
]

// TODO: class doesn't make sense for static data
export class Signs {
  private signsByName: { [name: string]: Sign }

  constructor() {
    this.signsByName = {}
    signs.forEach(sign => {
      this.signsByName[sign.name] = sign
    })
  }

  getSignNames(): Array<string> {
    return signs.map(sign => {
      return sign.name
    })
  }

  getSignWithName(name: string): Sign | null {
    return this.signsByName[name]
  }

  getSignWithFingers(fingers: FingersState): Sign | null {
    const matchIndex = signs.findIndex(test => {
      return compareFingers(test.fingers, fingers)
    })
    if (matchIndex !== -1) {
      return signs[matchIndex]
    } else {
      return null
    }
  }
}

export default new Signs()
