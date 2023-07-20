import { useRouter } from "next/router"

function Doc() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)
    if (params.length === 2) {
        return <h1>Viewing page for feature {params[0]} and conecept {params[1]}</h1>
    }
    else if (params.length === 1) {
        return <h1>Viewing page for feature {params[0]} </h1>
    }
    return (
        <div>
            tottal parameters = {params.length}
            <h1>Welcome to docs page</h1>

        </div>
    )
}

export default Doc
