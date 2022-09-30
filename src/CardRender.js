import Card from './Card';

const CardRender = ({dex}) => {
    return (
        <div>
            {
                dex.map((user, index) => {
                    return (<Card key = {user.id} id={dex[index].id} name={dex[index].name} thumb={dex[index].thumb}/>
                    );
                })
            }
        </div>
    );
}

export default CardRender;
    