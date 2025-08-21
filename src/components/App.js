import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/data";

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

