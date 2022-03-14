document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    // if (searchText == '') {
    //     //error show korao
    //     const noSearch = document.getElementById('no-result');
    //     noSearch.textContent = '';
    //     const notFound = document.createElement('div');
    //     notFound.innerHTML = `
    //     <div>
    //         <h4 class="text-center text-danger">Please Search Something</h4>
    //     </div>
    //     `;
    //     noSearch.appendChild(notFound);
    // }
    // else {
        // laod data
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.meals))
            .catch(error => displayError(error));
        displayPhoneDetail().textContent = '';
    // }
}

const displayError = error => {
    document.getElementById('error-message').style.display= 'block';
}


const displayFood = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = ''; //use kora uchit na

    if (meals.length == 0) {
        console.log('hello');
        const noResult = document.getElementById('no-result');
        const notFound = document.createElement('div');
        notFound.innerHTML = `
        <div>
            <h2>No result found.</h2>
        </div>
        `;
        noResult.appendChild(notFound);
    }

    else {
        searchResult.textContent = '';
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">View Receipe</a>
        </div>
    `;
    mealDetails.appendChild(div);

}
