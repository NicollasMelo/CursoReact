import Item from "./Item"

function List() {
    return (
        <>
            <h1>Item1</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={2001}/>
                <Item marca="Pajero" ano_lancamento={1785}/>
                <Item marca="Fusca" ano_lancamento={1980}/>
                <Item/>
            </ul>
        </>
    )
}

export default List