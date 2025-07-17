import {BackgroundLines} from "../components/ui/background-lines"

export default function Landing() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col">
      <div className="h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-xl max-w-xl">Beautiful gradient backgrounds made easy.</p>
        <div className="animate-slow-bounce">test</div>
      </div>
    </BackgroundLines>
  )
}