const btns = document.querySelectorAll('.button');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;
    const input = this.parentElement.querySelector('.number');
    const currentValue = Number(input.value);
    let newValue = 0;

    if(direction === 'plus') {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1;
    }

    input.value = newValue;
  })
})
