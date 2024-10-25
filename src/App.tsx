import { Links, Header } from "@/containers";
import { BodySection } from "./components";

function App() {
  return (
    <div className="w-full relative">
      <Links />
      <Header />

      <div className="w-full bg-main-body">
        <BodySection title="about the cafe"/>
      </div>
    </div>
  );
}
export default App;
