import type { Technology } from "../types/technology.types"

export const getTechnologiesAsync = () : Promise<Technology[]> => {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    const mockCatalog: Technology[] = [
                        {
                            id: 1,
                            name: 'C# / .NET',
                            description: 'Framework empresarial para desarrollo de APIs RESTful y microservicios de alto rendimiento.'
                        },
                        {
                            id: 2,
                            name: 'TypeScript',
                            description: 'Superset tipado de JavaScript que añade tipos estáticos y herramientas de refactorización.'
                        },
                        {
                            id: 3,
                            name: 'PostgreSQL',
                            description: 'Sistema de gestión de bases de datos relacional de código abierto enfocado en integridad ACID.'
                        },
                        {
                            id: 4,
                            name: 'Docker',
                            description: 'Plataforma de virtualización basada en contenedores para aislar dependencias de software.'
                        },
                        {
                            id: 5,
                            name: 'React',
                            description: 'Librería declarativa basada en componentes reutilizables y Virtual DOM para interfaces web.'
                        },
                        {
                            id: 6,
                            name: 'Python',
                            description: 'Lenguaje versátil de sintaxis limpia utilizado en backend, automatización e inteligencia artificial.'
                        }
                    ]

                    resolve(mockCatalog)
                }, 1000
            )
        }
    )
}