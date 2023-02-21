import React, { ReactNode } from 'react'

interface props {
    children?: ReactNode
}

const Card = ({ children }: props) => {
    return <div className='bg-white shadow-md p-4 rounded-md'>{children}</div>
}

export default Card
