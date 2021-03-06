import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-blue";
  if (active === value) className += " text-blue";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="blockchain" {...props} />
      <NavItem value="ue5" {...props} />
      <NavItem value="c#" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="angular" {...props} />
      <NavItem value="azure" {...props} />
      <NavItem value="wordpress" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
