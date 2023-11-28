import Image from 'next/image'
import foto from '../pages/img/foto.png'

export default function Hotspot() {
    return (
        <div className="bg-orange-400 w-full h-screen flex items-center justify-center ">
            <main className='w-[600px] bg-white grid grid-cols-2'>
                <Image src={foto} alt="" />
                <form className="flex flex-col justify-between bg-white px-8 py-10 ">

                    <h1 className="text-2xl gap-4 font-bold" >Hotspot</h1>
                    <div className='flex gap-4 flex-col'>
                        <span className="text-xs gap-4">Insira seu código de ativação</span>
                        <input className="border border-solid  p-2 " type="password" placeholder="*********" />
                        <button className="bg-purple-800 p-2  text-white">Conectar</button>
                    </div>
                </form>
            </main>
        </div >
    )
}