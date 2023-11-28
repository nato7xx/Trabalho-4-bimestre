interface HeaderProps {
  handleNewTask: (task: string) => void;
}

export default function Header() {

  return (
    <div className="flex items-center justify-between gap-4">
      <input
        type="text"
        className="bg-zinc-800 p-4 rounded flex-1 border outline border-zinc-900 outline-zinc-900 focus:outline-fuchsia-500 text-white focus:border-fuchsia-300"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className="bg-fuchsia-500 text-white 
      font-semibold p-4 rounded-lg hover:bg-fuchsia-600 transition-all"
      >
        Criar
      </button>
    </div>
  );
}
