const formatCreditCard = (ccNumber) => {
  let formatedCC = ccNumber.replace(/[^\d]/g, '');
  if (formatedCC.length > 4) {
    let count = 0;
    formatedCC = formatedCC.split('');

    for (let i = 0; i < formatedCC.length; i += 1) {
      count += 1;
      if (count === 5) {
        formatedCC.splice(i, 0, ' ');
        count = 0;
      }
    }
    formatedCC = formatedCC.join('');
  }

  return formatedCC;
};

const getMinValidExpiriation = () => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth() + 1;

  const currentYear = currentDate.getFullYear();

  return [currentMonth, currentYear];
};

const validateExpiration = (creditCardExp) => {
  const minValidExpiration = getMinValidExpiriation();
  const minValidMonth = minValidExpiration[0];
  const minValidYear = minValidExpiration[1];

  const creditCardMonth = Number(creditCardExp.substring(5));

  const creditCardYear = Number(creditCardExp.substring(0, 4));

  if (minValidYear === creditCardYear && minValidMonth > creditCardMonth) {
    return false;
  }

  const isValidMonth = creditCardMonth > 0 && creditCardMonth < 13;
  const isValidYear = creditCardYear >= minValidYear;

  if (isValidMonth && isValidYear) {
    return true;
  }

  return false;
};

export default { formatCreditCard, validateExpiration };
