import { NextPage } from "next"
import { useState, useEffect } from "react"

const Albuns: NextPage = () => {
    const [albuns, setAlbuns] = useState<Album[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((res) => res.json())
            .then((data) => {
                setAlbuns(data)
            })
    }, []);

    return (
        <ul>
            {albuns.map((alb, key) => (
                <li key={key}>{alb.title}</li>
            ))}
        </ul>
    )
}

type Album = {
    title: string;
}

export default Albuns;