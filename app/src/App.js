import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import { connect } from "react-redux";
import { getQuotes } from "./state/actionCreators";

function App({ quotes, getQuotes }) {
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {quotes.map(quote => {
          return <QuoteCard text={quote.en} author={quote.author} />;
        })}
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  };
}

export default connect(mapStateToProps, { getQuotes })(App);
