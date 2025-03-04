import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jivan's Portfolio" },
    { name: "description", content: "Welcome to Jivan's Website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
