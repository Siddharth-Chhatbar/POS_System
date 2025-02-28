import { NavLink } from "react-router";
import "./App.css";
import { PageOptions } from "./shared/interfaces";

function App() {
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
      <div className="flex h-screen bg-blue-950">
      <div className="gap-8 grid grid-cols-3 items-center justify-center font-semibold text-2xl m-auto">
        {Pages.map((page: PageOptions) => (
          <NavLink className={`p-4 rounded bg-blue-500 text-white text-center ${page.name === "Backup Data" ? "col-span-3" : ""}`} to={page.path}>
            {page.name}
          </NavLink>
        ))}
        </div>
        </div>
    );
}

export default App;
