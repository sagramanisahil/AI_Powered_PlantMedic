export default function LeafLensLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Green circular logo with leaf icon */}
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">🍃</span>
      </div>
      {/* LeafLens text */}
      <span className="text-2xl font-bold text-gray-800">
        <span className="text-green-600">Leaf</span>
        <span className="text-gray-800">Lens</span>
      </span>
    </div>
  )
}
