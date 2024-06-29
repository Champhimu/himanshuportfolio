import './App.css';

function App() {

  return (
    <div className="App-header">
      <header style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", marginLeft: "25px"}}>
          <h3>Himanshu Thakur</h3>
        </div>
        <div style={{display: "flex", margin: "auto", marginRight: "10px"}}>
          <ul>
            <li class="active">Welcome</li>
            <li>Expertise</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Connect</li>
            <li>
            <button style={{ backgroundColor: "yellow", borderRadius: "10px", height: "35px", width: "100px", fontFamily: 'JetBrains Mono'}} type="button">Get my CV</button>
            </li>
          </ul>
        </div>
      </header>

      <section style={{border: "1px solid red", height: "90vh"}}>
         Junior Full Stack Developer
         Hello
         I'm Himanshu Thakur Linkedin, Github, Twitter
      </section>
    </div>
  );
}

export default App;
