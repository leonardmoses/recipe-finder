// dummy API data =====
const apiData = [
	{
		title: 'Ice Cold Lemonade',
		image: 'https://i.imgur.com/Fm0svI5.jpg',
		ingredients: [
			'1 1/2 cups fresh squeezed lemon juice',
			'1 3/4 cups white sugar',
			'8 cups water',
		],
		instructions: [
			'Add the sugar and 1 cup of water to a small saucepan',
			'Warm the sugar and water over medium-hight heat, stirring constantly until the sugar has fully dissolved',
			'Allow the sugar water to cool to room temperature',
			'Cover and refridgerate until chilled',
			'Remove seeds from lemon juice',
			'Optional: Remove pulp from lemon juice for a smoother texture',
			'In a large pitcher, mix the chilled sugar water, the lemon juice, and the remaining 7 cups of water together',
			'Serve over ice',
		],
	},
	{
		title: 'Cozy Hot Chocolate',
		image: 'https://i.imgur.com/DVGYBHH.jpg',
		ingredients: [
			'1 cup unsweetened almond milk',
			'1 tbsp unsweetened cocoa powder',
			'1 1/2 tbsp dairy-free semisweet chocolate chips',
			'1 tbsp raw sugar',
			'Optional: 1/8 tsp peppermint extract',
			'Optional: Coconut whipped cream for topping',
		],
		instructions: [
			'Warm the almond milk in a small saucepan over medium heat',
			'Whisk in cocoa powder, chocolate chips, and raw sugar',
			'Continue stirring constantly until the chocolate has melted and everything is fully combined',
			'Optional: add the peppermint extract and top with whipped cream',
			'Serve immidately',
		],
	},
	{
		title: 'Green Juice',
		image: 'https://i.imgur.com/S5eplMY.jpg',
		ingredients: [
			'1 bunch kale',
			'1 large lemon, peeled and quartered',
			'1 inch ginger, peeled',
			'1 large cucumber, cut into strips',
			'2 large granny smith apples',
			'4 whole celery stalks',
		],
		instructions: [
			'Wash the vegetables throughly and prep them for juicing',
			'Juce the kale, then the lemon, then the ginger, then the cucumber, then the apples, followed by the celery',
			'Optional: Strain through a sieve to remove the pulp for a smoother texture',
			'Serve immidately',
		],
	},
]

// variables =====
const $getRecipeBtn = $('#getRecipeBtn')
const $mainContent = $('main')

// get api data =====
const getRecipe = () => {
	// this is where we could get the api data using AJAX
	// console.log(apiData)

	// select a random recipe from apiData
	const randomIndex = Math.floor(Math.random() * apiData.length)
	const recipe = apiData[randomIndex]
	displayRecipe(recipe)
}

const displayRecipe = (recipe) => {
	// console.log(recipe)

	// remove child elements (nodes) from the mainContent
	$mainContent.empty()

	// display recipe image
	const $img = $('<img>')
	$img.attr('src', recipe.image)
	$img.attr('alt', recipe.title)
	$mainContent.append($img)

	// create div to hold recipe info
	const $recipeInfo = $('<div>')
	$recipeInfo.addClass('recipeInfo')
	$mainContent.append($recipeInfo)

	// display recipe title
	const $recipeTitle = $('<h2>')
	$recipeTitle.text(recipe.title)
	$recipeInfo.append($recipeTitle)

	// display heading for ingredients list
	const $ingredientsHeading = $('<h3>')
	$ingredientsHeading.text('Ingredients')
	$recipeInfo.append($ingredientsHeading)

	// display list of ingredients
	const $ingredientsList = $('<ul>')
	$recipeInfo.append($ingredientsList)

	// display each ingredient as a list item
	recipe.ingredients.forEach((ingredient) => {
		// console.log(ingredient)

		const $li = $('<li>')
		$li.text(ingredient)
		$ingredientsList.append($li)
	})

	// display heading for instructions
	const $instructionsHeading = $('<h3>')
	$instructionsHeading.text('Instructions')
	$recipeInfo.append($instructionsHeading)

	// display list of instructions
	const $instructionsList = $('<ol>')
	$recipeInfo.append($instructionsList)

	// display each instruction as a list item
	recipe.instructions.forEach((instruction) => {
		// console.log(instruction)

		const $li = $('<li>')
		$li.text(instruction)
		$instructionsList.append($li)
	})
}

// event listeners =====
$getRecipeBtn.on('click', getRecipe)
