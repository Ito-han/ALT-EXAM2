import React, { useReducer } from "react";
import "./styles.css";
import { counterReducer, INITIAL_STATE } from "../reducers/count";
import { Helmet } from "react-helmet-async";

export default function WithReducer() {
	const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const increment = () => {
		dispatch({
			type: "INCREMENT"
		});
	};

	const decrement = () => {
		dispatch({
			type: "DECREMENT"
		});
	};

	const setValue = (value) => {
		dispatch({
			type: "SET_VALUE",
			value
		});
	};

	const reset = () => {
		dispatch({
			type: "RESET"
		});
	};

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
					value={state.count}
					className="count-box"
					min="0"
					onChange={({ target }) => setValue(target.value)}
				/>
				<div className="btn-container">
					<div>
						<button onClick={() => decrement()}>-</button>
						<button onClick={() => increment()}>+</button>
					</div>
					<button onClick={reset}>Reset</button>
				</div>
			</div>
		</>
	);
}
