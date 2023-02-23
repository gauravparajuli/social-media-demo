import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PostFormCard from '../components/PostFormCard'
import PostCard from '../components/PostCard'

const Home: NextPage = () => {
    return (
        <Layout>
            <PostFormCard />
            <PostCard />
        </Layout>
    )
}

export default Home
