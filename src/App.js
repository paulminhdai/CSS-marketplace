import './App.css';

function SideNav() {
  return (
    <div class="sidenav">
      <img src="/index.html" alt="logo"/>
      <h1><a href={null}>Home</a></h1>
      <h1><a href={null}>Blog</a></h1>
      <button type="button">Logout</button>
    </div>
  );
}

function SearchBar() {
  return (
    <div class="search-bar">
      <input type="text" placeholder="Search.." name="search" />
    </div>
  );
}

function Main() {
  return (
    <div class="Main">
      <SearchBar />
      
    </div>
  );
}

function LeftSide () {
  return (
    <div class="leftside">
      <div>
        <p>Account:</p>
        <p>[nickname]</p>
      </div>
      <div>
        <button type="button">Upload</button>
      </div>
      <div>
        <FilterBox />
      </div>
    </div>
  )
}

function FilterBox() {
  return (
    <div>
      <div class="filter-box">
        <input type="checkbox" value="apparel"/>
        <label>Apparel</label>
        <hr/>
        <input type="checkbox" value="electronic"/>
        <label>Electronics</label>
        <hr/>
        <input type="checkbox" value="books"/>
        <label>Books</label>
        <hr/>
        <input type="checkbox" value="lab-equipment"/>
        <label>Lab Equipment</label>
        <hr/>
        <input type="checkbox" value="others"/>
        <label>Others</label>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="App">
      <SideNav />
      <Main />
      <LeftSide />
    </div>
  );
}

export default App;
