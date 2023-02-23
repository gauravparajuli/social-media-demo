import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Avatar from '../components/Avatar'
import Link from 'next/link'

const notifications = () => {
    return (
        <Layout title='Notifications'>
            <h1 className='text-6xl mb-4 text-gray-300'>Notifications</h1>
            <Card>
                <div className='flex gap-3 items-center border-b p-4 -mx-4'>
                    <Link href='/profile'>
                        <Avatar />
                    </Link>
                    <div>
                        <Link
                            href='/profile'
                            className='font-semibold hover:underline'
                        >
                            John Doe
                        </Link>{' '}
                        liked your{' '}
                        <Link
                            href=''
                            className='text-socialBlue hover:underline'
                        >
                            photo
                        </Link>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}

export default notifications
