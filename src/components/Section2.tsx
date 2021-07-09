import React, { useEffect, useState } from "react";
import { Section2Styled } from "./Style";
import api from "../services/api";

interface Featured_Content {
  subtitulo: string;
  titulo: string;
  imagem: string;
  descricao: string;
  url: string | undefined;
}
const Section2: React.FC = () => {
  const [contents, updateContents] = useState<Featured_Content[]>([]);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  useEffect(() => {
    api.get("api-digitalocean", { headers }).then((response) => {
      updateContents(response.data.Featured_Content);
      console.log(response.data.Featured_Content);
    });
  }, []);

  return (
    <>
      <Section2Styled>
        <div id="community">
          {contents.map((content) => (
            <div>
              <a href={content.url}>
                <img src={content.imagem} />
                <small> {content.subtitulo} </small>
                <h4>{content.titulo}</h4>
                <p> {content.descricao} </p>
              </a>
            </div>
          ))}
        </div>
      </Section2Styled>
    </>
  );
};

export default Section2;
