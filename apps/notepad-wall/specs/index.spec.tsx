import React from "react";

import Page from "../src/app/page";
import { render } from "@testing-library/react";

describe("Page", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Page />);
		expect(baseElement).toBeTruthy();
	});
});
