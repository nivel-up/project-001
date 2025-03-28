
// services/propertyService.js
const fetchProperties = async ({searchParams}) => {
    console.log(searchParams);

    const filteredParams = Object.entries(searchParams).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          acc[key] = value;
        }
        return acc;
      }, {});

    const queryParams = new URLSearchParams(filteredParams).toString();
    const response = await fetch(`http://localhost:5001/prty?${queryParams}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };

  export { fetchProperties };
  