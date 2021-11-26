import { ReactNode } from "react"
import Layout from "../components/Layout"
import ResourceList from "../components/ResourceList"
import resources from "../data/resources.json"

const ResourcesPage = (): ReactNode => (
    <Layout title="Resources | HitRuns" headerText="HITMAN SPEEDRUNS">
        <ResourceList resources={resources}></ResourceList>
    </Layout>
)

export default ResourcesPage
