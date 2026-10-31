import { AppLayout } from "./layouts/AppLayout"
import { TechnologiesCatalogView } from "./features/technologies/components/TechnologiesCatalogView"

function App() {
    return (
        <AppLayout>
            <TechnologiesCatalogView />
        </AppLayout>
    )
}

export default App