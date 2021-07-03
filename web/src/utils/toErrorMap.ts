import { FieldError } from "../generated/graphql"

// turns an array of FieldErrors (graphql error type) into a map
export const toErrorMap = (errors: FieldError[]) => {
	const errorMap: Record<string, string> = {};
	errors.forEach(({ field, message }) => {
		errorMap[field] = message
	})
	return errorMap;
}