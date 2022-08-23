import { Route, Link, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Shubham", text: "Life is beautiful." },
  { id: "q2", author: "Rancho", text: "All is well." },
];
const QuotesDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quotesId);
  if (!quote) {
    return <p>No Quotes Found!</p>;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link to={`/quotes/${quote.id}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quotesId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuotesDetails;
