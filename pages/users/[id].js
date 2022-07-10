import {useRouter} from "next/router";

export default function UserById() {
  const router = useRouter();
  const query = router.query;
  console.log(router);
  return (
    <div className="grid place-items-center h-screen">
      <p> The user ID is : {query.id}</p>
    </div>
  )
}