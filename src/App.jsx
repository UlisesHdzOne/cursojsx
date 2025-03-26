function App() {
 
  return (
    <div className="dark">
     <h1>className - htmlFor - select defautValue</h1>
     <form>
      <label htmlFor="userName">User name</label>
      <input type="text" id="userName" placeholder="User name" />

      <br />
'
      <select defaultValue={'javascript'}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
      </select>
     </form>
    </div>
  );
}

export default App;
