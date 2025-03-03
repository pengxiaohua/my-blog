import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center gap-5">
      <ul>
        <li>👨‍💻 Hi, I’m @AlexPeng</li>
        <li>👀 I’m interested in creating the magical stuff 🖤</li>
        <li>🌱 I’m currently learning how use to AI 💻</li>
        <li>💞️ I’m looking to collaborate on startup projects and future technologies</li>
        <li>🔍 Enjoys playing with new things every day</li>
        <li>📫 How to contact me?
          <a className="text-blue-500 underline" href="mailto:pengxiaohua@outlook.com">pengxiaohua@outlook.com</a>
        </li>
      </ul>

      <img className="md:w-[60%]" src="https://github-readme-stats.vercel.app/api?username=pengxiaohua&show_icons=true&theme=chartreuse-dark" alt="Alex Peng" />

      <img className="md:w-[60%]" src="https://leetcard.jacoblin.cool/xiaohua-5?site=cn&theme=chartreuse&font=Alata&ext=heatmap" alt="Alex Peng" />

    </div>
  );
};

export default AboutMe;
