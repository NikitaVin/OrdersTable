export const formatToDate = (date: string) => {
  if (date.length === 10) {
    const arrDate = date.split('');
    const year = arrDate.splice(6, 4);
    const mounth = arrDate.splice(3, 2);
    const day = arrDate.splice(0, 2);
    const formatToDate = [...year, ...mounth, ...day];

    formatToDate.splice(4, 0, '-');
    formatToDate.splice(7, 0, '-');
    const strFormatToDate = formatToDate.join('');

    return strFormatToDate;
  }
};
