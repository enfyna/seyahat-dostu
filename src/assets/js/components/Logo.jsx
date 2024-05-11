export default function Logo({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="text-blue-300 hover:text-green-600 no-underline"
    >
      <div>
        {name}
      </div>
    </a>
  )
}
