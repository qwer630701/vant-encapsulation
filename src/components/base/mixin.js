// export const slots = (name, props) => {
//   if (name === void 0) {
//     name = "default";
//   }

//   var $slots = this.$slots,
//     $scopedSlots = this.$scopedSlots;
//   var scopedSlot = $scopedSlots[name];

//   if (scopedSlot) {
//     return scopedSlot(props);
//   }

//   return $slots[name];
// };

const mixin = {
  data() {
    return {};
  },
  methods: {
    slots(name, props) {
      if (name === void 0) {
        name = "default";
      }

      var $slots = this.$slots,
        $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};

export { mixin };
