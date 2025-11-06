"use client"

export default function FloatingChakras() {
  const chakras = [
    { color: "from-red-400 to-orange-400", delay: 0, size: "w-12 h-12", top: "30%", left: "20%" },
    { color: "from-orange-400 to-yellow-400", delay: 1, size: "w-16 h-16", top: "50%", left: "70%" },
    { color: "from-yellow-400 to-green-400", delay: 2, size: "w-10 h-10", top: "70%", left: "40%" },
    { color: "from-green-400 to-blue-400", delay: 3, size: "w-14 h-14", top: "20%", left: "80%" },
    { color: "from-blue-400 to-purple-400", delay: 4, size: "w-12 h-12", top: "60%", left: "10%" },
    { color: "from-purple-400 to-pink-400", delay: 5, size: "w-16 h-16", top: "40%", left: "60%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {chakras.map((chakra, idx) => (
        <div
          key={idx}
          className={`absolute ${chakra.size} rounded-full bg-gradient-to-br ${chakra.color} opacity-30 animate-float`}
          style={{
            top: chakra.top,
            left: chakra.left,
            animationDelay: `${chakra.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
