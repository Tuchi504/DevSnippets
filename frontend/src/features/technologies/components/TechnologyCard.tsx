import type { Technology } from "../types/technology.types"

export function TechnologyCard({ id, name, description } : Technology) {
    return (
        <article className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500/50 transition-all duration-200 shadow-sm group">
            <div>
                <div className="flex items-center justify-between mb-3">
                    <span className="bg-sky-500/10 text-sky-400 text-xs font-mono font-semibold px-2.5 py-1 rounded-md border border-sky-500/20">
                        ID Catálogo #{id}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Oficial</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{name}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
            </div>
            <button
                disabled
                className="w-full bg-slate-900/80 text-slate-400 text-sm font-medium py-2 px-3 rounded-lg cursor-not-allowed border border-slate-700/60 flex items-center justify-center gap-2"
            >
                <span>⚡</span>
                <span>Explorar Snippets</span>
            </button>
        </article>
    )
}