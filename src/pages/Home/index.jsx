import Nav from "../../components/Nav";

function Home() {
  return (
    <div className="background_image">
      <header>
        <Nav />
      </header>
      <div className="home">
        <h2> Bem vindo a </h2>
        <h1> ACTION: TYPE </h1>
        <h1>FIGURE</h1>
      </div>
    </div>
  );
}

export default Home;
