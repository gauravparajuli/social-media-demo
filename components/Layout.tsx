import { ReactNode } from 'react'
import Head from 'next/head'
import NavigationCard from './NavigationCard'

interface props {
    title?: string
    children: ReactNode
    hideNavigation?: boolean
}

const Layout = ({ title, children, hideNavigation = false }: props) => {
    return (
        <div>
            <Head>
                <title>
                    {!title
                        ? 'Social Media Clone'
                        : `${title} - Social Media Clone`}
                </title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='flex container mx-auto mt-4 gap-4'>
                {!hideNavigation && (
                    <div className='w-1/4'>
                        <NavigationCard />
                    </div>
                )}

                <div className={hideNavigation ? 'w-full' : 'w-3/4'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
