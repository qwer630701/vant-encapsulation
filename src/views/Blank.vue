<script>
export default {
  data() {
    return {};
  },
  created() {
    //刷新页面用
    this.$router.push({
      name: this.$route.query.path
    });
  },
  methods: {}
};
</script>
