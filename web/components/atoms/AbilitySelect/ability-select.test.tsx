import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AbilitySelect from ".";

describe("AbilitySelect", () => {
  const mockSetAbility = jest.fn();

  describe("Pokémon with more than one ability", () => {
    const mockAbilities = [
      {
        name: "flame-body",
        slot: 1,
        is_hidden: false,
      },
      {
        name: "gale-wings",
        slot: 3,
        is_hidden: true,
      },
    ];

    it("should render correctly with the default ability", () => {
      render(
        <AbilitySelect abilities={mockAbilities} setAbility={mockSetAbility} />
      );

      const defaultAbility = screen.getByText("Flame Body");

      expect(defaultAbility).toBeInTheDocument();
    });

    it("should show an arrow when there's more than one ability", () => {
      render(
        <AbilitySelect abilities={mockAbilities} setAbility={mockSetAbility} />
      );

      expect(screen.getByTestId("chevron-down")).toBeInTheDocument();
    });

    it("should show the ability list when the ability is clicked", async () => {
      render(
        <AbilitySelect abilities={mockAbilities} setAbility={mockSetAbility} />
      );

      const selectTrigger = screen.getByTestId("chevron-down");
      userEvent.click(selectTrigger);

      const abilityList = await screen.findByTestId("ability-list");
      const secondaryAbility = await screen.findByText("Gale Wings");

      expect(abilityList).toBeInTheDocument();
      expect(secondaryAbility).toBeInTheDocument();
    });

    it("should change the ability when other ability in the list is clicked", async () => {
      render(
        <AbilitySelect abilities={mockAbilities} setAbility={mockSetAbility} />
      );

      const ability = screen.getByTestId("ability");
      expect(ability).toHaveTextContent("Flame Body");

      const selectTrigger = screen.getByTestId("chevron-down");
      userEvent.click(selectTrigger);

      const secondaryAbility = await screen.findByText("Gale Wings");
      await userEvent.click(secondaryAbility);

      expect(mockSetAbility).toHaveBeenCalledWith("gale-wings");
      expect(ability).toHaveTextContent("Gale Wings");
    });
  });

  describe("Pokémon with just one ability", () => {
    const mockAbilities = [
      {
        name: "quark-drive",
        slot: 1,
        is_hidden: false,
      },
    ];

    it("should render correctly", () => {
      render(
        <AbilitySelect abilities={mockAbilities} setAbility={mockSetAbility} />
      );

      const ability = screen.getByText("quark-drive");
      expect(ability).toBeInTheDocument();
    });
  });
});
