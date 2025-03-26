"use client";

export function NavigationHeader() {
  return (
    <nav className="flex overflow-hidden flex-col justify-center self-stretch px-32 py-4 w-full bg-gray-950 min-h-[86px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col justify-center py-1.5 w-[183px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4e07f2b37f0a21a6cdbf6735f21b43b265599c?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
            alt="Company Logo"
            className="object-contain aspect-[4.35] w-[183px]"
          />
        </div>
        <div className="flex flex-wrap gap-10 items-center my-auto text-base min-w-60 max-md:max-w-full">
          <div className="self-stretch my-auto font-light text-center min-w-60 text-neutral-600 w-[280px]">
            <div className="w-full shadow-md">
              <button className="flex gap-5 justify-between px-5 py-3.5 w-full bg-white shadow-md rounded-[100px]">
                <span>Search local talent</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/76c24f93cd271795cc09bb451a7ba69ee56d3db1?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
                  alt="Search"
                  className="object-contain shrink-0 my-auto w-5 aspect-square rounded-[60px]"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-0 items-center self-stretch my-auto leading-loose min-w-60 text-stone-50 w-[416px]">
            <nav className="flex gap-8 items-center self-stretch my-auto whitespace-nowrap">
              <a
                href="#reviews"
                className="gap-2.5 self-stretch py-3.5 my-auto"
              >
                Reviews
              </a>
              <a href="#about" className="gap-2.5 self-stretch py-3.5 my-auto">
                About
              </a>
            </nav>
            <div className="flex gap-3.5 items-center self-stretch my-auto min-w-60">
              <button className="gap-2.5 self-stretch px-9 py-3 my-auto rounded-lg bg-violet-400 bg-opacity-0 min-h-[49px] max-md:px-5">
                Sign Up
              </button>
              <button className="gap-2.5 self-stretch px-9 py-3 my-auto bg-orange-600 rounded-lg min-h-[49px] max-md:px-5">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
