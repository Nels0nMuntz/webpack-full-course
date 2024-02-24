import { Outlet, Link } from 'react-router-dom'
import classes from "./styles.module.scss";

export default function App() {
  return (
    <div className={classes.container}>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos, cumque earum quisquam a
        voluptatem, facilis, distinctio ad sit accusantium aspernatur nostrum delectus <span className={classes.high}>labore reprehenderit</span>. Enim vitae
        quam nisi quod.
      </p>
      <Outlet/>
    </div>
  );
}
