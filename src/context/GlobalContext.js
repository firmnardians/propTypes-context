import React, { createContext, useMemo, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextContainer = ({ children }) => {
	const [isDarkmode, setDarkmode] = useState(true);

	const globalDispatch = useMemo(
		() => ({
			setDarkmode: (payload) => setDarkmode(payload),
		}),
		[]
	);

	return <GlobalContext.Provider value={{ globalDispatch, isDarkmode }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextContainer;
