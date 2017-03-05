import moment from 'moment';

export const bookOfTheWeek = (books) => {
  /* eslint global-require: 0*/
  const data = books || require('../data/books.json');
  return (weekNumber) => {
    const index = weekNumber || moment().format('W');
    return data[(index - 1) % data.length];
  };
};

export default bookOfTheWeek;
