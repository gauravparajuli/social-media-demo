import React from 'react'

interface props {
    bigSize?: boolean
}

const Avatar = ({ bigSize = false }: props) => {
    return (
        <div
            className={`${
                bigSize ? 'w-24 h-24' : 'w-12 h-12'
            } rounded-full overflow-hidden`}
        >
            <img
                src='https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
                alt=''
            />
        </div>
    )
}

export default Avatar
