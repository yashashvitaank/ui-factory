import Admin from "@/components/Admin";
import { cookies } from "next/headers";

function AdminDashboard() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get("adminLogin")?.value;
  console.log("debug COOKIE", isAdmin);
  return isAdmin ? <Admin /> : <p>Admin not Signed In!</p>;
}

export default AdminDashboard;