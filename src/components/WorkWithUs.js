import React from 'react';
import './WorkWithUs.css';

function WorkWithUs() {
	return (
		<div className='work'>
			<div className='work-container'>
				<h1>Work With Us!</h1>
				<p>
					It Is A Long Established Fact That A Reader Will Be Distracted By The
					Readable Content Of A Page When Looking At Its Layout. The Point Of
					Using Lorem.
				</p>
				<form action='' className='form'>
					<h2>Project Enquiry</h2>
					<p>Fill up the form below to tell us more about your project</p>
					<div className='input-field'>
						<label htmlFor=''>Name</label>
						<input
							type='text'
							placeholder='How should we address you?'
							className='input'
						/>
					</div>
					<div className='input-field'>
						<label htmlFor=''>Contact</label>
						<input
							type='text'
							placeholder='Your phone number'
							className='input'
						/>
					</div>
					<div className='input-field'>
						<label htmlFor=''>Email</label>
						<input
							type='email'
							placeholder='Your work email'
							className='input'
						/>
					</div>
					<div className='input-field'>
						<label htmlFor=''>Type Of Project</label>
						<select name='' id='' className='input'>
							<option value='' disabled selected className='select-placeholder'>
								Select your project category
							</option>
							<option value=''>a</option>
							<option value=''>b</option>
							<option value=''>c</option>
						</select>
						<i className='fas fa-chevron-down select-arrow'></i>
					</div>
					<p className='note'>
						Our work differs between different types of projects (ie. ecommerce,
						mobile app, UI/UX design, branding, or interactive mobile game).
						Tell us your project category.{' '}
					</p>
					<div className='input-field'>
						<label htmlFor=''>Budget range</label>
						<select name='' id='' className='input'>
							<option value='' disabled selected>
								Select an estimate of your budget range
							</option>
							<option value=''>$10,000 - $15,000</option>
							<option value=''>$15,001 - $20,000</option>
							<option value=''>$20,001 - $25,000</option>
						</select>
						<i className='fas fa-chevron-down select-arrow'></i>
					</div>
					<p className='note'>
						There are many variations of passages of Lorem Ipsum but the
						majority have suffered alteration.
					</p>
					<div className='input-field'>
						<label htmlFor=''>Project Deadline</label>
						<input
							type='text'
							placeholder='When do you need it done?'
							className='input'
						/>
						<i className='fas fa-calendar-alt calendar'></i>
					</div>
					<div className='input-field'>
						<label htmlFor=''>Message</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Anything else to add?'
							className='input textarea'
						></textarea>
					</div>
					<button className='send'>Send</button>
				</form>
			</div>
		</div>
	);
}

export default WorkWithUs;
