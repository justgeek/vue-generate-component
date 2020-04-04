<template src="./{{name}}{% if postfix %}.{{postfix}}{% endif %}.{{ filesType.html }}"></template>
<script src="./{{name}}{% if postfix %}.{{postfix}}{% endif %}.{{ filesType.script }}"{% if filesType.script !="js" %} lang="{{ filesType.script }}"{% endif %}></script>
<style src="./{{name}}{% if postfix %}.{{postfix}}{% endif %}.{{ filesType.style }}" lang="{{ filesType.style }}"></style>