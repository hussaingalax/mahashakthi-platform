return (
  <main className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-3xl font-bold mb-8 text-center">
      Mahashakthi Healers
    </h1>

    {loading && (
      <p className="text-center text-gray-500">Loading...</p>
    )}

    {!loading && data.length === 0 && (
      <p className="text-center text-gray-500">
        No healers found
      </p>
    )}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((healer) => (
        <div
          key={healer.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
        >
          {healer.profile_photo && (
            <img
              src={healer.profile_photo}
              alt={healer.healer_name}
              className="w-full h-56 object-cover"
            />
          )}

          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold mb-2">
              {healer.healer_name}
            </h2>

            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Experience:</span>{" "}
              {healer.experience_years || "Not specified"} years
            </p>

            <p className="text-gray-700 mb-4">
              {healer.bio}
            </p>

            <div className="mt-auto">
              {healer.payment_link && (
                <a
                  href={healer.payment_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Pay Now
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
)