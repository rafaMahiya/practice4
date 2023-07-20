import { useRouter } from "next/router"

function Review() {
    const router = useRouter()
    const { productId, reviewId } = router.query
    return (
        <div>
            <h1>Product ID: {productId}</h1>
            <h2>Review No: {reviewId}</h2>
        </div>
    )
}

export default Review
