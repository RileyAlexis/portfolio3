
interface CardProps {
    children: React.ReactNode;
}


export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card">
            <p>{children}</p>
        </div>
    )
}