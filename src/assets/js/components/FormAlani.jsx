import { createElement } from "react";

export default function FormAlani({ kayan_yazi, renk, form, form_props={} }) {
  if (renk == "logo") {
    renk = "text-logo-color"
  }
  else if (renk == "yesil") {
    renk = "text-green-900"
  }
  else if (renk == "kirmizi") {
    renk = "text-red-900"
  }
  return (
    <div className="relative flex flex-col justify-center form-pattern py-4 overflow-hidden">
      <div className="absolute h-full flex items-center z-0">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll">
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
            <span className={renk + " font-extrabold text-8xl 2xl:text-[11rem]"}>{kayan_yazi}</span>
          </div>
        </div>
      </div>
      <div className="w-screen relative z-10">
        <div className="container m-auto flex items-center justify-center lg:justify-end gap-4">
          <div className="basis-2/3 max-w-md">
            {createElement(form, form_props)}
          </div>
        </div>
      </div>
    </div>
  );
}

