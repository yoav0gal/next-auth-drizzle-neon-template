import { auth } from "@auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 32 }}>
      <h2>Dashboard</h2>
      <p>Welcome, {session.user.name || session.user.email}!</p>
      <br />
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/api/auth/signout">Sign out</Link>
    </div>
  );
}
