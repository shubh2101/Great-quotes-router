import {Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments"

const QuotesDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>QuotesDetails Page</h1>
      <p>{params.quotesId}</p>
      <Route path="/quotes/:quotesId/comments">
        <Comments/>
      </Route>
    </section>
  );
};

export default QuotesDetails;
