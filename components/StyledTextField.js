import { TextField } from "@mui/material";

export default function StyledTextField(props) {
	return (
		<TextField
			{...props} // Spread all props for flexibility
			variant="outlined"
			fullWidth
			slotProps={{
				input: {
					sx: {
						color: "primary.contrastText", // Text color
						backgroundColor: "secondary.light", // Background color
						borderRadius: "4px", // Rounded corners
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "secondary.main", // Hover border color
						},
						...(props.slotProps?.input?.sx || {}), // Merge custom styles from props
					},
				},
				label: {
					sx: {
						color: "primary.contrastText", // Label color
						...(props.slotProps?.label?.sx || {}), // Merge custom styles from props
					},
				},
			}}
		/>
	);
}
