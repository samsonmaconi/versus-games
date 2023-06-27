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
import { QnAQuestion } from "../../api/QnA";

const MOBILE_MENU_HEIGHT = "90px";

const SliderContainer = (props: { className: any; onSlideChange: any }) => {
  const { className, onSlideChange } = props;
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === Breakpoints.sm;

  const dispatcher = useAppDispatch();
  const allQuestions: QnAQuestion[] = useAppSelector(
    (state) => state.gameQuestions.allQuestions
  );
  const slidesCount = allQuestions.length;

  const splideRef = useRef<Splide>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
        {allQuestions.map((question, index) => {
          const { id, gameVideoUrl } = question;
          return (
            <SliderVideoSlide
              key={id}
              src={gameVideoUrl}
              autoplay={currentSlide === index}
            />
          );
        })}
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
          className={`${
            currentSlide === 0 ? "cursor-not-allowed opacity-50" : ""
          } top-4`}
          icon="CircleCaret"
          iconOnly
          label="Previous Question"
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
        />
        <Button
          id={`next-question`}
          className={`${
            currentSlide === slidesCount - 1
              ? "cursor-not-allowed opacity-50"
              : ""
          } top-4 rotate-180`}
          icon="CircleCaret"
          iconOnly
          label="Next Question"
          onClick={goToNextSlide}
          disabled={currentSlide === slidesCount - 1}
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
    return (
      <SplideSlide className="flex overflow-hidden">
        <VideoPlayer
          className="object-cover"
          videoUrl={src}
          autoplay={autoplay}
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
