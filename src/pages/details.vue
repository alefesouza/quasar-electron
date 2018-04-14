<template>
  <q-page padding>
    <div v-if="meetupEvent">
      <h2>{{ meetupEvent.name }}</h2>
      <div v-html="meetupEvent.description"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DetailsPage',
  computed: {
    meetupEvent() {
      return this.$store.state.meetup.events.find(
        e => e.id == this.$route.params.id
      );
    },
  },
};
</script>
