import { Fragment } from "react";

interface HeaderSection {
  redTitle?: string;
  title: any;
  whiteContent?: any;
  firstTitle?: any;
}
const HeaderSection = (props: HeaderSection) => {
  const { redTitle, title, whiteContent, firstTitle } = props;
  const newTitle = title
    .map((content: string, index: number) => (
      <Fragment key={index}>
        {content}
        {index !== content.length - 1 && <br />}
      </Fragment>
    ))
    .reduce((acc: any, curr: any) => [acc, " ", curr]);

  if (whiteContent) {
    return (
      <div>
        {redTitle && whiteContent && (
          <div className="text-center flex flex-col gap-6 xl:gap-5 lg:gap-4 md:gap-3">
            <p className="text-primary-100 text-base font-medium font-SFProMedium sm:text-xs">
              {redTitle}
            </p>
            <p className="text-white-100 xl:text-5xl sm:text-4xl text-6xl font-SFProMedium tracking-tight">
              {newTitle}
            </p>
            <p
              className={
                firstTitle
                  ? "text-white-60 text-2xl sm:text-xl max-w-[43%] lg:max-w-[68%] md:max-w-[83%] sm:max-w-[100%] mb:max-w-[100%] m-auto sm:mt-[4px]"
                  : "text-white-60 text-lg sm:text-sm max-w-[55%] sm:max-w-[100%] mb:max-w-[100%] m-auto sm:mt-[20px]"
              }
            >
              {whiteContent}
            </p>
          </div>
        )}
        {!redTitle && whiteContent && (
          <div className="text-center flex flex-col gap-6 xl:gap-5 lg:gap-4 md:gap-3">
            <p className="text-white-100 xl:text-5xl sm:text-4xl text-6xl font-SFProMedium tracking-tight ">
              {newTitle}
            </p>
            <p
              className={
                firstTitle
                  ? "text-white-60 text-2xl sm:text-xl max-w-[43%] lg:max-w-[68%] md:max-w-[83%] sm:max-w-[100%] mb:max-w-[100%] m-auto sm:mt-[4px]"
                  : "text-white-60 text-lg sm:text-sm max-w-[55%] sm:max-w-[100%] mb:max-w-[100%] m-auto sm:mt-[20px]"
              }
            >
              {whiteContent}
            </p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <>
        {!redTitle && !whiteContent && (
          <div className="text-center flex flex-col gap-6 xl:gap-5 lg:gap-4 md:gap-3">
            <p className="text-white-100 xl:text-5xl sm:text-4xl text-6xl font-SFProMedium tracking-tight">
              {newTitle}
            </p>
          </div>
        )}
        {redTitle && !whiteContent && (
          <div className="text-center flex flex-col gap-6 xl:gap-5 lg:gap-4 md:gap-3">
            <p className="text-primary-100 text-base font-medium font-SFProMedium sm:text-xs">
              {redTitle}
            </p>
            <p className="text-white-100 xl:text-5xl sm:text-4xl text-6xl font-SFProMedium tracking-tight">
              {newTitle}
            </p>
          </div>
        )}
      </>
    );
  }
};
export default HeaderSection;
