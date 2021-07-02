import React from 'react'
import { Formik, Form } from 'formik'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { Box, Button } from '@chakra-ui/react'
import { useRegisterMutation } from "../generated/graphql" 

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
	const [,register] = useRegisterMutation(); 
	return (
		<Wrapper variant="small">
			<Formik 
				initialValues={{username: '', password: ''}}
				onSubmit={ async (values, {setErrors}) => {
					console.log(values)

					const response = await register(values); 
					// optional chaining returns undefined if no data
					if(response.data?.register.errors) {
						setErrors({
							username: "hey im an error"
						})
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

export default Register