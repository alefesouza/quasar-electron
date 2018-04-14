import axios from 'axios';

export const getEvents = async ({ commit }) => {
  const response = await axios.get(
    'https://api.meetup.com/VueJS-SP/events?status=past'
  );

  commit('ADD_EVENTS', response.data);
};
