import axios from 'axios';

export const getPlacesData = async () => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list`,
      {
        params: {
          location_id: '293919',
          restaurant_tagcategory: '10591',
          restaurant_tagcategory_standalone: '10591',
          currency: 'USD',
          lunit: 'km',
          limit: '30',
          open_now: 'false',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            'adaee0494amsh1c26b53ffb19782p14c0aejsnbfb51622cf5f',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      },
    );
    return data;
  } catch (error) {
    return null;
  }
};
