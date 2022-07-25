// import { useCallback, useEffect, useState } from "react";

// function useScrollHandler() {
// 	const [y, setY] = useState(document.scrollingElement.scrollHeight);
	
// 	const handleNavigation = useCallback(
// 		(e) => {
// 			if (y > window.scrollY) {
//             window.scrollTo(0, 1000)
// 				console.log('scrolling up');
// 			} else if (y < window.scrollY) {
//             window.scrollTo(0,500)

// 				console.log('scrolling down');
// 			}
// 			setY(window.scrollY);
// 		},
// 		[y]
// 	);

// 	useEffect(() => {
// 		window.addEventListener('scroll', handleNavigation);

// 		return () => {
// 			window.removeEventListener('scroll', handleNavigation);
// 		};
// 	}, [handleNavigation]);
// }

// export default useScrollHandler;
