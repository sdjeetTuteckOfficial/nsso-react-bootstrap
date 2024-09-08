export const formatDateToISO = (dateString) => {
  console.log('yoyo', dateString);
  if (dateString === null) {
    return '';
  } else {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
  //   console.log('date>>>>>', dateString);
  //   if(dateString === null) return '';
  //   if (!dateString) return ''; // Return empty string if input is null, undefined, or empty string

  //   const date = new Date(dateString);

  //   if (
  //     isNaN(date.getTime()) ||
  //     (date.getFullYear() === 1970 &&
  //       date.getMonth() === 0 &&
  //       date.getDate() === 1)
  //   ) {
  //     return '';
  //   }

  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');

  //   return `${year}-${month}-${day}`;
};
