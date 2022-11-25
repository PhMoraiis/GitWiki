import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
        <img src={repo.owner.avatar_url} alt="" />
        <hr />
        <a href={repo.html_url} rel="noreferrer" target="_blank" className="visualizar">Ver Repositório</a><br />
        <a onClick={handleRemove} href="#" rel="noreferrer" className="remover">Remover</a>
    </ItemContainer>
    );
}

export { ItemRepo };