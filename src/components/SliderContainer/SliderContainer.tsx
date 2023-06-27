import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Button from "../Button/Button";
import { Breakpoints, useBreakpoint } from "../../utils";

const MOBILE_MENU_HEIGHT = "90px";
const SliderContainer = (props: { className: any; onSlideChange: any }) => {
  const { className, onSlideChange } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesCount = 3;
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === Breakpoints.sm;

  const splideRef = useRef<Splide>(null);

  const handleSlideChange = () => {
    onSlideChange && onSlideChange(currentSlide);
  };

  useEffect(() => {
    handleSlideChange();
  }, [currentSlide]);

  // triggered only after a drag not nav buttons
  const onMoved = (splide: any) => {
    if (splideRef.current) {
      setCurrentSlide(splide.index);
    }
  };

  const goToNextSlide = () => {
    if (splideRef.current && currentSlide < slidesCount - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      splideRef.current.go("+1");
    }
  };

  const goToPreviousSlide = () => {
    if (splideRef.current && currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      splideRef.current.go("-1");
    }
  };

  const Slider = (): JSX.Element => {
    const sliderOptions: Options = {
      direction: "ttb",
      pagination: false,
      gap: "5rem",
      start: currentSlide,
      arrows: false,
      height: "100vh",
      breakpoints: {
        640: {
          height: `calc(100vh - ${MOBILE_MENU_HEIGHT})`,
        },
      },
    };

    return (
      <Splide
        onMove={handleSlideChange}
        onMoved={onMoved}
        ref={splideRef}
        aria-label="Questions Media Slider"
        options={sliderOptions}
        className=""
      >
        <SplideSlide key={1} className="flex overflow-hidden">
          <img
            className="object-cover"
            src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide key={2} className="flex overflow-hidden">
          <img
            className="object-cover"
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide key={3} className="flex overflow-hidden">
          <img
            className="object-cover"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="Image 1"
          />
        </SplideSlide>

        <div className="splide__arrows absolute right-0 top-1/2 flex -translate-y-1/2  transform flex-row-reverse">
          <button className="splide__arrow splide__arrow--prev">
            <Icon name="CircleCaret" className={""} />{" "}
          </button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    );
  };

  const SliderNav = (): JSX.Element => {
    return (
      <div className="absolute right-0 top-1/2 z-[100] flex -translate-y-1/2 transform flex-col gap-3 p-2">
        <Button
          id={`previous-question`}
          className="top-4"
          icon="CircleCaret"
          iconOnly
          label="Previous Question"
          onClick={goToPreviousSlide}
        />
        <Button
          id={`next-question`}
          className="top-4 rotate-180"
          icon="CircleCaret"
          iconOnly
          label="Next Question"
          onClick={goToNextSlide}
        />
      </div>
    );
  };

  return (
    <div className={`${className} relative flex h-full bg-black`}>
      <Icon name="VersusLight" className="absolute left-4 top-4 z-[100]" />
      {!isMobile && <SliderNav />}
      <Slider />
    </div>
  );
};

SliderContainer.propTypes = {
  className: PropTypes.string,
  onSlideChange: PropTypes.func,
};

export default React.memo(SliderContainer);
