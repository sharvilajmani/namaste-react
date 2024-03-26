import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search Res List for chinese text input", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "chinese" } });

    fireEvent.click(searchBtn);

    //screen should load 1 card
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
})

it("should filter top rated restaurants", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);
})