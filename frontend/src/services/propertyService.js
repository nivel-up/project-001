
// services/propertyService.js
export const fetchProperties = async () => {
    const response = await fetch('http://localhost:5001/prty');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  