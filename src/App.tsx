import InputSide from "./components/InputSide"
import OutputSide from "./components/OutputSide"

function App() {

  return (
    <main className="bg-Green400/20 min-h-screen flex items-center justify-center relative pt-32 pb-10 lg:pt-0 lg:pb-0">
      <p className="uppercase absolute left-[50%] translate-[-50%] top-[8%] lg:top-[15%] text-Green900 font-bold tracking-[10px]">
        spli <br />
        tter
      </p>
      <div className="bg-White rounded-2xl p-8 w-full max-w-[340px] lg:min-w-3xl font-bold grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputSide />
        <OutputSide />
      </div>
    </main>
  )
}

export default App
