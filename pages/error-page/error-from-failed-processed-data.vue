<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorFromFailedProcessedDataPage",
  setup(props) {
    const dataList: any[] = [];

    const abc = dataList.find((d) => d === 0);
    // 以下會出錯
    abc.find((a: any) => a === 0);

    return {};
  },
});
</script>
