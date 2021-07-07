import React from 'react'
import { Formik, Form } from 'formik'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { Box, Button } from '@chakra-ui/react'
import { useRegisterMutation } from "../generated/graphql" 
import { toErrorMap } from "../utils/toErrorMap"
import { useRouter } from "next/router"
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../utils/createUrqlClient'

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
	const router = useRouter();
	const [,register] = useRegisterMutation(); 
	return (
		<Wrapper variant="small">
			<Formik 
				initialValues={{username: '', password: ''}}
				onSubmit={ async (values, {setErrors}) => {
					const response = await register(values); 
					// optional chaining returns undefined if no data
					if(response.data?.register.errors) {
						// ui will show graphql error messages
						setErrors(toErrorMap(response.data.register.errors))
					} else if (response.data?.register.user) {
						// worked
						router.push("/")
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField 
							name="username" 
							placeholder="username" 
							label="Username"
						/>
						<Box mt={4}>
							<InputField 
								name="password" 
								placeholder="password" 
								label="Password"
								type="password"
							/>
						</Box>
						<Button 
							mt={4} 
							type='submit' 
							isLoading={isSubmitting}
							colorScheme="teal"
						>
							register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}

export default withUrqlClient(createUrqlClient) (Register)