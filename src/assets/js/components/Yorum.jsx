export default function Yorum({ yorum }) {
  const user = yorum.Ratinger;
  return (
    <div className="bg-white p-4 shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto flex flex-col justify-center">
      <div className="basis-full flex flex-row justify-start w-full">
        <a href={"/profile?id=" + user.id}>
          <img src={`data:image/jpeg;base64,${user['Photograph']}`} alt="Profile Picture" className="rounded-full mr-4 aspect-square w-16 h-16"></img>
        </a>
        <div>
          <a href={"/profile?id=" + user.id}>
            <p className="font-bold text-left">{user.Name}</p>
          </a>
          <p className="text-yellow-500 text-left mb-4">{"★".repeat(yorum.Point)}</p>
          <p className="text-left">{yorum.Rating}</p>
        </div>
      </div>
    </div >
  )
}
