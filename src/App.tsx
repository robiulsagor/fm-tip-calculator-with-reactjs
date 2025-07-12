import InputSide from "./components/InputSide"
import OutputSide from "./components/OutputSide"

function App() {

  return (
    <main className="bg-Green400/20 h-screen flex items-center justify-center">
      <div className="bg-White rounded-2xl p-8 w-full max-w-[340px] lg:min-w-3xl font-bold grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputSide />
        <OutputSide />
      </div>
    </main>
  )
}

export default App
