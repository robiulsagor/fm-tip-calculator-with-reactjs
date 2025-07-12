import InputSide from "./components/InputSide"
import OutputSide from "./components/OutputSide"

function App() {

  return (
    <main className="bg-Green400/20 h-screen flex items-center justify-center">
      <div className="bg-White rounded-2xl p-8 w-full max-w-[340px] font-bold">
        <InputSide />
        <OutputSide />
      </div>
    </main>
  )
}

export default App
