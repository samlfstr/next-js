import styles from '../styles/Text.module.css';
import { useRouter } from 'next/router'

export default function Text(){
    const router = useRouter()
    const { name } = router.query
    return(
        <div className="grid place-items-center h-screen">
            <p> My name is {name}</p>
        </div>
    )
}