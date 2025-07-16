import React from "react"

type Props = {
  children: React.ReactNode
  className?: string
}

const GradientBackground = ({ children, className = "" }: Props) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 bg-black">
        <div
          className="w-30 h-90 bg-red-500 rounded-full animate-blob-float-diagonal"
          style={{ top: "-10%", left: "-10%", filter: "blur(100px)", willChange: "transform",}}
        />
        <div
          className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-20 animate-blob-float-circle"
          style={{ top: "20%", right: "-15%", filter: "blur(120px)",  willChange: "transform", }}
        />
        <div
          className="absolute w-80 h-80 bg-blue-500 rounded-full opacity-25 animate-blob-float-diagonal"
          style={{ bottom: "-10%", left: "30%", filter: "blur(100px)", willChange: "transform", }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default GradientBackground