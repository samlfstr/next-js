import {useRouter} from 'next/router';
import {error} from "next/dist/build/output/log";

export default function Slug() {
  const router = useRouter();
  const slugs = router.query.slug;
  console.log(router);

  const goToHome = () =>{
    router.push('/');
  }

  return (
    <div className="grid place-items-center h-screen">
      <p>
        All slugs : {slugs}
      </p>

      <button onClick={()=>{goToHome()}}>Home</button>
    </div>
  )
}