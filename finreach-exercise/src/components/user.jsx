import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius"
];

const getZodiacSign = (birthDay, birthMonth) => {
  let zodiacSign = '';
  const monthIndex = months.indexOf(birthMonth);
  let day = birthDay.length > 1 && birthDay[0] === '0' ? birthDay.slice(1) : birthDay;
  switch (monthIndex) {
    case 0:
      if (day < 20)
        zodiacSign = zodiacSigns[0];
      else
        zodiacSign = zodiacSigns[1];
      break;
    case 1:
      if (day < 19)
        zodiacSign = zodiacSigns[1];
      else
        zodiacSign = zodiacSigns[2];
      break;
    case 2:
      if (day < 21)
        zodiacSign = zodiacSigns[2];
      else
        zodiacSign = zodiacSigns[3];
      break;
    case 3:
      if (day < 20)
        zodiacSign = zodiacSigns[3];
      else
        zodiacSign = zodiacSigns[4];
      break;
    case 4:
      if (day < 21)
        zodiacSign = zodiacSigns[4];
      else
        zodiacSign = zodiacSigns[5];
      break;
    case 5:
      if (day < 21)
        zodiacSign = zodiacSigns[5];
      else
        zodiacSign = zodiacSigns[6];
      break;
    case 6:
      if (day < 23)
        zodiacSign = zodiacSigns[6];
      else
        zodiacSign = zodiacSigns[7];
      break;
    case 7:
      if (day < 23)
        zodiacSign = zodiacSigns[7];
      else
        zodiacSign = zodiacSigns[8];
      break;
    case 8:
      if (day < 23)
        zodiacSign = zodiacSigns[8];
      else
        zodiacSign = zodiacSigns[9];
      break;
    case 9:
      if (day < 23)
        zodiacSign = zodiacSigns[9];
      else
        zodiacSign = zodiacSigns[10];
      break;
    case 10:
      if (day < 22)
        zodiacSign = zodiacSigns[10];
      else
        zodiacSign = zodiacSigns[11];
      break;
    case 11:
      if (day < 22)
        zodiacSign = zodiacSigns[11];
      else
        zodiacSign = zodiacSigns[0];
      break;
    default:
      zodiacSign = ''
      break;
  }

  return zodiacSign;
}

const getUserAge = (birthDay, birthMonth, birthYear) => {
  const monthIndex = (months.indexOf(birthMonth) + 1).toString();
  const formatMonth = monthIndex.length === 1 ? `0${monthIndex}` : monthIndex;
  const age = moment().diff(moment(`${birthYear}${formatMonth}${birthDay}`, 'YYYYMMDD'), 'years');
  return age;
}

const getSecondsFromBirth = (birthDay, birthMonth, birthYear) => {
  const monthIndex = (months.indexOf(birthMonth) + 1).toString();
  const formatMonth = monthIndex.length === 1 ? `0${monthIndex}` : monthIndex;
  const secondsBirth = moment().diff(moment(`${birthYear}${formatMonth}${birthDay}`, 'YYYYMMDD'), 'seconds');
  return `${secondsBirth} seconds` ;
}

export const User = ({user}) => <li className="collection-item avatar">
  <span> User: {user.userId}</span>
  <br/>
  <span>Name: {user.firstName}
    {user.lastName}</span>
  <br/>
  <span className="tooltipped" data-position="bottom" data-delay="50"
    data-tooltip={getSecondsFromBirth(user.birthDay, user.birthMonth, user.birthYear)}>Age: {getUserAge(user.birthDay, user.birthMonth, user.birthYear)}</span>
  <br/>
  <span>Company: {user.company}</span>
  <br/>
  <span>Zodiac: {getZodiacSign(user.birthDay, user.birthMonth)}</span>
</li>

User.displayName = 'User';
User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
