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

export default { formatCreditCard };
