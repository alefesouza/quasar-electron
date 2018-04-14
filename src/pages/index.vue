<script>
export default {
  name: 'PageIndex',
  computed: {
    events() {
      return this.$store.state.meetup.events;
    },
  },
  methods: {
    openEvent(eventId) {
      console.log(eventId);
      this.$router.push('events/' + eventId);
    },
  },
};
</script>

<template>
  <q-page>
    <q-list highlight>
      <q-list-header>Últimos eventos</q-list-header>
      <q-item v-for="event in events" :key="event.id" @click.native="openEvent(event.id)">
        <q-item-main :label="event.name" :sublabel="event.venue.name" />
      </q-item>
    </q-list>
  </q-page>
</template>
