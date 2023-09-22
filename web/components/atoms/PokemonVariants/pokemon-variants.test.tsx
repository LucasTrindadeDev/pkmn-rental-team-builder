import { fireEvent, render, screen } from "@testing-library/react";
import Basculin from "./basculin";
import Darmanitan from "./darmanitan";
import Genies from "./genies";
import RegionalForms from "./regional-forms";
import Rotom from './rotom';
import Urshifu from "./urshifu";

describe("PokemonVariants", () => {
  const mockSearchPokemon = jest.fn()

  it('should render correctly all Basculin variants', () => {
    render(<Basculin searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("basculin red striped")).toBeInTheDocument()
    expect(screen.getByText("basculin blue striped")).toBeInTheDocument()
    expect(screen.getByText("basculin white striped")).toBeInTheDocument()
  })

  it('should search by the correct Basculin variant when it is clicked', () => {
    render(<Basculin searchPokemon={mockSearchPokemon} />);

    fireEvent.click(screen.getByText("basculin white striped"))

    expect(mockSearchPokemon).toHaveBeenCalledWith("basculin-white-striped")
  })

  it('should render correctly all Darmanitan variants', () => {
    render(<Darmanitan searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("darmanitan standard Mode")).toBeInTheDocument()
    expect(screen.getByText("darmanitan zen Mode")).toBeInTheDocument()
    expect(screen.getByText("darmanitan galar standard Mode")).toBeInTheDocument()
    expect(screen.getByText("darmanitan galar zen Mode")).toBeInTheDocument()
  })

  it('should render correctly a genie pokémon variants', () => {
    render(<Genies pokemon="landorus" searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("landorus therian")).toBeInTheDocument()
    expect(screen.getByText("landorus incarnate")).toBeInTheDocument()
  })
  
  it('should render correctly a pokémon regional variants', () => {
    render(<RegionalForms pokemon="meowth" searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("meowth")).toBeInTheDocument()
    expect(screen.getByText("meowth alola")).toBeInTheDocument()
    expect(screen.getByText("meowth galar")).toBeInTheDocument()
  })

  it('should render correctly all Rotom forms', () => {
    render(<Rotom pokemon="rotom" searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("rotom")).toBeInTheDocument()
    expect(screen.getByText("rotom mow")).toBeInTheDocument()
    expect(screen.getByText("rotom fan")).toBeInTheDocument()
    expect(screen.getByText("rotom frost")).toBeInTheDocument()
    expect(screen.getByText("rotom wash")).toBeInTheDocument()
    expect(screen.getByText("rotom heat")).toBeInTheDocument()
  })

  it('should render correctly the two Urshifu styles', () => {
    render(<Urshifu searchPokemon={mockSearchPokemon} />);

    expect(screen.getByText("urshifu single strike Style")).toBeInTheDocument()
    expect(screen.getByText("urshifu rapid strike Style")).toBeInTheDocument()
  })
})
