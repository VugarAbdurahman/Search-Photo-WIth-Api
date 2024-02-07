import React, { useState } from "react"

export const SearchHeader = ({ search }) => {
  const [searchItem, setSearhItem] = useState("")
  const handleFromApp = (event) => {
    event.preventDefault()
    search(searchItem)
  }

  return (
    <div className="m-1 p-3 bg-slate-400/20 flex justify-center border border-[#393939] rounded">
      <form className="flex flex-col  rounded p-2" onSubmit={handleFromApp}>
        <label htmlFor="search">Search</label>
        <input
          onChange={(e) => {
            setSearhItem(e.target.value)
          }}
          className="border bg-cyan-600/10 text-black font-semibold border-cyan-600 w-[400px] outline-none p-1"
          type="text"
          placeholder="Search image"
        />
      </form>
    </div>
  )
}
