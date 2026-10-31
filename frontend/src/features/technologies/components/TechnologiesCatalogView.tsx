import { useEffect, useState } from "react"
import type { Technology } from "../types/technology.types"
import { getTechnologiesAsync } from "../api/technologiesApi"
import { TechnologyCard } from "./TechnologyCard"

export function TechnologiesCatalogView() {

    const [technologies, setTechnologies] = useState<Technology[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [search, setSearch] = useState<string>('')

    useEffect(
        () => {
            getTechnologiesAsync().then(
                (data) => {
                    setTechnologies(data)
                    setLoading(false)
                }
            )
        }, []
    )

    const filteredTechnologies = technologies.filter(
        technology => technology.name.toLowerCase().includes(search.toLowerCase()) || technology.description.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Catálogo Global de Tecnologías</h1>
                    <p className="text-slate-400 text-sm mt-1">Módulo desacoplado bajo arquitectura <code className="text-sky-400 font-mono">Vertical Slicing</code>.</p>
                </div>

                <button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto cursor-pointer">+ Nueva Tecnología</button>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <input type="text" placeholder="🔍 Filtrar tecnologías por nombre o descripción..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full sm:max-w-md bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors" />
                <span className="text-xs text-slate-400">
                    Mostrando <strong>{filteredTechnologies.length}</strong> de {technologies.length} registros</span>
            </div>

            {
                loading ? (
                    <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-12 text-center">
                        <p className="text-sky-400 font-semibold animate-pulse text-lg">⏳ Consultando capa de servicios (technologiesApi.ts)...</p>
                        <p className="text-slate-500 text-xs mt-2">Consumiendo Promesa asíncrona desacoplada</p>
                    </div>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredTechnologies.map(
                            (technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    id={technology.id}
                                    name={technology.name}
                                    description={technology.description}
                                />
                            )
                        )}
                    </section>
                )
            }
        </div>
    )
}