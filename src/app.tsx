import { Plus } from "lucide-react";

import logo from "./assets/logo-in-orbit.svg";
import letsStart from "./assets/lets-start-illustration.svg";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo in.orbit" />
      <img src={letsStart} alt="logo letsStart" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 text-sm font-medium flex items-center gap-2 tracking-tight hover:bg-violet-700 duration-200"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}
