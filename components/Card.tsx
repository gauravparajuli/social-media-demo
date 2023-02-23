import React, { ReactNode } from 'react'

interface props {
    children?: ReactNode
    padding?: Boolean
}

const Card = ({ children, padding = true }: props) => {
    const classes = `bg-white shadow-md rounded-md mb-5 overflow-hidden ${
        padding ? 'p-4' : ''
    }`

    return <div className={classes}>{children}</div>
}

export default Card
