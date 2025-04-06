export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return { success: false };
  }
} 