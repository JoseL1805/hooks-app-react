import React, { memo } from 'react'

export const Small = memo(({counter}) => {
    console.log('me generé de nuevo')
    return (
        <small>{counter}</small>
    )
})
