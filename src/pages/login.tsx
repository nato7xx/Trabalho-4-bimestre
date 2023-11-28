export default function login() {
    return(
        <div className="bg-orange-400 w-full h-screen flex items-center justify-center flex-col">
            <form className="flex flex-col bg-white p-12 gap-4 ">
            <h1 className="text-2xl font-bold " p-8>Login</h1>
                <span className="rounded text-xs">SEU EMAIL</span>
                <input className="border border-solid  rounded p-1" type="email" placeholder="johndoe@email.com"/>
                <span className="text-xs">SUA SENHA</span>
                <input className="border border-solid  rounded p-1"  type="password" placeholder="*********"/>
                <button className="bg-purple-800 p-1 rounded text-white">Entrar no sistema</button>
            </form>
        </div>
    )
}