import QuoteList from "../components/quotes/QuoteList"
const DUMMY_QUOTES = [
    {id : "q1", author : "Shubham", text : "Life is beautiful."},
    {id : "q2", author : "Rancho", text : "All is well."}
]
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes