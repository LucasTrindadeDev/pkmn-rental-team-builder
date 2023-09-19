import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import AddItem from ".";

describe("AddItem", () => {
  const mockSetItem = jest.fn();

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <AddItem setItem={mockSetItem} />
      </Provider>
    );

    expect(screen.getByTestId("item-form")).toBeInTheDocument();
    expect(screen.getByTestId("item-input")).toBeInTheDocument();
  });

  it("should change the value of the input when the user types", async () => {
    render(
      <Provider store={store}>
        <AddItem setItem={mockSetItem} />
      </Provider>
    );

    const input = screen.getByTestId("item-input");

    await userEvent.type(input, "choice");

    expect(input).toHaveValue("choice");
  });

  // it("should suggest items when the user types in the field", async () => {
  //   render(
  //     <Provider store={store}>
  //       <AddItem setItem={mockSetItem} />
  //     </Provider>
  //   );

  //   const input = screen.getByTestId("item-input");

  //   await userEvent.type(input, "choice");

  //   const firstSuggestion = await screen.findByText("Choice Band");
  //   const secondSuggestion = await screen.findByText("Choice Scarf");
  //   const thirdSuggestion = await screen.findByText("Choice Specs");

  //   expect(firstSuggestion).toBeInTheDocument();
  //   expect(secondSuggestion).toBeInTheDocument();
  //   expect(thirdSuggestion).toBeInTheDocument();
  // });
});
