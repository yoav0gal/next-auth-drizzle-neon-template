import { auth } from "@auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 32 }}>
      <h2>Profile</h2>
      <p>Email: {session.user.email}</p>
      <p>Name: {session.user.name}</p>
      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
}
