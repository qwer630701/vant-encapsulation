<script>
import moment from "moment";
import { Field, Popup, Calendar } from "vant";

export default {
  name: "formCalendar",
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Calendar.name]: Calendar
  },
  props: {
    value: {
      type: [String, Array],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: ""
    },
    defaultDate: {
      type: Array,
      default: null
    },
    minDate: {
      type: [Date, Function],
      default: null
    },
    maxDate: {
      type: [Date, Function],
      default: null
    },
    isRevise: {
      type: Boolean,
      default: false
    },
    allowSameDay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      calendarUpdate: false,
      visible: false,
      calendarDefaultDate: null,
      initMinDate: null,
      initMaxDate: null
    };
  },
  watch: {
    value(val) {
      if (this.isRevise) {
        this.calendarUpdate = true;
        this.$nextTick(() => {
          if (val) {
            val = val.map(p => {
              return p instanceof moment
                ? p.toDate()
                : p instanceof Date
                ? p
                : new Date(p);
            });
          } else {
            val = [];
          }
          this.calendarDefaultDate = val;
          this.calendarUpdate = false;
        });
      }
    }
  },
  computed: {
    copyValue() {
      let { value } = this;
      if (value == "") {
        return "";
      } else {
        return value[0] + " - " + value[1];
      }
    },
    calendarMinDate() {
      let { minDate } = this;
      if (minDate && minDate instanceof moment) {
        minDate = minDate.toDate();
      }
      return minDate ? minDate : this.initMinDate;
    },
    calendarMaxDate() {
      let { maxDate } = this;
      if (maxDate && maxDate instanceof moment) {
        maxDate = maxDate.toDate();
      }
      return maxDate ? maxDate : this.initMaxDate;
    }
  },
  created() {
    if (this.defaultDate) this.calendarDefaultDate = this.defaultDate;
    this.initMinDate = moment().toDate();
    this.initMaxDate = moment()
      .add(6, "M")
      .toDate();
  },
  methods: {
    popupShow() {
      if (!this.readonly) this.visible = true;
    },
    confirm(data) {
      data = data.map(p => moment(p).format("YYYY-MM-DD"));
      this.visible = false;
      this.$emit("input", data);
      this.$emit("change", data);
    },
    fieldRender() {
      const {
        copyValue,
        label,
        required,
        placeholder,
        readonly,
        inputAlign,
        popupShow
      } = this;
      const option = {
        props: {
          readonly: true,
          rightIcon: readonly ? "" : "arrow",
          value: copyValue,
          label,
          required,
          placeholder,
          inputAlign
        },
        on: {
          click: popupShow
        }
      };
      return <van-field {...option} />;
    },
    calendarRender() {
      let {
        calendarUpdate,
        calendarDefaultDate,
        calendarMinDate,
        calendarMaxDate,
        allowSameDay,
        visible,
        confirm
      } = this;
      if (calendarUpdate) return "";
      const option = {
        props: {
          allowSameDay,
          type: "range",
          showConfirm: false,
          defaultDate: calendarDefaultDate,
          minDate: calendarMinDate,
          maxDate: calendarMaxDate,
          value: visible,
          getContainer: "#app"
        },
        on: {
          input: val => {
            this.visible = val;
          },
          confirm
        }
      };
      return <van-calendar {...option} />;
    }
  },
  render() {
    return (
      <div>
        {this.fieldRender()}
        {this.calendarRender()}
      </div>
    );
  }
};
</script>

<style lang="less" scoped></style>
