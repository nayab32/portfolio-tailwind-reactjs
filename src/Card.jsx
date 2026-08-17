function Card({ title, text }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {text}
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
}

export default Card;