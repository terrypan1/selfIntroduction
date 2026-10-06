<template>
  <q-page class="dev">
    <div class="container">
      <Eyebrow>DEV · DESIGN SYSTEM</Eyebrow>
      <DisplayTitle class="mt">UI KIT</DisplayTitle>

      <h3>Tokens</h3>
      <div class="swatches">
        <div v-for="c in COLORS" :key="c" class="sw"><i :style="{ background: `var(${c})` }" /><code>{{ c }}</code></div>
      </div>

      <h3>Buttons</h3>
      <div class="row-g"><SiteButton to="/" arrow>View My Projects</SiteButton><SiteButton to="/" variant="ghost">About Me</SiteButton></div>

      <h3>Tags</h3>
      <div class="row-g"><TechTag v-for="x in ['AGV', '.NET', 'PostgreSQL', 'ROS 1']" :key="x">{{ x }}</TechTag></div>

      <h3>Section heading</h3>
      <SectionHeading index="01" title="FEATURED PROJECTS" desc="Selected work on industrial automation." arrows />

      <h3>Card</h3>
      <div class="cards">
        <NumberedCard to="/projects/agv" title="AGV / iMCS" index="01" subtitle="車隊調度 · 派工引擎 · 車載 ROS" :tags="['AGV', '.NET']"><template #media><ProjectGlyph kind="agv" /></template></NumberedCard>
        <NumberedCard to="/projects/pcba" title="AI 維修助手" index="02" subtitle="MES 資料 · 圖面定位" :tags="['FastAPI']"><template #media><ProjectGlyph kind="ai" /></template></NumberedCard>
        <NumberedCard to="/projects/ems" title="EMS" index="03" subtitle="智慧電表 · Modbus" :tags="['Modbus']"><template #media><ProjectGlyph kind="iot" /></template></NumberedCard>
        <NumberedCard to="/projects/order" title="Web" index="04" subtitle="權限 · 動態路由" :tags="['Vue 3']"><template #media><ProjectGlyph kind="web" /></template></NumberedCard>
      </div>

      <h3>Grid frame</h3>
      <GridFrame class="frame"><Eyebrow>CROSS MARKS AT FOUR CORNERS</Eyebrow></GridFrame>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import Eyebrow from '@/components/ui/Eyebrow.vue'
import DisplayTitle from '@/components/ui/DisplayTitle.vue'
import SiteButton from '@/components/ui/SiteButton.vue'
import TechTag from '@/components/ui/TechTag.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import NumberedCard from '@/components/ui/NumberedCard.vue'
import ProjectGlyph from '@/components/ui/ProjectGlyph.vue'
import GridFrame from '@/components/ui/GridFrame.vue'

const COLORS = ['--paper', '--surface', '--surface-2', '--ink', '--ink-2', '--ink-3', '--line', '--accent', '--accent-2', '--plus']
</script>

<style scoped>
.dev { padding-block: 48px 96px; }
.mt { margin: 16px 0 24px; }
h3 { font: 600 13px var(--font-mono); letter-spacing: 0.12em; color: var(--accent); margin: 36px 0 12px; text-transform: uppercase; }
.swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.sw { display: flex; gap: 10px; align-items: center; font-size: 12px; }
.sw i { width: 36px; height: 36px; border: 1px solid var(--line); }
.row-g { display: flex; gap: 10px; flex-wrap: wrap; }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px; }
.frame { padding: 32px; border: 1px dashed var(--line); }
</style>
