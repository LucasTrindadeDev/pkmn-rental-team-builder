import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SaveTeam from ".";
import { Store, configureStore } from "@reduxjs/toolkit";
import { TeamSlice } from "../../../store/features/teamSlice";

describe("SaveTeam", () => {
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
        <SaveTeam />
      </Provider>
    );

    expect(screen.getByText("Save Team")).toBeInTheDocument();
  });
})
