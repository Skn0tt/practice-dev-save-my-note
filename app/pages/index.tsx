import { useState } from "react"
import saveNote from "app/mutations/saveNote"
import loadNote from "app/queries/loadNote"

function Home() {
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <div className="main-content">
      <h1>Save my note</h1>
      <div className="textbox" data-test="note">
        <input
          placeholder="Enter note..."
          type="text"
          value={note}
          onChange={(evt) => setNote(evt.target.value)}
        />
      </div>
      <div className="buttons">
        <button
          data-test="save-btn"
          className="btn btn-primary btn-save"
          disabled={loading}
          onClick={async () => {
            setLoading(true)
            await saveNote(note)
            setLoading(false)
          }}
        >
          Save
        </button>
        <button
          data-test="load-btn"
          className="btn btn-primary btn-load"
          disabled={loading}
          onClick={async () => {
            setLoading(true)
            setNote(await loadNote({}))
            setLoading(false)
          }}
        >
          Load
        </button>
      </div>
    </div>
  )
}

export default Home
