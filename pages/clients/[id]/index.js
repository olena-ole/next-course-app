import { useRouter } from 'next/router'

export default function ClientProjectsPage() {

    const router = useRouter()

    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[projectid]',
            query: {id: 'max', projectid: 'projecta'}
        })
    }

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}