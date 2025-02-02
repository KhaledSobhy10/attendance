import "./App.css";
import { Toaster } from "sonner";
import AttendanceTable from "./components/AttendanceTable";
import { AttendanceProvider } from "./context/AttendanceContext";
import Actions from "./components/Actions";
import { SquareArrowOutUpRight } from "lucide-react";

function App() {
  return (
    <>
      <Toaster />
      <AttendanceProvider>
        <main className="container lg:p-4 p-2 text-center flex flex-col gap-4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight flex justify-center gap-2 items-center">
            مدير الوقت
            <a
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1HbnvRH1ify9Opz4pU49A0DUxAWaJQeohzM8e5ODN8k8/edit?usp=sharing"
            >
              <SquareArrowOutUpRight />
            </a>
          </h1>
          <Actions />
          <AttendanceTable />
        </main>
      </AttendanceProvider>
    </>
  );
}

export default App;
