const AddTask=()=>{
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
        <div classNameName="ui form">
        <form>
        <div className="field">
    <label>Title</label>
    <input type="text"  placeholder="Task title"/>
  </div>
  <div classNameName="field">
    <label>Description</label>
    <textarea rows="2" 
    spellCheck="false"  placeholder="Task description" />
  </div>
  <button className="ui primary button">
  Submit
</button>
        </form>
        </div>
        </>
    )
}
export default AddTask;