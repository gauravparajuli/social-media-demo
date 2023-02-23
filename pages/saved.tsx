import React from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const saved = () => {
    return (
        <Layout title='Saved Posts'>
            <PostCard />
            <PostCard />
        </Layout>
    )
}

export default saved
