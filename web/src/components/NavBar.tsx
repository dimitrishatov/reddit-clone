import { Box, Link, Flex, Button, Heading } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
	const [{ data, fetching }] = useMeQuery({
		pause: isServer(),
	});
	let body = null;

	// data is loading
	if (fetching) {
		// user is not logged in
	} else if (!data?.me) {
		body = (
			<>
				<NextLink href="/login">
					<Link mr={2}>login</Link>
				</NextLink>
				<NextLink href="/register">
					<Link>register</Link>
				</NextLink>
			</>
		);

		// user is logged in
	} else {
		body = (
			<Flex align="center">
				<NextLink href="/create-post">
					<Button as={Link} color="teal.50" mr={4}>
						create post
					</Button>
				</NextLink>
				<Box align="center" mr={2}>
					{data.me.username}
				</Box>
				<Button
					onClick={() => {
						logout();
					}}
					isLoading={logoutFetching}
					variant="link"
					color="teal.50"
				>
					logout
				</Button>
			</Flex>
		);
	}

	return (
		<Flex zIndex={1} position="sticky" top={0} bg="teal" p={4} align="center">
			<Flex flex={1} m="auto" align="center" maxW={800}>
				<NextLink href="/">
					<Link>
						<Heading color="teal.50">Reddit* 🚀</Heading>
					</Link>
				</NextLink>
				<Box ml={"auto"}>{body}</Box>
			</Flex>
		</Flex>
	);
};
