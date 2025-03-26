export function SocialLogin() {
  return (
    <>
      <div className="flex gap-4 items-center mx-0 my-6">
        <div className="flex-1 h-px bg-zinc-300" />
        <p className="text-base leading-7 text-slate-700">Or Continue with</p>
        <div className="flex-1 h-px bg-zinc-300" />
      </div>
      <div className="flex gap-4 justify-center max-sm:flex-wrap">
        <button
          className="flex justify-center items-center px-2.5 py-3 rounded-xl border border-solid border-zinc-300 h-[52px] w-[52px] bg-white"
          aria-label="Sign in with Google"
        >
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4034_145)">
              <path
                d="M27.727 15.1563C27.727 14.2046 27.6498 13.2478 27.4852 12.3115H14.28V17.7027H21.842C21.5282 19.4414 20.5199 20.9795 19.0435 21.9569V25.455H23.555C26.2043 23.0167 27.727 19.4157 27.727 15.1563Z"
                fill="#4285F4"
              />
              <path
                d="M14.28 28.8346C18.0558 28.8346 21.2401 27.5949 23.5602 25.4549L19.0487 21.9568C17.7935 22.8107 16.173 23.2943 14.2851 23.2943C10.6327 23.2943 7.5359 20.8302 6.42475 17.5173H1.76923V21.1234C4.14586 25.851 8.98657 28.8346 14.28 28.8346Z"
                fill="#34A853"
              />
              <path
                d="M6.41966 17.5174C5.83322 15.7787 5.83322 13.8959 6.41966 12.1571V8.55103H1.76928C-0.216388 12.5069 -0.216388 17.1676 1.76928 21.1235L6.41966 17.5174Z"
                fill="#FBBC04"
              />
              <path
                d="M14.28 6.37501C16.2759 6.34415 18.205 7.0952 19.6505 8.47386L23.6476 4.47679C21.1166 2.10016 17.7575 0.79353 14.28 0.834684C8.98657 0.834684 4.14586 3.81833 1.76923 8.55102L6.4196 12.1571C7.52561 8.8391 10.6276 6.37501 14.28 6.37501Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_4034_145">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0 0.83374)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          className="flex justify-center items-center px-2.5 py-3 rounded-xl border border-solid border-zinc-300 h-[52px] w-[52px] bg-white"
          aria-label="Sign in with Facebook"
        >
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4034_370)">
              <path
                d="M28 14.8337C28 7.10175 21.732 0.83374 14 0.83374C6.26801 0.83374 0 7.10175 0 14.8337C0 21.8214 5.11957 27.6134 11.8125 28.6637V18.8806H8.25781V14.8337H11.8125V11.7494C11.8125 8.24061 13.9027 6.30249 17.1005 6.30249C18.6318 6.30249 20.2344 6.57593 20.2344 6.57593V10.0212H18.4691C16.73 10.0212 16.1875 11.1005 16.1875 12.2087V14.8337H20.0703L19.4496 18.8806H16.1875V28.6637C22.8804 27.6134 28 21.8214 28 14.8337Z"
                fill="#1877F2"
              />
              <path
                d="M19.4496 18.8806L20.0703 14.8337H16.1875V12.2087C16.1875 11.1016 16.73 10.0212 18.4691 10.0212H20.2344V6.57593C20.2344 6.57593 18.6323 6.30249 17.1005 6.30249C13.9027 6.30249 11.8125 8.24062 11.8125 11.7494V14.8337H8.25781V18.8806H11.8125V28.6637C13.262 28.8904 14.738 28.8904 16.1875 28.6637V18.8806H19.4496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4034_370">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0 0.83374)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
}

export default SocialLogin;