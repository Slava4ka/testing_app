const questions = [
	{
		questionId: 1,
		question: 'Сколько весит куб бетона М 250?',
		answers: [
			{ value: '2348 кг', right: true },
			{ value: '2000 кг', right: false },
			{ value: '3543 кг', right: false },
			{ value: '2999 кг', right: false },
		],
	},
	{
		questionId: 2,
		question: 'Кто играл бэтмена в трилогии Кристофера Нолана?',
		answers: [
			{ value: 'Константин Хабенский', right: false },
			{ value: 'Джейк Джилленхол', right: false },
			{ value: 'Роберт Дауни — младший', right: false },
			{ value: 'Кристиан Бэйл', right: true },
		],
	},
	{
		questionId: 3,
		question: 'Как зовут главного героя повести Николая Васильевича Гоголя "Шинель"?',
		answers: [
			{ value: 'Иван Александрович Хлестаков', right: false },
			{ value: 'Акакий Акакиевич Башмачкин', right: true },
			{ value: 'Михаил Семёнович Собакевич', right: false },
			{ value: 'Аксентий Иванович Поприщин', right: false },
		],
	},
	{
		questionId: 4,
		question: 'Чему равна скорость света в вакууме?',
		answers: [
			{ value: '300 000 км/с', right: true },
			{ value: '250 000 км/с', right: false },
			{ value: '423 000 км/с', right: false },
			{ value: '500 000 км/с', right: false },
		],
	},
	{
		questionId: 5,
		question: 'Сколько раз сборная Италии по футболу была чемпионом мира?',
		answers: [
			{ value: '2', right: false },
			{ value: '3', right: false },
			{ value: '4', right: true },
			{ value: '5', right: false },
		],
	},
]

const answersFromUser = [
	{
		questionId: 1,
		value: '1',
	},
	{
		questionId: 2,
		value: '1',
	},
	{
		questionId: 3,
		value: '1',
	},
	{
		questionId: 4,
		value: '1',
	},
	{
		questionId: 5,
		value: '1',
	},
]

const createObj = (questionId, value, right) => {
	return { questionId, value, right }
}

const checkAnswers = (questionsArr, answersArr) => {
	return answersArr.map(answer => {
		const currentQuestion = questionsArr.filter(
			question => question.questionId === answer.questionId
		)

		const currentAnswer = currentQuestion[0].answers.filter(
			answerInCurrentQuestion => answerInCurrentQuestion.value === answer.value
		)[0]

		return createObj(
			answer.questionId,
			currentAnswer.value,
			currentAnswer.right
		)
	})
}

const countRightAnswers = answers => {
	return answers.filter(answer => answer.right).length
}

const countWrongAnswers = answers => {
	return answers.filter(answer => !answer.right).length
}

const initState = {
	testStart: false,
	currentTestPoint: 0,
	answers: [],
	questions: [],
}

console.time('FirstWay')
console.log(checkAnswers(questions, answersFromUser))
console.timeEnd('FirstWay')

console.log(countRightAnswers(checkAnswers(questions, answersFromUser)))
console.log(countWrongAnswers(checkAnswers(questions, answersFromUser)))


console.log(JSON.stringify(questions));