function SeuNome({ setNome }) {

    return (
        <div>
            <p>Digite o seu nome:</p>
            <input tupe="text" placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)}/>

        </div>
    )
}

export default SeuNome