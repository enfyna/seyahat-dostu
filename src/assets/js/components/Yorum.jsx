export default function Yorum() {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto flex flex-col justify-center">      <div className="basis-full flex flex-row justify-start w-full">
        <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full mr-4 aspect-square w-16 h-16">
        </img>
        <div>
          <p className="font-bold text-left">Jane Doe</p>
          <p className="text-gray-500 text-left">Puan: 4.5</p>
          <p className="text-left">Harika bir seyahat arkadaşı, çok keyif aldık!Harika bir seyahat arkadaşı, çok keyif aldık!Harika bir seyahat arkadaşı, çok keyif aldık!</p>
        </div>
      </div>
    </div>
  )
}
