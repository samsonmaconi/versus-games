import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import Button from "../Button/Button";
import { Breakpoints, useBreakpoint } from "../../utils";
import { VideoPlayer } from "../VideoPlayer";
import {
  updateActiveQuestionIndex,
  useAppDispatch,
  useAppSelector,
} from "../../redux";

const MOBILE_MENU_HEIGHT = "90px";

const SliderContainer = (props: { className: any; onSlideChange: any }) => {
  const { className, onSlideChange } = props;
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === Breakpoints.sm;
  const splideRef = useRef<Splide>(null);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesCount = 3;

  // const allQuestions = useAppSelector(
  //   (state) => state.gameQuestions.allQuestions,
  //   () => true
  // );

  const dispatcher = useAppDispatch();

  const handleSlideChange = () => {
    dispatcher(updateActiveQuestionIndex(currentSlide));
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
      video: {
        autoplay: true,
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
        {/* <li
          className="splide__slide"
          data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img src="preview02.jpg" />
        </li> */}
        {/* <SliderVideoSlide src="https://www.youtube.com/watch?v=cdz__ojQOuU" /> */}
        <SliderVideoSlide src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <SliderImageSlide
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="Tree"
        />
        <SliderImageSlide
          src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
          alt="Flower"
        />
        <SliderImageSlide
          src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          alt="taj-mahal-mausoleum-in-agra"
        />
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

  const SliderImageSlide = (props: {
    src: string;
    alt?: string;
  }): JSX.Element => {
    const { src, alt } = props;
    return (
      <SplideSlide className="flex overflow-hidden">
        <img className="object-cover" src={src} alt={alt} />
      </SplideSlide>
    );
  };

  const SliderVideoSlide = (props: {
    src: string;
    autoplay?: boolean;
  }): JSX.Element => {
    const { src, autoplay } = props;
    const _autoplay = autoplay === undefined ? true : autoplay;
    return (
      <SplideSlide className="flex overflow-hidden">
        <VideoPlayer
          className="object-cover"
          videoUrl={src}
          autoplay={_autoplay}
        />
      </SplideSlide>
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
