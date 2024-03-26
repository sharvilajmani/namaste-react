import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load Restaurant Menu component", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Recommended(20)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    //We added 2 more items in cart. Cart is reusing ItemList componet and we have same testid foodItems
    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    //After clearing cart, items are back to 20
    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(screen.getByText("Cart is empty. Add items to the cart.")).toBeInTheDocument();

})