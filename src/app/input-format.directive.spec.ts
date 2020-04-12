import { InputFormatDirective } from "./input-format.directive";

describe("InputFormatDirective", () => {
    let elRefMock = {
        nativeElement: document.createElement("div"),
    };
    it("should create an instance", () => {
        const directive = new InputFormatDirective(elRefMock);
        expect(directive).toBeTruthy();
    });
});
