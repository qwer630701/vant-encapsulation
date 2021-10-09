

# result 结果页组件

## 使用

```html

<template>
  <div>
    <result state="success" title="操作成功" desc="开房成功" />
  </div>
</template>

<script>
import result from "@/components/result";
export default {
  components: {
    result
  }
};
</script>

```

## API

参数  | 说明  | 类型  | 默认值
----  | ----  | ----  | ----  
state | 状态 success/wait/error/warning  | string  | success 
color | 图标颜色  | string  | - 
title | 标题  | string  | - 
desc  | 说明  | string  | -

## slot

参数  | 说明  | 类型  | 默认值
----  | ----  | ----  | ----  
icon | 图标  | slot  | - 
title | 标题  | slot  | - 
desc | 说明  | slot  | - 
