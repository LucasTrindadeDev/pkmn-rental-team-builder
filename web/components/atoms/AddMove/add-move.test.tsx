import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddMove from ".";

describe("AddMove", () => {
  const mockSetMove = jest.fn();

  const mockLearnableMoves = [
    {
      move: {
        "name": "heat-wave",
        "url": "https://pokeapi.co/api/v2/move/257/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        "name": "overheat",
        "url": "https://pokeapi.co/api/v2/move/315/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    }
  ];

  it("should render correctly", () => {
    const { container } = render(
      <AddMove learnableMoves={mockLearnableMoves} setMove={mockSetMove} disabled={false} />
    );

    expect(container).toBeInTheDocument();
  });

  it("should show move suggestions based on what the user types", async() => {
    render(
      <AddMove setMove={mockSetMove} disabled={false} learnableMoves={mockLearnableMoves} />
    )

    const input = screen.getByPlaceholderText('Move name')
    fireEvent.change(input, { target: { value: "hea" } })

    await waitFor(() => screen.getByText("Heat Wave"))

    const suggestedMove1 = screen.getByText("Heat Wave")
    const suggestedMove2 = screen.getByText("Overheat")

    expect(suggestedMove1).toBeInTheDocument()
    expect(suggestedMove2).toBeInTheDocument()
  })

  // it("should search for the move and set it correctly", async () => {
  //   render(
  //     <AddMove learnableMoves={mockLearnableMoves} setMove={mockSetMove} disabled={false} />
  //   )
    
  //   const input = screen.getByPlaceholderText('Move name')
  //   fireEvent.change(input, { target: { value: 'leer' } })
  //   fireEvent.submit(screen.getByTestId('move-form'));

  //   await waitFor(() => {
  //     expect(mockSetMove).toHaveBeenCalledWith({
  //       type: 'fire',
  //       name: 'heat-wave'
  //     });
  //   })
  // })

});
