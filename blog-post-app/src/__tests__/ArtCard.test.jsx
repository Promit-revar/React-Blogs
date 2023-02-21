import ArtCard from "../components/ArtCard";
import { render, fireEvent} from "@testing-library/react";
import React from "react";
import data from "../assets/mockData/index.json";
describe("ArtCard", () => {
  test("should increase value of claps by 1 when clap is clicked", () => {
    const artCard= render(<ArtCard data={data.data[0]} funcClap={jest.fn()} index={0} like={jest.fn()} liked={[false]}/>);
    const clap = artCard.getByTestId("clap");
    const numberofClaps = artCard.getByTestId("numberOfClaps");
    expect(numberofClaps.innerHTML).toBe("10");
    expect(clap).toBeTruthy();
  });
  test("should call like function of the parent component", () => {
    const likeFn = jest.fn();
    const artCard= render(<ArtCard data={data.data[0]} funcClap={jest.fn()} index={0} like={likeFn} liked={[false]}/>);
    const heart = artCard.getByTestId("heartB");
    fireEvent.click(heart);
    expect(likeFn).toBeCalledWith(0);
  });
  test("should call funcClap function of the parent component",()=>{
    const clapFn = jest.fn();
    const artCard= render(<ArtCard data={data.data[0]} funcClap={clapFn} index={0} like={jest.fn()} liked={[false]}/>);
    const clapImg = artCard.getByTestId("clap");
    //console.log(clapImg);
    fireEvent.click(clapImg);
    expect(clapFn).toBeCalledWith(0);
  })
});