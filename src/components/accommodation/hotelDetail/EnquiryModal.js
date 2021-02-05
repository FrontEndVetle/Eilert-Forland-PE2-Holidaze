import React from 'react';
import { useForm } from 'react-hook-form';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

//make dialog slide up from bottom
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function EnquiryModal({
	hotel,
	checkoutDate,
	checkinDate,
	modalClose,
	show,
	onSubmit,
}) {
	const { register, handleSubmit } = useForm({});

	return (
		<>
			<Dialog open={show} onClose={modalClose} TransitionComponent={Transition}>
				<MuiDialogTitle id='customized-dialog-title' onClose={modalClose}>
					Send us an enquiry
				</MuiDialogTitle>
				<MuiDialogContent dividers>
					<form className='form' onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={1} justify='space-between'>
							<Grid item xs={12} sm={5}>
								<TextField
									name='establishmentId'
									inputRef={register}
									defaultValue={hotel}
									InputProps={{
										readOnly: true,
									}}
									helperText='Name of accommodation'
								/>
								<TextField
									name='name'
									label='Name'
									placeholder='Please enter your name'
									fullWidth
									margin='normal'
									required
									inputRef={register}
								/>

								<TextField
									name='email'
									label='Email'
									placeholder='Enter your Email'
									fullWidth
									margin='normal'
									required
									inputRef={register}
								/>
							</Grid>
							<Divider orientation='vertical' flexItem />

							<Grid item xs={12} sm={5}>
								<TextField
									name='checkIn'
									defaultValue={checkinDate}
									fullWidth
									margin='normal'
									inputRef={register}
									InputProps={{
										readOnly: true,
									}}
									helperText='Checkin'
								/>
								<TextField
									name='checkOut'
									defaultValue={checkoutDate}
									fullWidth
									margin='normal'
									required
									inputRef={register}
									InputProps={{
										readOnly: true,
									}}
									helperText='Checkout'
								/>
							</Grid>
						</Grid>
						<MuiDialogActions>
							<Button type='submit'>Submit</Button>
							<Button onClick={modalClose}>Cancel</Button>
						</MuiDialogActions>
					</form>
				</MuiDialogContent>
			</Dialog>
		</>
	);
}

export default EnquiryModal;
