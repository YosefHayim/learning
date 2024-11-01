const formEl = document.querySelector('form');
const resultContainer = document.querySelector('.results-shown-here-container')
const dataResultContainer = document.querySelector('.complete-result-container')
const monthlyPaymentEl = document.querySelector('.monthly-p-r')
const totalPaymentEl = document.querySelector('.total-p-r')

const formDatas = () => {
  formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const form = new FormData(formEl);

    const mortgageAmount = parseFloat(form.get('mortgage-amount'));
    const mortgageTerm = parseFloat(form.get('mortgage-term'));
    const interestRate = parseFloat(form.get('mortgage-percent')) / 100;
    const isRepayment = form.get('repayment');
    const isInterestOnly = form.get('interest-only');

    const monthlyInterestRate = interestRate / 12;
    const totalPayments = mortgageTerm * 12;

    const monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    const totalRepayment = monthlyPayment * totalPayments;
    const resultMonthP = monthlyPayment.toFixed(1)
    const resultTotalP = totalRepayment.toFixed(2)
    

    resultContainer.style.display = `none`
    monthlyPaymentEl.textContent = `£${resultMonthP}`
    totalPaymentEl.textContent = `£${resultTotalP}`
    dataResultContainer.style.display = `flex`
    formEl.reset();
  });
};

formDatas();

const radioContainerEl = document.querySelector('.mortgage-type-container');

radioContainerEl.addEventListener('click', (ev) => {
  const repaymentContainer = document.querySelector('.repayment-container');
  const interestContainer = document.querySelector('.interest-container');
  
  const clickedRepayment = ev.target.closest('.repayment-container');
  const clickedInterest = ev.target.closest('.interest-container');

  if (clickedRepayment) {
    repaymentContainer.style.background = `hsl(61deg 70% 52% / 30%)`;
    interestContainer.style.background = ``;
  } else if (clickedInterest) {
    interestContainer.style.background = `hsl(61deg 70% 52% / 30%)`;
    repaymentContainer.style.background = ``;
  }
});
