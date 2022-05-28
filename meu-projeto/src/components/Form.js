import {useState} from 'react' //isso 'e um hook

function Form() {

    function castrarUsuario(e){
        e.preventDefault() // nao da reload na pagina use sempre quando for submit
        console.log(name)
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState() //esta sendo usado pra resgatar o valor name
    const [password, setPassword] = useState()
    

    return (

        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={castrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text"
                    id="name" 
                    name="name" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}>
                    

                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password"
                     id="password"
                     name="password "
                     placeholder="Digite a sua senha"
                     onChange={(e) => setPassword(e.target.value)} >
                    
                     </input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form