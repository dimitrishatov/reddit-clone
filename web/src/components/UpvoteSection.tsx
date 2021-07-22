import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpvoteSectionProps {
	post: PostSnippetFragment;
}

export const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
	const [loadingState, setLoadingState] = useState<
		"upvote-loading" | "downvote-loading" | "not-loading"
	>("not-loading");
	const [, vote] = useVoteMutation();
	return (
		<Flex direction="column" justifyContent="center" alignItems="center">
			<IconButton
				aria-label="upvote"
				icon={<ChevronUpIcon size="24px" />}
				colorScheme={post.voteStatus === 1 ? "green" : undefined}
				isLoading={loadingState === "upvote-loading"}
				variant={post.voteStatus === 1 ? "outline" : undefined}
				onClick={async () => {
					if (post.voteStatus === 1) {
						return;
					}
					setLoadingState("upvote-loading");
					await vote({
						postId: post.id,
						value: 1,
					});
					setLoadingState("not-loading");
				}}
			/>
			{post.points}
			<IconButton
				aria-label="downvote"
				icon={<ChevronDownIcon size="24px" />}
				isLoading={loadingState === "downvote-loading"}
				variant={post.voteStatus === -1 ? "outline" : undefined}
				colorScheme={post.voteStatus === -1 ? "red" : undefined}
				onClick={async () => {
					if (post.voteStatus === -1) {
						return;
					}
					setLoadingState("downvote-loading");
					await vote({
						postId: post.id,
						value: -1,
					});
					setLoadingState("not-loading");
				}}
			/>
		</Flex>
	);
};
