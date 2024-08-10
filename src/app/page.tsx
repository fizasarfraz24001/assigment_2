import React from 'react'
import Link from "next/link"
export default function page() {
  return (
    <div className ="font-nano flex gap-10 p-10">
      <Link href="/homepage">Homepage</Link>
      <Link href="/namepage">Namepage</Link>
    </div>
  )
}
