import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // })

    // beforeEach(() => {
    //     console.log("Before Each");
    // })

    // afterAll(() => {
    //     console.log("After All");
    // })

    // afterEach(() => {
    //     console.log("After Each");
    // })

    it("should load contact us component", () => {
        // console.log("First test case");
        //rendering
        render(<Contact />);
        //Querying
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })

    it("should load button inside contact component", () => {
        // console.log("Second test case");
        render(<Contact />);
        //Querying
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    })

    it("should load input name inside contact component", () => {
        // console.log("Third test case");
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        //Assertion
        expect(input).toBeInTheDocument();
    })

    it("should load 2 input boxes in contact component", () => {
        // console.log("Fourth test case");
        render(<Contact />);

        //This will give all input boxes
        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    })
})