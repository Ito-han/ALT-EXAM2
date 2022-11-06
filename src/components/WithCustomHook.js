import React from "react";
import "./styles.css";
import useCounter from "../hooks/useCounter";
import { Helmet } from "react-helmet-async";

export default function WithCustomHook() {
	const { count, increment, decrement, reset, setValue } = useCounter();

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>WithCustomHook</title>
				<meta
					name="description"
					content="Custom counter hook with increment, decrement, reset, setValue functions"
				/>
			</Helmet>
			<div className="container">
				<input
					type="number"
					value={count}
					className="count-box"
					min="0"
					onChange={({ target }) => setValue(target.value)}
				/>
				<div className="btn-container">
					<div>
						<button onClick={() => decrement()} disabled={!count}>
							-
						</button>
						<button onClick={() => increment()}>+</button>
					</div>
					<button onClick={reset}>Reset</button>
				</div>
			</div>
		</>
	);
}
