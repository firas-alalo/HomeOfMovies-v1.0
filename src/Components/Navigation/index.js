import {Link } from "react-router-dom";
import '../../App.css';

export default function Navigation () {
  return (
<div className={"navigation"}>
        <div>
            <Link className={"link"} to="/">Home</Link>
            <Link className={"link"} to="/action">Action</Link>
            <Link className={"link"} to="/comedy">Comedy</Link>
            <Link className={"link"} to="/thriller">Thriller</Link>
            <Link className={"link"} to="/war">War</Link>
            <Link className={"link"} to="/romance">Romance</Link>
            <Link className={"link"} to="/drama">Drama</Link>
            <Link className={"link"} to="/crime">Crime</Link>
            <Link className={"link"} to="/documentary">Documentary</Link>
            <Link className={"link"} to="/horror">Horror</Link>
        </div>
    </div>
  )
};