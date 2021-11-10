import React from "react";
import { Switch, Route } from "react-router-dom";
import { PokemonList } from "../PokemonList/PokemonList";

export const Router = () => {
  return (
    <main className="">
      <Switch>
        <Route exact path="/">
          {/* Home Page */}
          <PokemonList />
        </Route>
        <Route exact path="/pokemons/:id">
          {/* Individual View */}
        </Route>
      </Switch>
    </main>
  );
};
