import DataLoader from "dataloader";
import { User } from "../entities/User";

// takes batch load function, takes in data from keys and returns data for all keys
export const createUserLoader = () =>
	new DataLoader<number, User>(async (userIds) => {
		const users = await User.findByIds(userIds as number[]);
		const userIdToUser: Record<number, User> = {};

		users.forEach((u) => {
			userIdToUser[u.id] = u;
		});

		return userIds.map((userId) => userIdToUser[userId]);
	});
