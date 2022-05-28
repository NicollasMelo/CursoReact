import Button from "./Eventos/Button"

function Evento({numero}) {

    function meuEvento(){
        console.log(`Ativando evento`)
    }

    function segundoEvento() {
        console.log('Ativando segundo evento');
    }    

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
           
        </div>
    )
}

export default Evento