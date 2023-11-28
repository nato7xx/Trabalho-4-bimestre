import Header from "@/components/Header";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="bg-zinc-900 bg-cover max-w-full h-screen ">
      <div className="bg-zinc-800/50 bg-cover max-w-full h-screen pt-8">
        <div className=" w-2/5 m-auto opacity-100">
          <Header />
          <TaskList />
        </div>
      </div>
    </main>
  );
}
