import style from "./ProjectsTitle.module.scss";

interface ProjectsTitleProps {
  text: string;
}

export default function ProjectsTitle({ text }: Readonly<ProjectsTitleProps>) {
  return (
    <div className={style["title"]}>
      <p>{text}</p>
    </div>
  );
}
