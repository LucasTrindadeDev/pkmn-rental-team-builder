import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import PokemonTypes from ".";

describe("PokemonTypes", () => {
  const mockTypes = [
    "fire",
    "fighting"
  ]

  const mockTeraType = mockTypes[Math.random() * (2 - 1 + 1) + 1]

  it("should render correctly", () => {
    render(
      <PokemonTypes types={mockTypes} teratype={mockTeraType} />
    );

    expect(screen.getByAltText("Fire")).toBeInTheDocument()
    expect(screen.getByAltText("Fighting")).toBeInTheDocument()
  })

  it("should show a list of all types when the user clicks on the Tera type", async () => {
    render(
      <PokemonTypes types={mockTypes} teratype={mockTeraType} />
    )

    fireEvent.click(screen.getByAltText("Tera type"))

    await waitFor(() => expect(screen.getByAltText("Water Tera type")).toBeInTheDocument())
  })

  it("should change the Tera type when the user clicks on a type from the list", async () => {
    const mockSetTeraType = jest.fn()

    render(
      <PokemonTypes types={mockTypes} teratype={mockTeraType} setTeraType={mockSetTeraType} />
    )

    fireEvent.click(screen.getByAltText("Tera type"))

    await waitFor(() => expect(screen.getByAltText("Water Tera type")).toBeInTheDocument())

    fireEvent.click(screen.getByAltText("Water Tera type"))

    await waitFor(() => expect(mockSetTeraType).toHaveBeenCalledWith("water"))
  })
})
