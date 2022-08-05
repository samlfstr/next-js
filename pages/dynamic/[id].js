import {useRouter} from "next/router";

export default function GetItemsById(){
  const router = useRouter();
  // get the property id from router query and store it in the variable named id.
  console.log(router);
  const {id} = router.query;
    return(
        <div className="grid place-items-center h-screen">
            <p> User with the id of : {id}</p>
        </div>
    )
}