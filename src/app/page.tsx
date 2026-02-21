"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Home() {
  const [data, setData] = useState<unknown[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("healer_profiles")
        .select("*")

      if (!error && data) {
        setData(data)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
  <main style={{ padding: "40px" }}>
    <h1>Healers</h1>

    {loading && <p>Loading...</p>}

    {!loading && data.length === 0 && <p>No healers found</p>}

    <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
      {data.map((healer: any) => (
        <div
          key={healer.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{healer.healer_name}</h2>
          <p><strong>Experience:</strong> {healer.experience_years || "Not specified"} years</p>
          <p>{healer.bio}</p>

          {healer.payment_link && (
            <a
              href={healer.payment_link}
              target="_blank"
              style={{ color: "blue" }}
            >
              Pay Now
            </a>
          )}
        </div>
      ))}
    </div>
  </main>
)
}