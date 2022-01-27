const dataApi = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const optionsArray = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

export default dataApi;
