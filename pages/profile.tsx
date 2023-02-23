import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Avatar from '../components/Avatar'

const profile = () => {
    return (
        <Layout title='Profile'>
            <Card padding={false}>
                <div className='relative'>
                    <div className='h-56 overflow-hidden relative'>
                        <img
                            className='object-fill'
                            src={
                                'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&dl=constantinos-kollias-yqBvJJ8jGBQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
                            }
                            alt=''
                        />
                    </div>
                    <div className='absolute top-44 left-4'>
                        <Avatar bigSize={true} />
                    </div>
                    <div className='ml-32'>
                        <h1 className='text-2xl font-bold'>Gaurav Parajuli</h1>
                        <p className='text-sm text-gray-500 -mt-1'>
                            Stockholm, Sweden
                        </p>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}

export default profile
