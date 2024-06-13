export default function TanitimKarti({ title, content }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-lg w-full mx-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out h-60 bg-white border border-gray-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

