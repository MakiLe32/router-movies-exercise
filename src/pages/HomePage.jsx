import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";

function HomePage() {
  return (
    <PageContent title="Welcome!">
      <img
        style={{ height: "15rem" }}
        src="/movienight.png"
        alt="movie-night-png"
      />
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/movies">
        <h3>Feel free to browse our movie collection!</h3>
      </Link>
    </PageContent>
  );
}

export default HomePage;
