<template>
  <div class="detailParams" v-if="Object.keys(paramsInfo).length">
    <div class="paramsRules">
      <table v-if="paramsInfo.rule && paramsInfo.rule.tables.length">
        <tr v-for="(item, index) in paramsInfo.rule.tables[0]"
            :key="index" >
          <td v-for="(cItem, cIndex) in item" :key="cIndex">{{cItem}}</td>
        </tr>
      </table>
    </div>
    <div class="paramsInfo">
      <table>
        <tr v-for="(item,index) in paramsInfo.info.set" :key="index">
          <td class="paramsInfoKey">{{item.key}}</td>
          <td class="paramsInfoValue">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}
</script>

<style scoped>
  .detailParams {
    padding: 10px 18px 15px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
  }

  .detailParams table {
    width: 100%;
    border-collapse: collapse;
  }

  .paramsRules table tr td, .paramsInfo table tr td{
    padding: 12px 16px;
  }

  .paramsRules table tr {
    text-align: center;
    border-bottom: 1px solid rgba(100,100,100, .1);
  }

  .paramsRules table tr:last-child {
    border-bottom: 2px solid rgba(100,100,100, .3);
  }

  .paramsInfo table tr {
    border-bottom: 1px solid rgba(100,100,100, .1);
  }
  .paramsRules table tr td:first-child {
    padding: 8px 60px 8px 0px;
    text-align: left;
  }

  .paramsInfo .paramsInfoKey {
    width: 30%;
    padding: 8px 0px;
  }

  .paramsInfo .paramsInfoValue {
    color: var(--color-high-text);
  }
</style>