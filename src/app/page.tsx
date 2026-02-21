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

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}