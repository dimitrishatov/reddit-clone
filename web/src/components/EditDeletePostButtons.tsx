import NextLink from "next/link";
import { Link, Box, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
	id: number;
	creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
	id,
	creatorId,
}) => {
	const [{ data: meData }] = useMeQuery();
	const [, deletePost] = useDeletePostMutation();

	if (meData?.me?.id !== creatorId) {
		return null;
	}

	return (
		<Box>
			<NextLink href="/post/edit/[id]" as={`post/edit/${id}`}>
				<IconButton
					as={Link}
					colorScheme="teal"
					variant="outline"
					mr={2}
					aria-label="edit post"
					icon={<EditIcon />}
				/>
			</NextLink>
			<IconButton
				colorScheme="teal"
				variant="outline"
				ml="auto"
				aria-label="delete post"
				icon={<DeleteIcon />}
				onClick={() => {
					deletePost({ id });
				}}
			/>
		</Box>
	);
};
