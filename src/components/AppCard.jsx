export default function AppCard({ title, description }) {

    return (
        <div className="container card mt-3">
            <div className="card-body">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>

    )
}