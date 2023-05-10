<template>
    <n-space vertical size="large" class="container-main">
        <n-layout has-sider>
            <n-layout-sider bordered collapse-mode="width" :width="240" :collapsed-width="64" show-trigger @collapse="collapsed = false" @expand="collapsed = false">
                <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" :render-label="renderMenuLabel" :render-icon="renderMenuIcon" :expand-icon="expandIcon"></n-menu>
            </n-layout-sider>
            <n-layout-content>
                <EditorInterface />
            </n-layout-content>
        </n-layout>
    </n-space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import EditorInterface from '../components/EditorInterface.vue';
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5';
const menuOptions: MenuOption[] = [
    {
        label: '主角',
        key: 'main',
        href: ''
    },
    {
        label: '配角',
        key: 'first',
        href: ''
    }
]
const collapsed: Boolean = true
const renderMenuLabel: Function = (option: MenuOption) => {
    if ('href' in option) {
        return h(
        'a',
        { href: option.href, target: '_blank' },
        option.label as string
        )
    }
    return option.label as string
}
const renderMenuIcon: Function = (option: MenuOption) => {
    // 渲染图标占位符以保持缩进
    if (option.key === 'sheep-man') return true
    // 返回 falsy 值，不再渲染图标及占位符
    if (option.key === 'food') return null
    return h(NIcon, null, { default: () => h(BookmarkOutline) })
}
const expandIcon: Function = () => {
    return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
</script>