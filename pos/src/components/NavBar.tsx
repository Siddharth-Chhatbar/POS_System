import { NavLink } from "react-router";
import { PageOptions } from "../shared/interfaces";


const NavBar = () => {
  const Pages: PageOptions[] = [
    {
      name: "Billing",
      path: "/billing",
    },
    {
      name: "Inventory",
      path: "/inventory",
    },
    {
      name: "Suppliers",
      path: "/suppliers",
    },
    {
      name: "Employees",
      path: "/employees",
    },
    {
      name: "Report",
      path: "/report",
    },
    {
      name: "Federal Complient Reporting",
      path: "/federal-complient-reporting",
    },
    {
      name: "Backup Data",
      path: "/backup-data",
    },
  ];
  return (
    <div className="gap-2 flex flex-row pt-2 items-center justify-center font-semibold text-2xl">
      {Pages.map((page: PageOptions) => (
        <NavLink className="p-4 rounded bg-blue-800 text-white" to={page.path}>
          {page.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
