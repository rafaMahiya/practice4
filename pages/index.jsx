import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {

    const router = useRouter()

    const handleButtonClick = () => {
        console.log("clicked")
        router.push("/product")
    }
    return (
        <div>
            <h1>Home</h1>

            <Link style={{ display: "block" }} href="/blog">Blog</Link>
            <Link style={{ display: "block" }} href="/about">About</Link>
            <Link style={{ display: "block" }} href="/blog">Blogs</Link>
            <Link style={{ display: "block" }} href="/docs">Docs</Link>
            <Link style={{ display: "block" }} href="/product">Product</Link>

            <button onClick={() => handleButtonClick()}>Product page</button>
        </div>
    )
}

export default Home