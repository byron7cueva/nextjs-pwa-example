import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/" prefetch={false}>
        back home
      </Link>
    </div>
  );
}
