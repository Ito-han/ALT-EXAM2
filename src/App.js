import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	NavLink
} from "react-router-dom";
import "./App.css";
import {
	WithCustomHook,
	WithReducer,
	TestErrorBoundary,
	NoMatch
} from "./components";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<nav>
					<NavLink to="/custom-hook" style={{ textDecoration: "none" }}>
						{({ isActive }) => (
							<span className={isActive ? "link active" : "link"}>
								Custom Hook
							</span>
						)}
					</NavLink>
					<NavLink to="/use-reducer" style={{ textDecoration: "none" }}>
						{({ isActive }) => (
							<span className={isActive ? "link active" : "link"}>
								useReducer
							</span>
						)}
					</NavLink>
					<NavLink to="/error-boundary" style={{ textDecoration: "none" }}>
						{({ isActive }) => (
							<span className={isActive ? "link active" : "link"}>
								Error Boundary
							</span>
						)}
					</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<Navigate to="/custom-hook" />} />
					<Route path="/custom-hook" element={<WithCustomHook />} />
					<Route path="/use-reducer" element={<WithReducer />} />
					<Route path="/error-boundary" element={<TestErrorBoundary />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}
