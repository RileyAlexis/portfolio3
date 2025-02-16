import { Card } from "./Card/Card"

export const AppList: React.FC = () => {
    return (
        <div className="appListContainer">
            <Card>
                <h3>Velvet</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, perspiciatis neque? Dolor nulla laudantium possimus, rerum fuga autem ullam doloribus optio mollitia, numquam reprehenderit, aspernatur delectus adipisci reiciendis? Vero, exercitationem?</p>
            </Card>
            <Card>
                <h3>Transbabbler</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit iure, adipisci non quasi tempora assumenda in tempore dolore voluptates laudantium velit fugit rem vero excepturi incidunt quod officiis commodi vitae.</p>
            </Card>
            <Card>
                <h3>Tinkl</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque harum quos, accusantium porro laudantium inventore in. Iste voluptate itaque ducimus odit neque labore voluptas, ab ut assumenda laudantium dicta.</p>
            </Card>
        </div>
    )
}