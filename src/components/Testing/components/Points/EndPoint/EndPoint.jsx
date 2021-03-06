import React, { useEffect } from 'react'
import { declOfNum } from '../../../../../scripts/countFormatter'
import style from './EndPoint.module.scss'

const EndPoint = ({
	setBodyState,
	questionsQuantity,
	dropAnswers,
	getNumberOfCorrectAnswers,
	correctAnswersCounter,
}) => {
	useEffect(() => {
		getNumberOfCorrectAnswers()
	})

	const startNewTest = () => {
		dropAnswers()
		setBodyState(1)
	}

	return (
		<div className={`${style.endPoint} ${style.endPoint__margin}`}>
			<div className={style.endPoint__TextBox}>
				<div>
					<p className={style.endPoint__text}>Тест завершен.</p>
					<p className={style.endPoint__text}>Вы правильно ответили</p>
					<p className={style.endPoint__text}>
						на {correctAnswersCounter} {declOfNum(correctAnswersCounter)} из{' '}
						{questionsQuantity}.
					</p>
				</div>
			</div>
			<div className={style.endPoint__linkBox}>
				<p
					className={`${style.endPoint__link} ${style.endPoint__link_margin}`}
					onClick={() => startNewTest()}
				>
					Пройти тест заново
				</p>
			</div>
		</div>
	)
}
export default EndPoint
