import * as React from 'react'

export default (storyFn: () => React.ReactNode) => <div style={
    {
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
}>{storyFn()}</div>