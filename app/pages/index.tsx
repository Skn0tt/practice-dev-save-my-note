function Home() {
  return (
    <div className="main-content">
      <h1>Save my note</h1>
      <div className="textbox" data-test="note">
        <input placeholder="Enter note..." type="text" />
      </div>
      <div className="buttons">
        <button data-test="save-btn" className="btn btn-primary btn-save">
          Save
        </button>
        <button data-test="load-btn" className="btn btn-primary btn-load">
          Load
        </button>
      </div>
    </div>
  )
}

export default Home
