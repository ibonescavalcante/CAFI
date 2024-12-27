import { getUser, verifySession } from "@/lib/dal";
import Sidebar from "./page";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

const page = async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  if (session?.userId) {
    const usuario = await getUser();
    return <Sidebar people={usuario} />;
  }
};

export default page;
