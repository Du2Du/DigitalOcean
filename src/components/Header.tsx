import React, { useState, useEffect } from "react";
import { HeaderStyled } from "./Style";
import { FaDigitalOcean as Logo } from "react-icons/fa";
import { AiOutlineSearch as Lupa } from "react-icons/ai";
import api from "../services/api";

interface Popular_Topics {
  item: string;
  url: string;
}

const Header: React.FC = () => {
  const [topics, updateTopics] = useState<Popular_Topics[]>([]);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  useEffect(() => {
    api.get("api-digitalocean", { headers }).then((response) => {
      updateTopics(response.data.Popular_topics);
      console.log(response.data.Popular_topics);
    });
  }, []);

  return (
    <HeaderStyled>
      <div id="primary">
        <a href="#">
          <span>NEW</span>
          <p>
            NEW Introducing DigitalOcean Managed MongoDB — a fully managed,
            database as a service for modern apps
          </p>
        </a>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div id="secondary">
        <div>
          <a href="#" id="logo">
            <Logo size={30} />
          </a>
          <p id="name">Community</p>
          <ul>
            <li>Tutorials</li>
            <li>Questions</li>
            <li>Tech Talks</li>
          </ul>
        </div>
        <div>
          <button id="searchc">
            {" "}
            <Lupa size={20} /> <p>Search Community</p>
          </button>
          <button>Sign Up</button>
        </div>
      </div>
      <div id="third">
        <nav>
          <ul>
            <li>
              <a href="#">Popular topics:</a>
            </li>
            {topics.map((topic) => (
              <li>
                <a href={topic.url}> {topic.item} </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
