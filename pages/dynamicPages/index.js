import Link from "next/link";

export default function DynamicPages() {
  return (
    <div className="grid place-items-center h-screen">
      <ul>
        <li>
            {/*It will redirect me to any page with the url cus it's a slug*/}
          <Link href="/slugPage/anythinggoes"> Slug page </Link>
        </li>
      </ul>
    </div>
)
}