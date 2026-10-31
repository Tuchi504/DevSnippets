import type { ReactNode } from "react"

interface AppLayoutProps {
    children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
            <aside className="hidden md:flex md:w-64 md:flex-col bg-slate-950 border-r border-slate-800 justify-between p-5 shrink-0">
                <div>

                    <div className="flex items-center gap-3 mb-8 px-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-sm shadow">
                            DS
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-white">DevSnippets</span>
                            <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">MVP</span>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 bg-sky-500/10 text-sky-400 rounded-lg font-medium text-sm border border-sky-500/20"
                        >
                            <span>🌐</span>
                            <span>Tecnologías</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 rounded-lg font-medium text-sm cursor-not-allowed"
                        >
                            <span>⚡</span>
                            <span>Explorador (Feed)</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 rounded-lg font-medium text-sm cursor-not-allowed"
                        >
                            <span>🔒</span>
                            <span>Mi Bóveda (Privado)</span>
                        </a>
                    </nav>
                </div>

                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400 mb-1">Estado de Seguridad</p>
                    <p className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                        <span>👤</span>
                        <span>Modo Invitado</span>
                    </p>
                </div>

            </aside>

            <header className="md:hidden bg-slate-950 border-b border-slate-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                        DS
                    </div>
                </div>
                <span className="font-bold text-lg text-white">DevSnippets</span>
                <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md border border-amber-500/20 font-medium">👤 Invitado</span>
            </header>

            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}