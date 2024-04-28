import React from "react";
import { redirect } from "next/navigation";

export default function Home(): React.JSX.Element {
  return redirect("/auth/login");
}
