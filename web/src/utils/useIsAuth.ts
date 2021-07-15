import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIsAuth = () => {
	const [{ data, fetching }] = useMeQuery();
	const router = useRouter();
	useEffect(() => {
		if (!fetching && !data?.me) {
			// telling where to go after login
			router.replace("/login?next=" + router.pathname);
		}
	}, [fetching, data, router]);
};
