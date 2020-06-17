import BogleRegular from './Bogle/Bogle-Regular.otf';

const boggleRegular = {
  fontFamily: 'Bogle',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Bogle-Regular'),
    url(${BogleRegular}) format('otf')
  `
};

export default { boggleRegular };
