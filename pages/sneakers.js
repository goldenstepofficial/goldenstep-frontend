import Link from "next/link"
import Layout from "../components/Layout/Layout"
import MyHead from "../components/Head"
import Image from "next/image"

const Sneakers = () => {
    return (
        <Layout>
            <MyHead title="Sneakers - Goldenstep" description="This is the homepage" />
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 mt-10">
                <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                <p className="text-gray-500 mb-8">Our new sneaker collection is launching soon. Be the first to know!</p>

                <p className="text-gray-500">Stay tuned for updates on our social media channels:</p>
                <div className="flex flex-row justify-between mt-2">
                    <Link href={'https://www.instagram.com/goldenstep_care/'}>
                        <Image
                            src="/images/instagram.png"
                            alt="Goldenstep Instagram"
                            className="w-8 h-8 mx-3"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src="/images/facebook.png"
                            alt="Goldenstep Instagram"
                            className="w-8 h-8 mx-3"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src="/images/youtube.png"
                            alt="Goldenstep Instagram"
                            className="w-8 h-8 mx-3"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>

                <p className="text-gray-500 mt-8">© 2023 GoldenStep. All rights reserved.</p>
            </div>
        </Layout>
    )
}

export default Sneakers
