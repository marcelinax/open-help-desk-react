import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewProblem } from '../state/problemsSlice';
import { useHistory } from 'react-router-dom';

const OpenHelpDeskNeedyForm = () => {
		const [nickname, setNickname] = useState('');
		const [avatarUrl, setAvatarUrl] = useState('');
		const [checkIfFirstPageFormIsCompleted, setCheckIfFirstPageFormIsCompleted] = useState(false);
		const [problemCategory, setProblemCategory] = useState('');
		const [problemTitle, setProblemTitle] = useState('');
		const [problemTag, setProblemTag] = useState('');
		const [problemTags, setProblemTags] = useState([]);
		const [problemDescription, setProblemDescription] = useState('');
		const history = useHistory();
		const dispatch = useDispatch();

		const handleNicknameInput = (e) => {
			setNickname(e.target.value);
		};
		const handleAvatarUrlInput = (e) => {
			setAvatarUrl(e.target.value);
		};
		const handleProblemCategoryInput = (e) => {
			setProblemCategory(e.target.value);
		};
		const handleProblemTitleInput = (e) => {
			setProblemTitle(e.target.value);
		};
		const handleProblemDescriptionInput = (e) => {
			setProblemDescription(e.target.value);
		};
		const handleProblemTagInput = (e) => {
			setProblemTag(e.target.value);
		};


		const goToNexPageForm = () => {
			if (!nickname) {
				alert('Enter a nickname!');
				return;
			}
			if (!avatarUrl) {
				alert('Enter an avatar url!');
				return;
			}
			setCheckIfFirstPageFormIsCompleted(true);

		};

		const addNewProblem = () => {
			if (!problemDescription) {
				alert('Enter a problem description!');
				return;
			}
			if (!problemTitle) {
				alert('Enter a problem title!');
				return;
			}
			if (!problemCategory) {
				alert('Enter a problem category!');
				return;
			}
			const problem = {
				nickname,
				avatarUrl,
				problemTags,
				problemTitle,
				problemCategory,
				problemDescription
			};

			dispatch(createNewProblem(problem));
			history.push('/');

		};

		return !checkIfFirstPageFormIsCompleted ? (
			<div className={'open-help-desk-needy-form'}>
				<i className="bx bxs-left-arrow-alt go-back" onClick={() => {
					history.push('/');
				}}/>
				<div className={'open-help-desk-needy-form-box'}>
					<div className={'open-help-desk-needy-form-box-left'}>
						<div className={`open-help-desk-needy-form-box-left-btn ${!checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
							<i className="bx bx-user"></i>
							<p>Needy person</p>
						</div>
						<div className={`open-help-desk-needy-form-box-left-btn ${checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
							<i className="bx bxs-wrench"></i>
							<p>Problem</p>
						</div>
					</div>
					<div className={'open-help-desk-needy-form-box-main'}>
						<h1>Needy person</h1>
						<div className={'open-help-desk-needy-form-box-main-inputs-box'}>
							<div className={'input-box'}>
								<label>Nickname</label>
								<input value={nickname} onChange={handleNicknameInput}/>
							</div>
							<div className={'input-box'}>
								<label>Avatar url</label>
								<input value={avatarUrl} onChange={handleAvatarUrlInput}/>
							</div>
						</div>
						<button onClick={goToNexPageForm}>Next</button>
					< /div>
				</div>
			</div>


		) : (
			<div className={'open-help-desk-needy-form'}>

				<div className={'open-help-desk-needy-form-box'}>
					<div className={'open-help-desk-needy-form-box-left'}>

						<div
							className={`open-help-desk-needy-form-box-left-btn ${!checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}\``}>
							<i className="bx bx-user"></i>
							<p>Needy person</p>
						</div>
						<div
							className={`open-help-desk-needy-form-box-left-btn ${checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
							<i className="bx bxs-wrench"></i>
							<p>Problem</p>
						</div>

					</div>
					<div className={'open-help-desk-needy-form-box-main'}>
						<h1>Problem</h1>

						<div className={'open-help-desk-needy-form-box-main-inputs-box'}>
							<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>
								<div className={'input-box'}>
									<label>Problem category</label>
									<input value={problemCategory} onChange={handleProblemCategoryInput}/>
								</div>
								<div className={'input-box'}>
									<label>Problem title</label>
									<input value={problemTitle} onChange={handleProblemTitleInput}/>
								</div>
							</div>
							<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>
								<div className={'input-box'}>
									<label>Problem description</label>
									<textarea value={problemDescription} onChange={handleProblemDescriptionInput}/>
								</div>
							</div>
							<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>
								<div className={'input-box'}>
									<label>Problem tags</label>
									<input value={problemTag} onChange={handleProblemTagInput}/>
								</div>
							</div>
						</div>
						<button onClick={addNewProblem}>Finish</button>
					< /div>
				</div>
			</div>
		);
	}
;

export default OpenHelpDeskNeedyForm;