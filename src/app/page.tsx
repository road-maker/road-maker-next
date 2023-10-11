"use client";
// import { Carousel } from "@mantine/carousel";
import BaseLayout from "./components/layouts/BaseLayout";
import Skeletons from "./components/shared/skeletons";

export default function Main() {
  // const slides = (
  //   <>
  //     <Carousel.Slide className="slide magenta">1</Carousel.Slide>
  //     <Carousel.Slide className="slide purple">2</Carousel.Slide>
  //     <Carousel.Slide className="slide green">3</Carousel.Slide>
  //   </>
  // );
  return (
    <>
      <BaseLayout>
        <div id="skeleton">
          <Skeletons />
        </div>
        {/* <Carousel orientation="vertical" height={"100vh"} loop withIndicators> */}
        {/* {slides} */}
        {/* </Carousel> */}
      </BaseLayout>
    </>
  );
}
