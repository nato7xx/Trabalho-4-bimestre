import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function TaskList() {
  return (
    <div className="w-full mx-auto">
      <div className=" flex items-center justify-between mt-8">
        <h2 className="font-bold text-fuchsia-500">
          Tarefas criadas
          <span className="px-1 bg-slate-600 text-slate-200 font-normal ml-2 rounded-full">
            5
          </span>
        </h2>
        <h2 className="font-bold text-purple-500">
          Tarefas Concluidas
          <span className="px-1 bg-slate-600 text-slate-200 font-normal ml-2 rounded-full">
            2 de 5
          </span>
        </h2>
      </div>

      <div className="w-full mx-auto mt-4 gap-2 flex flex-col">
        <Task description="Carregar o celular" />
        <Task description="Ativar o despertador" />
      </div>
    </div>
  );
}

interface TaskProps {
  description: string /** Prop Obrigatória */;
  completed?: boolean /** Prop Opcional (?:)*/;
}

function Task({ description, completed }: TaskProps) {
  return (
    <div
      className={
        completed
          ? "bg-green-400 border border-gray-500 text-white rounded-lg flex items-center justify-between p-4"
          : "bg-gray-800 border border-gray-500 text-white rounded-lg flex items-center justify-between p-4"
      }
    >
      <CustomButton></CustomButton>
      <p>{description}</p>
      <a href="" className="text-white">
        <Image
          src="./img/trash.svg"
          width={14.5}
          className="filter invert"
          height={16}
          alt="remove task"
        />
      </a>
    </div>
  );
}

function CustomButton() {
  return (
    <button className="p-1 bg-fuchsia-600 border-2 border-dashed border-fuchsia-600 rounded-full">
      <FaCheck size={10} />
    </button>
  );
}
