import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store, configureStore } from "@reduxjs/toolkit";
import ChooseGame from ".";
import { TeamSlice } from "../../../store/features/teamSlice";

describe("ChooseGame", () => {
  let store: Store

  beforeAll(() => {
    store = configureStore({
      reducer: {
        team: TeamSlice.reducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })
  })

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <ChooseGame />
      </Provider>
    );

    expect(screen.getByAltText("Uva Academy")).toBeInTheDocument()
  })

  it("should change the game when the user clicks in the image", async () => {
    render(
      <Provider store={store}>
        <ChooseGame />
      </Provider>
    )

    expect(screen.getByAltText("Uva Academy")).toBeInTheDocument()

    fireEvent.click(screen.getByAltText("Uva Academy"))

    await waitFor(() => expect(screen.getByAltText("Naranja Academy")).toBeInTheDocument())
  })
})
