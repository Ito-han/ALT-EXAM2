import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App";
import { ErrorFallback } from "./components";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<App />
		</ErrorBoundary>
	</StrictMode>
);
