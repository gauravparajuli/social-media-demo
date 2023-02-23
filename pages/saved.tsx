import React from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const saved = () => {
    return (
        <Layout title='Saved Posts'>
            <h1 className='text-6xl mb-4 text-gray-300'>Saved Posts</h1>
            <PostCard />
            <PostCard />
        </Layout>
    )
}

export default saved
