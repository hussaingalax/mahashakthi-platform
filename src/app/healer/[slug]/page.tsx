"use client"
export const dynamic = "force-dynamic"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

type Healer = {
  id: string
  healer_name: string
  experience_years: string | null
  bio: string | null
  payment_link: string | null
  profile_photo: string | null
  slug: string | null
}

export default function HealerPage() {
  const params = useParams()
  const slug = params.slug as string

  const [healer, setHealer] = useState<Healer | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHealer = async () => {
      const { data, error } = await supabase
        .from("healer_profiles")
        .select("*")
        .eq("slug", slug)
        .single()

      if (!error && data) {
        setHealer(data)
      }

      setLoading(false)
    }

    if (slug) fetchHealer()
  }, [slug])

  if (loading) return <p className="p-10">Loading...</p>

  if (!healer) return <p className="p-10">Healer not found</p>

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {healer.profile_photo && (
          <img
            src={healer.profile_photo}
            alt={healer.healer_name}
            className="w-full h-72 object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">
            {healer.healer_name}
          </h1>

          <p className="text-gray-600 mb-3">
            <strong>Experience:</strong>{" "}
            {healer.experience_years || "Not specified"} years
          </p>

          <p className="text-gray-700 mb-6">
            {healer.bio}
          </p>

          {healer.payment_link && (
            <a
              href={healer.payment_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Pay Now
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
