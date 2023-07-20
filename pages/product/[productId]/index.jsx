import Button from "@/components/Button";
import { useRouter } from "next/router";

function ProductDetails() {
    const router = useRouter();
    const productId = router.query.productId;


    const handleReplaceButton = () => {
        router.replace(`/`);
    }

    return (
        <div>
            <h1>{productId} Details about product</h1>
            {
                (productId === 3) && <Button text="Click Here. replace is used here." onClickFunction={handleReplaceButton} />
            }
        </div>
    )
}

export default ProductDetails
