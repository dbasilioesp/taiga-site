<template>
    <div class="tag"><slot /></div>
</template>

<style scoped>
.tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    padding-inline: 10px;
    font-size: 12px;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    background-color: var(--yellow);
}
</style>