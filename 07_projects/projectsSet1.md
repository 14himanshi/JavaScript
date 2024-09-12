# Projects Related To DOM

## Project links:
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 

```javascript

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');
// console.log(body)

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target); // isse pata chalta hai ki event aa kaha se raha hai
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 2 

```javascript

const form = document.querySelector('form');
// this usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} <br>  Under Weight</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}  <br> Over Weight</span>`;
    } else {
      results.innerHTML = `<span>${bmi}  <br> Normal Range</span>`;
    }
    // results.innerHTML = `<span>${bmi}</span>`;
  }
});


```