import { FaGitAlt, FaDocker } from "react-icons/fa";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiPython, SiPostgresql, SiRedux, SiReact, SiHeroku, SiNetlify, SiRender } from "react-icons/si";

const icons = [
  { Icon: SiHtml5, top: "10%", left: "15%" },
  { Icon: SiCss3, top: "20%", left: "70%" },
  { Icon: SiTailwindcss, top: "8%", left: "55%" },
  { Icon: SiJavascript, top: "30%", left: "27%" },
  { Icon: SiTypescript, top: "80%", left: "85%" },
  { Icon: SiPython, top: "70%", left: "30%" },
  { Icon: SiPostgresql, top: "75%", left: "65%" },
  { Icon: SiRedux, top: "50%", left: "14%" },
  { Icon: SiReact, top: "85%", left: "50%" },
  { Icon: FaGitAlt, top: "10%", left: "84%" },
  { Icon: FaDocker, top: "75%", left: "10%" }, 
  { Icon: SiHeroku, top: "40%", left: "90%" }, 
  { Icon: SiNetlify, top: "85%", left: "20%" }, 
  { Icon: SiRender, top: "55%", left: "80%" }, 
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0">
      {icons.map(({ Icon, top, left }, index) => (
        <Icon
          key={index}
          className="absolute text-white opacity-25 text-6xl animate-float"
          style={{ top, left }}
        />
      ))}
    </div>
  );
}
