import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { PokedexSlice, setPokedex } from "../../../store/features/pokedexSlice";
import AddPokemon from ".";
import { Store, configureStore } from "@reduxjs/toolkit";
import { TeamSlice } from "../../../store/features/teamSlice";

describe("AddPokemon", () => {
  let store: Store

  beforeAll(() => {
    store = configureStore({
      reducer: {
        pokedex: PokedexSlice.reducer,
        team: TeamSlice.reducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })

    const mockPokedex = [
      {
        "entry_number": 4,
        "pokemon_species": {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
        }
      },
      {
        "entry_number": 5,
        "pokemon_species": {
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
        }
      },
      {
        "entry_number": 6,
        "pokemon_species": {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
        }
      },
    ]

    store.dispatch(setPokedex({ pokedex: mockPokedex }));
  })

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <AddPokemon />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Pokémon name")).toBeInTheDocument();
  });

  it("should change the value of the input when the user types", async () => {
    render(
      <Provider store={store}>
        <AddPokemon />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Pokémon name");

    await userEvent.type(input, "charmander");

    expect(input).toHaveValue("charmander");
  });

  it("should suggest pokémon when the user types in the input", async () => {
    render(
      <Provider store={store}>
        <AddPokemon />
      </Provider>
    )

    const input = screen.getByPlaceholderText('Pokémon name')
    fireEvent.change(input, { target: { value: "char" } })

    await waitFor(() => screen.getByText("charmander"))

    const suggestedPokemon1 = screen.getByText("charmander")
    const suggestedPokemon2 = screen.getByText("charmeleon")
    const suggestedPokemon3 = screen.getByText("charizard")

    expect(suggestedPokemon1).toBeInTheDocument()
    expect(suggestedPokemon2).toBeInTheDocument()
    expect(suggestedPokemon3).toBeInTheDocument()
  })

  // it("should search for the pokémon and add it to the store if it exists", async () => {
  //   const spy = jest.spyOn(store, 'dispatch')

  //   render(
  //     <Provider store={store}>
  //       <AddPokemon />
  //     </Provider>
  //   )

  //   const input = screen.getByPlaceholderText('Pokémon name')
  //   fireEvent.change(input, { target: { value: "char" } })

  //   await waitFor(() => screen.getByText("charizard"))
  //   const suggestedPokemon = screen.getByText("charizard")

  //   fireEvent.click(suggestedPokemon)

  //   await waitFor(() => expect(spy).toHaveBeenCalled())
  // })
})
