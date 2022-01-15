import { NextPage } from "next";
import { useRouter } from "next/router";

const Dobro: NextPage = () => {
    const router = useRouter()
    const { numero } = router.query
    return (
        <p>Dobro do número {Number(numero)*2} </p>
    )
}

export default Dobro;