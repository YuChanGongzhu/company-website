<template>
  <div>
    <NavBar />
    <br><br><br>
    <RollPart />
    <AdvantagePart />
    <BusinessPart />
    <AISolution />
    <CustomizedSoftware />
    <InformatizationUpgrade />
    <TeamMembers />
    <footer style="background-color: #3860D2;padding: 30px 0;"></footer>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import RollPart from './RollPart.vue'
import AdvantagePart from './AdvantagePart.vue'
import BusinessPart from './BusinessPart.vue'
import AISolution from './AISolution.vue'
import CustomizedSoftware from './CustomizedSoftware.vue'
import InformatizationUpgrade from './InformatizationUpgrade.vue'
import TeamMembers from './TeamMembers.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    RollPart,
    AdvantagePart,
    BusinessPart,
    AISolution,
    CustomizedSoftware,
    InformatizationUpgrade,
    TeamMembers
  }
}
</script>
