import React from "react";
import AvatarImg from "../Asset/Images/profile-pic.png";
const About = () => {
  return (
    <section id="about" className=" bg-[#1f2937] ">
      <div
        class="max-w-sm w-full lg:max-w-full lg:flex container"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        {/* <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        ></div> */}
        <div class="border-solid border-2  lg:border-gray-400 bg-white rounded-xl p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam animi pariatur perferendis,
              maxime sed sit magni, libero nam nesciunt accusamus placeat
              temporibus natus eum. Nihil consequuntur ad id unde ducimus saepe
              temporibus autem, labore laborum doloremque iste debitis animi
              aspernatur!
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src={AvatarImg}
              alt="Avatar of Gaurav"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Gaurav Roy</p>
              <p class="text-gray-600">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
