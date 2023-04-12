import { DashBoardIcon } from "../icons/SVGIcon";
function Nav() {
  return (
    <div
      className="dark:bg-[--color-dark-900] w-52 p-5 text-lg dark:text-[--text-dark-300] font-medium rounded-s-2xl"
      style={{ height: "100%" }}
    >
      <ul className="space-y-2">
        <li className="dark:hover:bg-[--color-dark-600] border dark:border-[--border-dark-800] flex items-center justify-center h-12 rounded-lg">
          <DashBoardIcon color="var(--text-dark-300)" size="1em" />
          <span>DashBoard</span>
        </li>
        <li className="dark:hover:bg-[--color-dark-600] border dark:border-[--border-dark-800] flex items-center justify-center h-12 rounded-lg">
          DashBoard
        </li>
        <li className="dark:hover:bg-[--color-dark-600] border dark:border-[--border-dark-800] flex items-center justify-center h-12 rounded-lg">
          DashBoard
        </li>
        <li className="dark:hover:bg-[--color-dark-600] border dark:border-[--border-dark-800] flex items-center justify-center h-12 rounded-lg">
          DashBoard
        </li>
      </ul>
    </div>
  );
}

export default Nav;
