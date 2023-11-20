import React from "react";

const More = () => {
  return (
    <div className=" lg:pt-32 md:px-10 mx-auto pt-16 bg-[#0d1117]">
      <div className="bg-[#0d1117] flex">
        <div
          class=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          style={{
            background:
              "linear-gradient(rgb(210, 168, 255), rgb(163, 113, 247) 10%, rgb(25, 108, 46) 70%, rgb(46, 160, 67) 80%, rgb(86, 211, 100))",
            marginLeft: "11px",
          }}
        ></div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Productivity</h1>
          <h1 className="text-green-600 text-3xl font-semibold px-4 mb-4 md:w-9/12 mx-auto">
            Accelerate innovation
          </h1>

          <h1 className="text-white px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold ">
            Our AI-powered platform increases the pace of software development.
          </h1>
          <div className=" w-full h-auto">
            <img
              src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png"
              alt="Productivity Illustration"
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#0d1117] flex">
        <div
          class=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          style={{
            background:
              "linear-gradient(rgb(210, 168, 255), rgb(163, 113, 247) 10%, rgb(25, 108, 46) 70%, rgb(46, 160, 67) 80%, rgb(86, 211, 100))",
            marginLeft: "11px",
          }}
        ></div>
        <div class="pr-md-4 m-4  mt-8">
          <h2 class=" text-[#7d8590] mb-3 text-3xl md:text-2xl ">
            <span className="text-white">GitHub Copilot</span> empowers
            developers to complete tasks 55%
            <br />
            faster with contextualized AI coding assistance across workflows.
          </h2>
          <a
            href="/features/copilot"
            class="text-semibold text-fg-default py-1 text-lg text-white md:text-xl"
          >
            Explore GitHub Copilot
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 inline-block align-middle"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                class="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
          <div className="m-4">
            <h1 className="text-green-600 text-4xl font-extrabold">
              22% increase
            </h1>
            <h1 className="text-white px-4 mb-4 md:w-9/12  lg:text-5xl md:text-4xl text-3xl font-bold ">
              in developer productivity after three years with GitHub
            </h1>
          </div>
        </div>
      </div>
      <div class="relative flex   mt-8w-full text-center h-96  justify-between rounded-xl shadow-md overflow-hidden backdrop-blur-lg  bg-opacity-40 bg-gray-800  transition duration-400 transform hover:-translate-x-2 hover:-translate-y-2  border-white border-opacity-10 ">
        <h2 class="text-[#7d8590] mb-3 text-2xl md:text-2xl ">
          <span className="text-white">GitHub Copilot</span> automates your
          build
          <br />
          test, and deployment workflow with simple and secure CI/CD
        </h2>
        <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll" />
      </div>
      <div>
        <div className=" flex  mt-8 justify-between m-4">
          <div class="relative w-1/2 h-full flex flex-col justify-between p-5 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
            <h1 class="text-[#7d8590] mb-3 text-2xl md:text-2xl">
              <span className="text-white">GitHub Codespaces</span> offers a
              complete dev <br />
              environment in
              <br />
              seconds. Code, build, test, <br /> and open pull requests from any
              repo.
            </h1>
            <h1 className="text-white text-lg font-semibold">
              Check out GitHub Codespaces
            </h1>
            <img
              src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=725&format=webpll"
              className="w h-96"
            />
          </div>
          <div class="relative w-1/2 h-full flex  flex-col justify-between p-8 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
            <h1 class="text-[#7d8590] mb-3 text-2xl md:text-2xl">
              <span className="text-white">GitHub Mobile</span> fits your
              projects in your pocket, so you never miss a beat while on the go
            </h1>
            <h1 className="text-white text-lg font-semibold">
              Download GitHub Mobile
            </h1>
            <img
              src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=724&format=webpll"
              className=""
            />
          </div>
        </div>

        {/* 3rd */}
        <div className="bg-[#0d1117] flex  mt-8">
          <div
            class=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
            style={{
              background:
                "linear-gradient(rgb(210, 168, 255), rgb(163, 113, 247) 10%, rgb(25, 108, 46) 70%, rgb(46, 160, 67) 80%, rgb(86, 211, 100))",
              marginLeft: "11px",
            }}
          ></div>
          <div className=" w-full">
            <h1 className=" text-emerald-500 text-4xl font-bold">7Xl faster</h1>
            <h1 className="text-white text-3xl font-semibold  mb-4 md:w-9/12 ">
              vulnerability fixes with GitHub1
            </h1>
            <div class="relative  h-full flex flex-row justify-between p-5 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
              <div className="flex-1 ">
                <h1 class="text-[#7d8590] mb-3 text-2xl md:text-2xl">
                  <span className="text-white">Code scanning</span> is our code
                  analysis tool that helps you remediate issues in your code.
                </h1>
                <a
                  href="/features/copilot"
                  class="text-semibold text-fg-default py-1 text-lg text-white md:text-xl "
                >
                  <a
                    href="/features/copilot"
                    class="text-semibold text-fg-default py-1 text-lg text-white md:text-xl"
                  >
                    Explore GitHub Copilot
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 inline-block align-middle"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        class="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </a>
                </a>
              </div>

              <div className="flex-1  ">
                <img
                  src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll"
                  className=" h-96"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between  mt-8 gap-4">
          <div class="relative w-1/2 h-full flex flex-col justify-between p-5 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
            <h1 class="text-[#7d8590] mb-3 text-2xl md:text-2xl">
              <span className="text-white">Dependabot</span> makes it easy to
              find and fix vulnerable dependencies in your supply chain.
            </h1>
            <h1 className="text-white text-lg font-semibold">
              Explore Dependabot
            </h1>
            <img
              src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&format=webpll"
              className=" h-96"
            />
          </div>
          <div class="relative w-1/2 h-full flex  flex-col justify-between p-8 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
            <h1 class="text-[#7d8590] mb-3 text-2xl md:text-2xl">
              <span className="text-white">Secret scanning</span> on
              automatically looks for partner patterns and prevents fraudulent
              use of accidentally committed secrets.
            </h1>
            <h1 className="text-white text-lg font-semibold">
              Read about secret scanning
            </h1>
            <img
              src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll"
              className=" h-96"
            />
          </div>
        </div>
      </div>
      <div className=" w-full m-4  mt-8 ">
        <div class="relative  h-full w-full p-5 rounded-lg backdrop-blur-lg bg-opacity-60 bg-gray-800 border border-white border-opacity-10 cursor-pointer card transition duration-500 transform hover:translate-x-2  hover:translate-y-2">
          <div className="">
            <img
              src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&format=webpll"
              className=" object-fit  h-96 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
