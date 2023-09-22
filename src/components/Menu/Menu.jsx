import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Other</Link>
        </li>
      </ul>
    </nav>
  );
};
