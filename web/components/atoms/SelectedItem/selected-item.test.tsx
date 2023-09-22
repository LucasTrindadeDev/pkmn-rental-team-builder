import { fireEvent, render, screen } from "@testing-library/react";
import SelectedItem from ".";

describe("SelectedItem", () => {
  const mockItem = {
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/life-orb.png",
    name: "life-orb",
  }

  const mockSetItem = jest.fn();

  it("should render correctly", () => {
    render(
        <SelectedItem item={mockItem} setItem={mockSetItem} />
    );

    expect(screen.getByText("Life Orb")).toBeInTheDocument();
    expect(screen.getByAltText("life-orb")).toBeInTheDocument();
  });

  it("should remove the item when the X icon is clicked", async () => {
    render(
      <SelectedItem item={mockItem} setItem={mockSetItem} />
    );

    expect(screen.getByText("Life Orb")).toBeInTheDocument();
    expect(screen.getByAltText("life-orb")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("remove-item"))

    expect(mockSetItem).toHaveBeenCalledWith(undefined)
  })
})
