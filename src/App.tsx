import "./App.css";
import { Toaster } from "sonner";
import AttendanceTable from "./components/AttendanceTable";
import { AttendanceProvider } from "./context/AttendanceContext";
import Actions from "./components/Actions";

function App() {

  return (
    <AttendanceProvider>
      <main className="container lg:p-4 p-2 text-center flex flex-col gap-4">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
          مدير الوقت
        </h1>
        <Toaster />
        <Actions/>
        <AttendanceTable />
      </main>
    </AttendanceProvider>
  );
}

export default App;
