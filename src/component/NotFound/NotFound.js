import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt={404}
          />
          <span>Error 404</span>
          <p className="p-a">
            Page not found! Looks like the URL went on a vacation without
            leaving a forwarding address. Let's hope it's enjoying some sunny
            beaches and will be back soon!
          </p>
          <p className="p-b">
            Click here to{" "}
            <Link to={"/home"} className="p-b">
              Go Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
